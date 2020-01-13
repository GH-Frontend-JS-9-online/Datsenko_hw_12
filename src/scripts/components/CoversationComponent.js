import HTML from './HTML.js'

class CoversationComponent {
    constructor() {}
    render() {
        let conversationComponent = HTML(`
            <div class="main-message-container__middle">
                <ul>

                </ul>
                <form action="#">
                    <input type="text" placeholder="Write a message">
                    <a href="#">
                        <img src="./assets/images/main/attachment.png" alt="attachment.png">
                    </a>
                </form>
            </div>
        `)
        return conversationComponent
    }
}

const coversationCmp = new CoversationComponent()
export default  coversationCmp