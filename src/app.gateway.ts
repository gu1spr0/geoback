import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server;
  users: number = 0;

  async handleConnection() {
    console.log("Usuario conectado");
    this.users++;
    this.server.emit('users', this.users);
  }
  async handleDisconnect() {
    console.log("Usuario desconectado")
    this.users--;
    this.server.emit('users', this.users);
  }

  @SubscribeMessage('chat')
  async onChat(client, message) {
    console.log("Llego mensaje: ", message);
    client.broadcast.emit('chat', message);
  }
  /*handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }*/
}
