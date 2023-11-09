// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {withSessionRoute} from 'HOF/session'
import { FormDataProps } from 'utils/schema'

type Data = {
  message: string
  data:FormDataProps[]
}

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = req.session.users 
  res.status(200).json({ message: "User retrived" ,data:users || []});
});


