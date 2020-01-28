import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'

export default class MessagesComponent extends Component{
    constructor() {
        super(store, _$('.middle__messages'))
    }
    render() {
        this.anchor.innerHTML = `
            <ul class="show-messages">
                    ${store.state.messagesData.map(({imgSrc, text, date}) => `
                        <li class="show-messages__item">
                            <img src="${imgSrc}" alt="">
                            <div>
                                <p>${text}</p>
                                <span>${date}</span>
                            </div>
                        </li>
                    `).join('')} 
                     <li class="show-messages__item right">
                            <img src="./assets/images/main/Elipsa_1_kopia.png" alt="">
                            <div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.</p>
                                <span>4 April 2016, 5:32 PM</span>
                            </div>
                     </li>               
             </ul>
        `
    }
}