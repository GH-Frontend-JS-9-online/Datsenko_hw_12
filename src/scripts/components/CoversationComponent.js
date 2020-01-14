import HTML from './HTML.js'
import writeMessageCmp from "./WriteMessageComponent.js";

class CoversationComponent {
    constructor() {}
    render() {
        let conversationComponent = HTML(`
            <div class="main-message-container__middle">
                <ul>

                </ul>
            </div>
        `)
        conversationComponent.append(writeMessageCmp.render())
        return conversationComponent
    }
}

const coversationCmp = new CoversationComponent()
export default  coversationCmp