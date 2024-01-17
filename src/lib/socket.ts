import { createServer } from "http"
import { Server } from "socket.io"

const server = createServer()
const io = new Server(server)

export { io }
