import HTML from './HTML.js'

class InboxComponent {
    constructor() {}
    render() {
        let inboxComponent = HTML(`
            <div class="main-message-container__left-aside inbox">
               <div class="conversations">
                   <div class="conversation">

                   </div>
                   <div class="new-conversation">
                       <button class="new-conversation__btn">
                           <img src="./assets/images/main/plus.png" alt="plus">
                           New coversation
                       </button>
                   </div>
               </div>
            </div>
        `)
        return inboxComponent
    }
}
const inboxCmp = new InboxComponent()
export default inboxCmp