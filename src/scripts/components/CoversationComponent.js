import HTML from './HTML.js'
import messagesCmp from "./MessageComponent.js";
import writeMessageCmp from "./WriteMessageComponent.js";

class CoversationComponent {
    constructor() {}
    render() {
        let conversationComponent = HTML(`
            <div class="main-message-container__middle"></div>
        `)
        conversationComponent.append(messagesCmp.render())
        conversationComponent.append(writeMessageCmp.render())
        return conversationComponent
    }
}

const coversationCmp = new CoversationComponent()
export default  coversationCmp