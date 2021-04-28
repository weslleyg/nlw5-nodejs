import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";

io.on("connect", async (socket) => {

  const connectionsService = new ConnectionsService();
  const messagesService = new MessagesService();

  const allConnectionWithoutAdmin = await connectionsService.findAllWithoutAdmin();

  io.emit("admin_list_all_users", allConnectionWithoutAdmin);

  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;

    const allMessages = await messagesService.listByUser(user_id);

    callback(allMessages);

  });

});