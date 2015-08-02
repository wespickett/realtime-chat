import {customElement, ObserverLocator, bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';
import {chatMessages, chatMessageHandler} from 'resources/chatRooms/index';

@customElement('chat-room')
@inject(Element, ObserverLocator)
@bindable({
  name:'roomData',
  attribute:'value',
  changeHandler:'chatRoomDataValueChanged',
  defaultValue: undefined
})
export class ChatRoom {

    constructor(element, observerLocator) {
        this.element = element;
        this.observerLocator = observerLocator;

        this.chatMessageHandler = chatMessageHandler;
        this.chatMessages = chatMessages;
    }

    chatRoomDataValueChanged(newValue) {
        this.roomData = newValue;
        this.roomMessages = this.chatMessages.getMessagesForRoom(this.roomData.roomId);
    }

    send() {
        var msgToSend = this.newMessage;
        this.newMessage = '';

        this.chatMessageHandler.sendMessage(msgToSend, this.roomData.roomId);
    }
}