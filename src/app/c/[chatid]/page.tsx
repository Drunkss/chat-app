"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { messages as messagesType } from "@/types/types";

const page = ({ params:{chatid} } : { params:{chatid: String} }) => {
  const messages: messagesType[] | null = []

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
        <Input className="w-full" placeholder="Start typing :)"/>
        <Button>&gt;</Button>
      </div>
    </MaxWidthWrapper>
  )
}

export default page;
