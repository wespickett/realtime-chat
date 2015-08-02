System.register(['aurelia-framework', 'aurelia-dependency-injection', 'resources/chatRooms/index'], function (_export) {
    'use strict';

    var customElement, ObserverLocator, bindable, inject, chatMessages, chatMessageHandler, ChatRoom;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            ObserverLocator = _aureliaFramework.ObserverLocator;
            bindable = _aureliaFramework.bindable;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_resourcesChatRoomsIndex) {
            chatMessages = _resourcesChatRoomsIndex.chatMessages;
            chatMessageHandler = _resourcesChatRoomsIndex.chatMessageHandler;
        }],
        execute: function () {
            ChatRoom = (function () {
                function ChatRoom(element, observerLocator) {
                    _classCallCheck(this, _ChatRoom);

                    this.element = element;
                    this.observerLocator = observerLocator;

                    this.chatMessageHandler = chatMessageHandler;
                    this.chatMessages = chatMessages;
                }

                var _ChatRoom = ChatRoom;

                _createClass(_ChatRoom, [{
                    key: 'chatRoomDataValueChanged',
                    value: function chatRoomDataValueChanged(newValue) {
                        this.roomData = newValue;
                        this.roomMessages = this.chatMessages.getMessagesForRoom(this.roomData.roomId);
                    }
                }, {
                    key: 'send',
                    value: function send() {
                        var msgToSend = this.newMessage;
                        this.newMessage = '';

                        this.chatMessageHandler.sendMessage(msgToSend, this.roomData.roomId);
                    }
                }]);

                ChatRoom = bindable({
                    name: 'roomData',
                    attribute: 'value',
                    changeHandler: 'chatRoomDataValueChanged',
                    defaultValue: undefined
                })(ChatRoom) || ChatRoom;
                ChatRoom = inject(Element, ObserverLocator)(ChatRoom) || ChatRoom;
                ChatRoom = customElement('chat-room')(ChatRoom) || ChatRoom;
                return ChatRoom;
            })();

            _export('ChatRoom', ChatRoom);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jaGF0Um9vbS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEZBWWEsUUFBUTs7Ozs7Ozs7OENBWmIsYUFBYTtnREFBRSxlQUFlO3lDQUFFLFFBQVE7O2lEQUN4QyxNQUFNOztvREFDTixZQUFZOzBEQUFFLGtCQUFrQjs7O0FBVTNCLG9CQUFRO0FBRU4seUJBRkYsUUFBUSxDQUVMLE9BQU8sRUFBRSxlQUFlLEVBQUU7OztBQUNsQyx3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsd0JBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztBQUV2Qyx3QkFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLHdCQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztpQkFDcEM7O2dDQVJRLFFBQVE7Ozs7MkJBVU8sa0NBQUMsUUFBUSxFQUFFO0FBQy9CLDRCQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6Qiw0QkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2xGOzs7MkJBRUcsZ0JBQUc7QUFDSCw0QkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoQyw0QkFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXJCLDRCQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUN4RTs7O0FBcEJRLHdCQUFRLEdBTnBCLFFBQVEsQ0FBQztBQUNSLHdCQUFJLEVBQUMsVUFBVTtBQUNmLDZCQUFTLEVBQUMsT0FBTztBQUNqQixpQ0FBYSxFQUFDLDBCQUEwQjtBQUN4QyxnQ0FBWSxFQUFFLFNBQVM7aUJBQ3hCLENBQUMsQ0FDVyxRQUFRLEtBQVIsUUFBUTtBQUFSLHdCQUFRLEdBUHBCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBT3BCLFFBQVEsS0FBUixRQUFRO0FBQVIsd0JBQVEsR0FScEIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQVFkLFFBQVEsS0FBUixRQUFRO3VCQUFSLFFBQVE7OztnQ0FBUixRQUFRIiwiZmlsZSI6InJlc291cmNlcy9jaGF0Um9vbS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=