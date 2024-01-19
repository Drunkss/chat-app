"use client"

import { useSocket } from "@/components/Providers/socket-provider";
import { SocketIndicator } from "@/components/socket-indicator";
//import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react"

const page = () => {
  const [ msg, setmsg ] = useState("ssss")
  const [ click, setClick ] = useState(false)
  const { socket } = useSocket()


  async function testfn(){
    setClick(true)
    const message = await axios.get("/api/socket/test") 
   return msg
  }

  useEffect(()=>{
    if(!socket) return

    socket.on("message",(val : { msg: string }) => {
      setmsg(val.msg)
    })
  },[socket])

  return (
    <div className="p-[10rem] font-bold text-3xl">
      <SocketIndicator/>

      <h1>
        {msg}
      </h1>

      <Button onClick={() => {testfn()}}>Test</Button>
    </div>
  )
}

export default page;
