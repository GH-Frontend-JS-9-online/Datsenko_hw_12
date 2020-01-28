import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'

export default class InboxComponent extends Component{
    constructor() {
        super(store, _$('.inbox'))
    }

    render() {
        this.anchor.innerHTML = `
            ${store.state.inboxData.map(({photo, name, date, message}) => `
                    <div class="messages">
                    <div class="person">
                        <div>
                            <img src="./assets/images/main/${photo}.png" alt="">
                            <h2>${name}</h2>
                        </div>
                        <span>Today, ${date} PM</span>
                    </div>
                     <p>
                       ${message}
                    </p>
                </div>             
                `).join('')}                   
                <div class="new-conversation">
                    <button type="button" class="new-conversation__btn">
                        <img src="./assets/images/main/plus.png" alt="">
                        New coversation
                    </button>
                </div>     
        `
    }
}