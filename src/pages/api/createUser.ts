import type { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "HOF/session";
import { FormDataProps } from "utils/schema";

type Data = {
  name?: string;
  error?:string
  data?:FormDataProps[]
};

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const users = req.session.users || []; 
    if(users.length === 0) {
      // check for if data exists in session
       users.push(req.body);
       req.session.users = users;
       await req.session.save();

    }else {
       if (Array.isArray(users)) {
         const { type, teacherNumber, studentNumber, nationalId } = req.body;

         if (type === "teacher") {
           // Check if teacherNumber is unique
           const isUnique = !users.some(
             (user) =>
               user.type === "teacher" && user.teacherNumber === teacherNumber
           );

           if (isUnique) {
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
             users.push(req.body);
             req.session.users = users;
             await req.session.save();
           } else {
             // Handle the case where studentNumber is not unique (e.g., return an error)
             res.status(400).json({ error: "Student number is not unique" });
           }
         }

         // Check if nationalId is unique
         const isUniqueNationalId = !users.some(
           (user) => user.nationalId === nationalId
         );

         if (isUniqueNationalId) {
           // Push the new record to the array
           users.push(req.body);
           req.session.users = users;
           await req.session.save();
         } else {
           // Handle the case where nationalId is not unique (e.g., return an error)
           res.status(400).json({ error: "National ID is not unique" });
         }
       } else {
         // If it's not an array, handle it accordingly (e.g., initialize it as an array)
         req.session.users = [req.body];
         await req.session.save();
         console.log(req.session.users);
       }
    }

   

    res.status(200).json({ name: "John Doe", data: req.session.users });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});