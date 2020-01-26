import HTML from './HTML.js'
import messagesCmp from "./MessageComponent.js";
import writeMessageCmp from "./WriteMessageComponent.js";

class CoversationComponent {
    constructor() {}
    render() {
        let user = {
            email: "eugene@gmail.com",
            password: "1qaz2wsx",
            name: "Eugene"
        }

        let conversationComponent = HTML(`
            <div class="main-message-container__middle"></div>
        `)
        conversationComponent.append(messagesCmp.render(user))
        conversationComponent.append(writeMessageCmp.render(user))
        return conversationComponent
    }
}

const coversationCmp = new CoversationComponent()
export default  coversationCmp