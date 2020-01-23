import HTML from "./HTML.js";
import DateMessage from "../services/DateMessage.js";

class MessagesComponent {
    constructor() {
    }
    render() {
        const messages = [
            {
                imgSrc:'./assets/images/main/Elipsa_1_kopia.png',
                text:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.',
                date: new DateMessage().totalDateMessage()
            }
        ]
        let messagesComponent = HTML(`
            <ul class="show-messages">
                ${messages.map(({imgSrc, text, date}) => `
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
        `)
        return messagesComponent
    }
}
const messagesCmp = new MessagesComponent()
export default messagesCmp