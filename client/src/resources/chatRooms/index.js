import {customElement, ObserverLocator, bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';
import io from 'socket.io-client';
import {username} from 'app';

class ChatMessages {

    _messageStore = {};

    constructor() {}

    getMessagesForRoom(roomId) {
        this._messageStore[roomId] = this._messageStore[roomId] || [];
        return this._messageStore[roomId]; 
    }

    addMessage(roomId, messageObj) {
        if (this._messageStore[roomId]) {
            this._messageStore[roomId].push(messageObj);
        } else {
            this._messageStore[roomId] = [messageObj];
        }
    }
}

class ChatMessageHandler {


    constructor() {
        this.socket = io('http://localhost:8888');

        this.socket.on('chatMessage', function(msg){
            chatMessages.addMessage(msg.roomId, msg);
        });
    }

    sendMessage(message, roomId) {
        this.socket.emit('newChatMessage', {
            roomId: roomId,
            userName: username,
            message: message
        });
    }


}

class ChatRoomsApi {
    
    _openRoomIds = [];
    _allRooms = {};

    constructor() {
        //TODO: get list of rooms from server
        this._allRooms = {
            1: {
                roomId: 1,
                name: 'General Chat'
            },
            2: {
                roomId: 2,
                name: 'Other Chat'
            }
        };

        //TODO: load saved messages from server
        for (var roomId in this._allRooms) {
            chatMessages[roomId] = [];
        }
    }

    openRoom(roomId) {
        if (this._allRooms[roomId]) {
            if (this._openRoomIds.indexOf(roomId) === -1) {
                chatMessages[roomId] = chatMessages[roomId] || [];
                this._openRoomIds.push(roomId);
                console.log('opening room: ' + roomId);
            }
        }
    }

    getOpenRooms() {
        return this._openRoomIds;
    }

    getRoom(roomId) {
        return _allRooms[roomId];
    }

    getAllRooms() {
        var roomsArray = [];
        for (var roomId in this._allRooms) {
            roomsArray.push(this._allRooms[roomId]);
        }
        return roomsArray;
    }
}

export var chatMessages = new ChatMessages();
export var chatMessageHandler = new ChatMessageHandler();
export var chatRoomsApi = new ChatRoomsApi();

@customElement('chat-rooms')
@inject(Element, ObserverLocator)
@bindable({
  name:'roomsList',
  attribute:'value',
  changeHandler:'chatRoomsDataValueChanged',
  defaultValue: undefined
})
export class ChatRooms {

    constructor(element, observerLocator) {
        this.element = element;
        this.chatRoomsApi = chatRoomsApi;
    }

    chatRoomsDataValueChanged(newValue) {
        this.roomsList = newValue;
    }
}