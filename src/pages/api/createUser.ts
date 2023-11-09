import type { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "HOF/session";
import { FormDataProps } from "utils/schema";

type Data = {
  message?: string;
  error?:string
  data?:FormDataProps[]
};



export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const users = req.session.users || []; // Initialize users as an empty array if it doesn't exist

    // checks for undefined  users in the session
    if (typeof req.session.users !== 'undefined') {
      const { type, teacherNumber, studentNumber, nationalId } = req.body;


      const isNationIdUnique = !users.some(
        (user) => user?.nationalId === nationalId
      );

      if(!isNationIdUnique){

        res.status(400).json({ error: "National identity must be unique" });
        return 
      }


      if (type === "teacher") {
        // Check if teacherNumber is unique
        const isUnique = !users.some(
          (user) =>
            user.type === "teacher" && user.teacherNumber === teacherNumber
        );


        if (isUnique) {
          // Push the new record to the array
          users.push(req.body);
          req.session.users = users;
          await req.session.save();
        } else {
          res.status(400).json({ error: "Teacher number is not unique" });
        }
      } else if (type === "student") {
        // Check if studentNumber is unique
        const isUnique = !users.some(
          (user) =>
            user.type === "student" && user.studentNumber === studentNumber
        );

        if (isUnique) {
          // Push the new record to the array
          users.push(req.body);
          req.session.users = users;
          await req.session.save();
        } else {
          res.status(400).json({ error: "Student number is not unique" });
        }
      }
    } else {
      req.session.users = [req.body];
      await req.session.save();
      console.log(req.session.users);
    }

    res.status(200).json({ error: "User saved successfull", data: req.session.users });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});