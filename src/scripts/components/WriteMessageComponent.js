import HTML from "./HTML.js";

class WriteMessageComponent {
    constructor() {}
    render() {
        let writeMessageComponent = HTML(`
            <form action="#" class="write-message">
                <input type="text" name="write-message__text" placeholder="Write a message" required="required" pattern=".*\\S.*">
                <button type="button" class="write-message__btn"><img src="./assets/images/main/attachment.png" alt="attachment"></button>
            </form>
        `)
        const messageText = writeMessageComponent.querySelector('input[name="write-message__text"]')
        const writeMessageBtn = writeMessageComponent.querySelector('.write-message__btn')
        writeMessageBtn.addEventListener('click', () => {
            if (messageText.value.trim() !== '') {
                console.log(messageText.value.trim())
                messageText.value = ''
            }
        })
        return writeMessageComponent
    }
}
const writeMessageCmp = new WriteMessageComponent()
export default writeMessageCmp