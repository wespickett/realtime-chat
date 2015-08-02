import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export var username = 'Wes'; 

export class App {

    constructor() {
        this.username = username;
    }

    changeUsername() {
        username = this.username;
    }

    configureRouter(config, router) {
        config.title = 'Real Time Chat App';

        config.map([
            {
                route: ['', 'rooms'],
                moduleId: './home',
                nav: true,
                title: 'Chat Rooms'
            }
        ]);

        this.router = router;
    }
}
