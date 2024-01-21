"use client"

import { useSocket } from "@/components/Providers/socket-provider";
import { SocketIndicator } from "@/components/socket-indicator";
import { useEffect, useState } from "react"
import io from 'socket.io-client'

const page = () => {
  const [ message, setMessage ] = useState("dd");
  const { socket } = useSocket();

  useEffect(() => {socketinit()
    return () => {
      socket.disconnect()
    }
  }, [])

  async function socketinit() {
    await fetch('/api/socket/io')
    socket.on("connect", () => {
      console.log("connected")
    })

    socket.on("message",(msg : string) => {
      setMessage(msg)
    })
  }


  return (
    <div>
      <SocketIndicator/>
      <h1>{message}</h1>
    </div>
  )
}

export default page;
