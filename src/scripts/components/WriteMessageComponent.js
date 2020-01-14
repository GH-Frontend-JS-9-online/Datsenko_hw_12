import HTML from './HTML.js'

class WriteMessageComponent {
    constructor() {}
    render() {
        let writeMessageComponent = HTML(`
            <form action="#" class="write-message">
                <input type="text" name="write-message-text" placeholder="Write a message">
                <button type="button" class="write-message-btn">
                    <img src="./assets/images/main/attachment.png" alt="attachment">
                </button>
            </form>
        `)
        const messageText = writeMessageComponent.querySelector('input[name="write-message-text"]')
        const writeMessageBtn = writeMessageComponent.querySelector('.write-message-btn')
        writeMessageBtn.addEventListener('click', () => {
            if (messageText.value.trim() !== '') {
                console.log(messageText.value)
                messageText.value = ''
            }
        })
        return writeMessageComponent
    }
}
const writeMessageCmp = new WriteMessageComponent()
export default writeMessageCmp