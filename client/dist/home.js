System.register(['resources/chatRooms/index'], function (_export) {
    'use strict';

    var chatRoomsApi, Home;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_resourcesChatRoomsIndex) {
            chatRoomsApi = _resourcesChatRoomsIndex.chatRoomsApi;
        }],
        execute: function () {
            Home = (function () {
                function Home() {
                    _classCallCheck(this, Home);

                    this.rooms = [];

                    this.chatRoomsApi = chatRoomsApi;
                    this.rooms = chatRoomsApi.getAllRooms();
                }

                _createClass(Home, [{
                    key: 'openRoom',
                    value: function openRoom(roomId) {
                        this.chatRoomsApi.openRoom(roomId);
                    }
                }]);

                return Home;
            })();

            _export('Home', Home);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUVhLElBQUk7Ozs7Ozs7O29EQUZULFlBQVk7OztBQUVQLGdCQUFJO0FBR0YseUJBSEYsSUFBSSxHQUdDOzBDQUhMLElBQUk7O3lCQUNiLEtBQUssR0FBRyxFQUFFOztBQUdOLHdCQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUNqQyx3QkFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzNDOzs2QkFOUSxJQUFJOzsyQkFRTCxrQkFBQyxNQUFNLEVBQUU7QUFDYiw0QkFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RDOzs7dUJBVlEsSUFBSTs7OzRCQUFKLElBQUkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=