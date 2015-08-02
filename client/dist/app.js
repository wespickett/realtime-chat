System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
    'use strict';

    var username, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
        execute: function () {
            username = 'Wes';

            _export('username', username);

            App = (function () {
                function App() {
                    _classCallCheck(this, App);

                    this.username = username;
                }

                _createClass(App, [{
                    key: 'changeUsername',
                    value: function changeUsername() {
                        _export('username', username = this.username);
                    }
                }, {
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Real Time Chat App';

                        config.map([{
                            route: ['', 'rooms'],
                            moduleId: './home',
                            nav: true,
                            title: 'Chat Rooms'
                        }]);

                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFHVyxRQUFRLEVBRU4sR0FBRzs7Ozs7Ozs7O0FBRkwsb0JBQVEsR0FBRyxLQUFLOztnQ0FBaEIsUUFBUTs7QUFFTixlQUFHO0FBRUQseUJBRkYsR0FBRyxHQUVFOzBDQUZMLEdBQUc7O0FBR1Isd0JBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2lCQUM1Qjs7NkJBSlEsR0FBRzs7MkJBTUUsMEJBQUc7QUFDYiw0Q0FBQSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztxQkFDNUI7OzsyQkFFYyx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQzVCLDhCQUFNLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDOztBQUVwQyw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQO0FBQ0ksaUNBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7QUFDcEIsb0NBQVEsRUFBRSxRQUFRO0FBQ2xCLCtCQUFHLEVBQUUsSUFBSTtBQUNULGlDQUFLLEVBQUUsWUFBWTt5QkFDdEIsQ0FDSixDQUFDLENBQUM7O0FBRUgsNEJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUN4Qjs7O3VCQXZCUSxHQUFHOzs7MkJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9