const EventEmitter = require('events');

// EventEmitter
const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'José Henrique' });

class UserEvent extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged1', data);
        }, 2000);
    }
}

const userEvent = new UserEvent();

userEvent.on('User logged1', data => {
    console.log(data);
});

userEvent.userLogged({ user: 'José Henrique Brito' });
userEvent.userLogged({ user: 'José Henrique Brito1' });
