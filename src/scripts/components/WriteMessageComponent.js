import HTML from "./HTML.js";
import fakeApiService from "../services/FakeApiService.js";

class WriteMessageComponent {
    constructor() {}
    render(user) {
        let writeMessageComponent = HTML(`
            <form action="#" class="write-message">
                <input type="text" name="write-message__text" placeholder="Write a message" required="required" pattern=".*\\S.*">
                <button type="submit" class="write-message__btn"><img src="./assets/images/main/attachment.png" alt="attachment"></button>
            </form>
        `)
        const messageText = writeMessageComponent.querySelector('input[name="write-message__text"]')
        const writeMessageBtn = writeMessageComponent.querySelector('.write-message__btn')
        writeMessageBtn.addEventListener('click', (event) => {
            event.preventDefault()
            if (messageText.value.trim() !== '') {
                fakeApiService.sendMessage(user, messageText.value.trim())
                .then(response => response.json())
                .then(data => console.table(data))
                .catch(error => console.error(error))
                messageText.value = ''
            }
        })
        return writeMessageComponent
    }
}
const writeMessageCmp = new WriteMessageComponent()
export default writeMessageCmp