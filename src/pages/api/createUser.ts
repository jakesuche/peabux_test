// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {withSessionRoute} from 'HOF/session'

type Data = {
  name: string
}

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const users = req.session.users 
  users.push(req.body)
  req.session.users = users
  req.session.save()

  res.status(200).json({ name: "John Doe" });
  
});


