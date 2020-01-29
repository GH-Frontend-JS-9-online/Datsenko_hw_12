import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'
import dashboardServices from '../sevices/DashboardServices'

export default class WriteMessageComponent extends Component{
    constructor() {
        super(store, _$('.write-message__container'))
    }
    render() {
        this.anchor.innerHTML = `
            <form action="#" class="write-message">
                <input type="text" name="write-message__text" placeholder="Write a message" required="required" pattern=".*\\S.*">
                <button type="submit" class="write-message__btn"><img src="./assets/images/main/attachment.png" alt="attachment"></button>
            </form>
        `
        const messageText = this.anchor.querySelector('input[name="write-message__text"]')
        const writeMessageBtn = this.anchor.querySelector('.write-message__btn')
        writeMessageBtn.addEventListener('click', (event) => {
            event.preventDefault()
            if (messageText.value.trim() !== '') {
                dashboardServices.sendMessage(messageText.value.trim())
                    .then(response => response.json())
                    .then(data => console.table(data))
                    .catch(error => console.error(error))
                messageText.value = ''
            }
        })
    }
}