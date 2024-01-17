"use client"

import { useSocket } from "./Providers/socket-provider"
import { Badge } from "./ui/badge"

export const SocketIndicator = () => {
  const { isConnected: connected } = useSocket()

  if(!connected){
    return (
      <Badge variant={'outline'} className="bg-yellow-300 text-white border-none">
        Fallback: Polling every 1 second
      </Badge>
    )
  }

  return (
    <Badge variant={'outline'} className="bg-emerald-400 text-white border-none">
      Successful :)
    </Badge>
  )
}
