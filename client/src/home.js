import {chatRoomsApi} from 'resources/chatRooms/index';

export class Home {
    rooms = [];

    constructor() {
        this.chatRoomsApi = chatRoomsApi;
        this.rooms = chatRoomsApi.getAllRooms();
    }

    openRoom(roomId) {
        this.chatRoomsApi.openRoom(roomId);
    }
}