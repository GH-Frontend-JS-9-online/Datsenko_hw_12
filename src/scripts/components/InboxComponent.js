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
        const personData = [{photo: 'Elipsa_1_kopia', name: 'Michelle Stewart', date: '5:32', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.'}]
        let inboxComponent = HTML(`
        <div class="inbox"> 
                ${personData.map(({photo, name, date, message}) => `
                    <div class="messages">
                    <div class="person">
                        <div>
                            <img src="./assets/images/main/${photo}.png" alt="">
                            <h2>${name}</h2>
                        </div>
                        <span>Today, ${date} PM</span>
                    </div>
                     <p>
                       ${message}
                    </p>
                </div>             
                `).join('')}                   
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