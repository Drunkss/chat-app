import { Server as NetServer, Socket } from "net"
import { NextApiResponse } from "next";
import { Server as SocketServer } from "socket.io";

export type NextApiResponseServerInfo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketServer;
    }
  }
}

export type messages = {
  author: String;
  content: String;
  date: String;
}
