import HTML from './HTML.js'
import inboxCmp from "./InboxComponent.js"
import aboutCmp from './AboutComponent.js'
import coversationCmp from './CoversationComponent.js'

class MessageBoxComponent {
    constructor() {}
    render() {
        let messageComponent = HTML(`
            <div class="main-message-container">
                
            </div>
        `)
        messageComponent.append(inboxCmp.render())
        messageComponent.append(coversationCmp.render())
        messageComponent.append(aboutCmp.render())
        return messageComponent
    }
}
const messageCmp = new MessageBoxComponent()
export default messageCmp