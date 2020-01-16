// import HTML from './HTML.js'
// //
// // class InboxComponent {
// //     constructor() {}
// //     render() {
// //         let inboxComponent = HTML(`
// //             <div class="main-message-container__left-aside inbox">
// //                <div class="conversations">
// //                    <div class="conversation">
// //
// //                    </div>
// //                    <div class="new-conversation">
// //                        <button class="new-conversation__btn">
// //                            <img src="./assets/images/main/plus.png" alt="plus">
// //                            New coversation
// //                        </button>
// //                    </div>
// //                </div>
// //             </div>
// //         `)
// //         return inboxComponent
// //     }
// // }
// // const inboxCmp = new InboxComponent()
// // export default inboxCmp

import HTML from "./HTML.js";


class InboxComponent {
    constructor() {
    }

    render() {
        let inboxComponent = HTML(`
        <div class="inbox">             
                <div class="messages">
                    <div class="person">
                        <div>
                            <img src="./assets/images/main/Elipsa_1_kopia.png" alt="">
                            <h2>Michelle Stewart</h2>
                        </div>
                        <span>Today, 5:32 PM</span>
                    </div>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
                    </p>
                </div>
                <div class="messages">
                    <div class="person">
                        <div>
                            <img src="./assets/images/main/Elipsa_1_kopia.png" alt="">
                            <h2>Michelle Stewart</h2>
                        </div>
                        <span>Today, 5:32 PM</span>
                    </div>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
                    </p>
                </div> 
                <div class="new-conversation">
                    <button type="button" class="new-conversation__btn">
                        <img src="./assets/images/main/plus.png" alt="">
                        New coversation
                    </button>
                </div>       
        </div>
                
       
    `)
        return inboxComponent
    }
}

const inboxCmp = new InboxComponent()
export default inboxCmp