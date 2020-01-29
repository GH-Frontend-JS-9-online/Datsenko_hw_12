import Observer from "./Observer.js"
import createReducers from './reducers.js'

class Store {
    constructor(reducers) {
        this.reducers = reducers
        this.state = {
            isRegister: false,
            isLogin: false,
            headerMenuItems: ['plus', 'search', 'bell', 'ellipse'],
            asideItems: ['home', 'menu', 'trending-up', 'email', 'account-multiple'],
            mainNavLeftMenu: [{src: 'inbox', title: `Inbox (2)`}, {src: 'telegram', title: 'Sent'}, {
                src: 'delete',
                title: 'Trash'
            }],
            mainNavRightMenu: ['Filter messages:', 'Date'],
            inboxData: [{
                photo: 'Elipsa_1_kopia',
                name: 'Michelle Stewart',
                date: '5:32',
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.'
            }],
            messagesData: [
                {
                    imgSrc: './assets/images/main/Elipsa_1_kopia.png',
                    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
                    date: new Date().toLocaleString()
                }
            ]
        }
        this.events = new Observer()
    }

    dispatch(actionType, payload) {
        if (this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state)
            this.events.next('change', this.state)
        }
    }
}

const store = new Store(createReducers())
export default store