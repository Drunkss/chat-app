"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useSocket } from "@/components/Providers/socket-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { messages as messagesType } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const page = ({ params:{chatid} } : { params:{chatid: String} }) => {
  const messages: messagesType[] | null = []
  const [input,setInput] = useState("")
  const { socket } = useSocket()
  
  useEffect(async () => {
    if(!socket) await axios.get('/api/socket/io')

    socket.on(`${chatid}:msg`,(message : messagesType) => {
      messages.push(message)
    })
  },[])

  const { mutate } = useMutation({
    mutationFn: async () => {
      await axios.get("/api/socket/messages/create",{
        data: {
          content: input,
          date: "today",
          author: "Me"
        }
      })
    }
  })

  return (
    <MaxWidthWrapper className="max-w-[90%] border rounded-xl border-b-black h-full justify-start p-4 mt-5">
      <div className="font-bold text-3xl text-start w-full">
        {chatid.toUpperCase()}
      </div>
      <div className="flex flex-col items-center justify-center h-[30rem]">
        { messages.length != 0 ? (
            messages.map((x : messagesType) => {
              return (
                <div>
                  {x.content}
                </div>
              )
          })
        ) : (
            <div>
              Nothing to see
            </div>
          )
        }
      </div>
      <div className="flex gap-2 w-full">
        <Input className="w-full" placeholder="Start typing :)" value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={() => {mutate}}
        />
        <Button>&gt;</Button>
      </div>
    </MaxWidthWrapper>
  )
}

export default page;
