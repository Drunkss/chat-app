import { NextApiResponseServerInfo } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler( 
  req: NextApiRequest,
  res: NextApiResponseServerInfo
){
  res?.socket?.server?.io?.socketsJoin("room1")
  res?.socket?.server?.io?.emit("message",{
    msg: "Hello"
  })

  return res.status(200).json({ message: "nice :)" })
}
