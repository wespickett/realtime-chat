System.register(['aurelia-framework', 'aurelia-dependency-injection', 'socket.io-client', 'app'], function (_export) {
    'use strict';

    var customElement, ObserverLocator, bindable, inject, io, username, ChatMessages, ChatMessageHandler, ChatRoomsApi, chatMessages, chatMessageHandler, chatRoomsApi, ChatRooms;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            ObserverLocator = _aureliaFramework.ObserverLocator;
            bindable = _aureliaFramework.bindable;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_socketIoClient) {
            io = _socketIoClient['default'];
        }, function (_app) {
            username = _app.username;
        }],
        execute: function () {
            ChatMessages = (function () {
                function ChatMessages() {
                    _classCallCheck(this, ChatMessages);

                    this._messageStore = {};
                }

                _createClass(ChatMessages, [{
                    key: 'getMessagesForRoom',
                    value: function getMessagesForRoom(roomId) {
                        this._messageStore[roomId] = this._messageStore[roomId] || [];
                        return this._messageStore[roomId];
                    }
                }, {
                    key: 'addMessage',
                    value: function addMessage(roomId, messageObj) {
                        if (this._messageStore[roomId]) {
                            this._messageStore[roomId].push(messageObj);
                        } else {
                            this._messageStore[roomId] = [messageObj];
                        }
                    }
                }]);

                return ChatMessages;
            })();

            ChatMessageHandler = (function () {
                function ChatMessageHandler() {
                    _classCallCheck(this, ChatMessageHandler);

                    this.socket = io('http://localhost:8888');

                    this.socket.on('chatMessage', function (msg) {
                        chatMessages.addMessage(msg.roomId, msg);
                    });
                }

                _createClass(ChatMessageHandler, [{
                    key: 'sendMessage',
                    value: function sendMessage(message, roomId) {
                        this.socket.emit('newChatMessage', {
                            roomId: roomId,
                            userName: username,
                            message: message
                        });
                    }
                }]);

                return ChatMessageHandler;
            })();

            ChatRoomsApi = (function () {
                function ChatRoomsApi() {
                    _classCallCheck(this, ChatRoomsApi);

                    this._openRoomIds = [];
                    this._allRooms = {};

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

                    for (var roomId in this._allRooms) {
                        chatMessages[roomId] = [];
                    }
                }

                _createClass(ChatRoomsApi, [{
                    key: 'openRoom',
                    value: function openRoom(roomId) {
                        if (this._allRooms[roomId]) {
                            if (this._openRoomIds.indexOf(roomId) === -1) {
                                chatMessages[roomId] = chatMessages[roomId] || [];
                                this._openRoomIds.push(roomId);
                                console.log('opening room: ' + roomId);
                            }
                        }
                    }
                }, {
                    key: 'getOpenRooms',
                    value: function getOpenRooms() {
                        return this._openRoomIds;
                    }
                }, {
                    key: 'getRoom',
                    value: function getRoom(roomId) {
                        return _allRooms[roomId];
                    }
                }, {
                    key: 'getAllRooms',
                    value: function getAllRooms() {
                        var roomsArray = [];
                        for (var roomId in this._allRooms) {
                            roomsArray.push(this._allRooms[roomId]);
                        }
                        return roomsArray;
                    }
                }]);

                return ChatRoomsApi;
            })();

            chatMessages = new ChatMessages();

            _export('chatMessages', chatMessages);

            chatMessageHandler = new ChatMessageHandler();

            _export('chatMessageHandler', chatMessageHandler);

            chatRoomsApi = new ChatRoomsApi();

            _export('chatRoomsApi', chatRoomsApi);

            ChatRooms = (function () {
                function ChatRooms(element, observerLocator) {
                    _classCallCheck(this, _ChatRooms);

                    this.element = element;
                    this.chatRoomsApi = chatRoomsApi;
                }

                var _ChatRooms = ChatRooms;

                _createClass(_ChatRooms, [{
                    key: 'chatRoomsDataValueChanged',
                    value: function chatRoomsDataValueChanged(newValue) {
                        this.roomsList = newValue;
                    }
                }]);

                ChatRooms = bindable({
                    name: 'roomsList',
                    attribute: 'value',
                    changeHandler: 'chatRoomsDataValueChanged',
                    defaultValue: undefined
                })(ChatRooms) || ChatRooms;
                ChatRooms = inject(Element, ObserverLocator)(ChatRooms) || ChatRooms;
                ChatRooms = customElement('chat-rooms')(ChatRooms) || ChatRooms;
                return ChatRooms;
            })();

            _export('ChatRooms', ChatRooms);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jaGF0Um9vbXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dFQUtNLFlBQVksRUFvQlosa0JBQWtCLEVBc0JsQixZQUFZLEVBbURQLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsWUFBWSxFQVVWLFNBQVM7Ozs7Ozs7OzhDQTlHZCxhQUFhO2dEQUFFLGVBQWU7eUNBQUUsUUFBUTs7aURBQ3hDLE1BQU07Ozs7NEJBRU4sUUFBUTs7O0FBRVYsd0JBQVk7QUFJSCx5QkFKVCxZQUFZLEdBSUE7MENBSlosWUFBWTs7eUJBRWQsYUFBYSxHQUFHLEVBQUU7aUJBRUY7OzZCQUpkLFlBQVk7OzJCQU1JLDRCQUFDLE1BQU0sRUFBRTtBQUN2Qiw0QkFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5RCwrQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNyQzs7OzJCQUVTLG9CQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUU7QUFDM0IsNEJBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM1QixnQ0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQy9DLE1BQU07QUFDSCxnQ0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUM3QztxQkFDSjs7O3VCQWpCQyxZQUFZOzs7QUFvQlosOEJBQWtCO0FBR1QseUJBSFQsa0JBQWtCLEdBR047MENBSFosa0JBQWtCOztBQUloQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7QUFFMUMsd0JBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFTLEdBQUcsRUFBQztBQUN2QyxvQ0FBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUM1QyxDQUFDLENBQUM7aUJBQ047OzZCQVRDLGtCQUFrQjs7MkJBV1QscUJBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6Qiw0QkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDL0Isa0NBQU0sRUFBRSxNQUFNO0FBQ2Qsb0NBQVEsRUFBRSxRQUFRO0FBQ2xCLG1DQUFPLEVBQUUsT0FBTzt5QkFDbkIsQ0FBQyxDQUFDO3FCQUNOOzs7dUJBakJDLGtCQUFrQjs7O0FBc0JsQix3QkFBWTtBQUtILHlCQUxULFlBQVksR0FLQTswQ0FMWixZQUFZOzt5QkFFZCxZQUFZLEdBQUcsRUFBRTt5QkFDakIsU0FBUyxHQUFHLEVBQUU7O0FBSVYsd0JBQUksQ0FBQyxTQUFTLEdBQUc7QUFDYix5QkFBQyxFQUFFO0FBQ0Msa0NBQU0sRUFBRSxDQUFDO0FBQ1QsZ0NBQUksRUFBRSxjQUFjO3lCQUN2QjtBQUNELHlCQUFDLEVBQUU7QUFDQyxrQ0FBTSxFQUFFLENBQUM7QUFDVCxnQ0FBSSxFQUFFLFlBQVk7eUJBQ3JCO3FCQUNKLENBQUM7O0FBR0YseUJBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUMvQixvQ0FBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDN0I7aUJBQ0o7OzZCQXRCQyxZQUFZOzsyQkF3Qk4sa0JBQUMsTUFBTSxFQUFFO0FBQ2IsNEJBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QixnQ0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUMxQyw0Q0FBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEQsb0NBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLHVDQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFDOzZCQUMxQzt5QkFDSjtxQkFDSjs7OzJCQUVXLHdCQUFHO0FBQ1gsK0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDNUI7OzsyQkFFTSxpQkFBQyxNQUFNLEVBQUU7QUFDWiwrQkFBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzVCOzs7MkJBRVUsdUJBQUc7QUFDViw0QkFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLDZCQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDL0Isc0NBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUMzQztBQUNELCtCQUFPLFVBQVUsQ0FBQztxQkFDckI7Ozt1QkFoREMsWUFBWTs7O0FBbURQLHdCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUU7O29DQUFqQyxZQUFZOztBQUNaLDhCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUU7OzBDQUE3QyxrQkFBa0I7O0FBQ2xCLHdCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUU7O29DQUFqQyxZQUFZOztBQVVWLHFCQUFTO0FBRVAseUJBRkYsU0FBUyxDQUVOLE9BQU8sRUFBRSxlQUFlLEVBQUU7OztBQUNsQyx3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsd0JBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO2lCQUNwQzs7aUNBTFEsU0FBUzs7OzsyQkFPTyxtQ0FBQyxRQUFRLEVBQUU7QUFDaEMsNEJBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO3FCQUM3Qjs7O0FBVFEseUJBQVMsR0FOckIsUUFBUSxDQUFDO0FBQ1Isd0JBQUksRUFBQyxXQUFXO0FBQ2hCLDZCQUFTLEVBQUMsT0FBTztBQUNqQixpQ0FBYSxFQUFDLDJCQUEyQjtBQUN6QyxnQ0FBWSxFQUFFLFNBQVM7aUJBQ3hCLENBQUMsQ0FDVyxTQUFTLEtBQVQsU0FBUztBQUFULHlCQUFTLEdBUHJCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBT3BCLFNBQVMsS0FBVCxTQUFTO0FBQVQseUJBQVMsR0FSckIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQVFmLFNBQVMsS0FBVCxTQUFTO3VCQUFULFNBQVM7OztpQ0FBVCxTQUFTIiwiZmlsZSI6InJlc291cmNlcy9jaGF0Um9vbXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9