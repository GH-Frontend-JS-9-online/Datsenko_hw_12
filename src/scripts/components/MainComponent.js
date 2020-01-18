import HTML from './HTML.js'
import messageCmp from './MessageBoxComponent.js'

class MainComponent {
    constructor() {}
    render() {
        const dataLeftMenu = [{src:'inbox', title: 'Inbox (2)'}, {src:'telegram', title: 'Sent'}, {src:'delete', title: 'Trash'}]
        const dataRightMenu = ['Filter messages:', 'Date']
        let mainComponent = HTML(`
              <main class="main">
                <nav class="main__nav">
                    <ul class="main__nav__menu">
                        <ul class="main__nav__left-menu">
                            ${dataLeftMenu.map(({src, title}) => `
                                <li class="main__nav__left-menu__item">
                                    <a href="#" class="main__nav__left-menu__link">
                                        <img src="./assets/images/main/${src}.png" alt="${src}">
                                        ${title}
                                    </a>                                    
                                </li>                            
                            `).join('')}                           
                        </ul>
                        <ul class="main__nav__right-menu">                           
                             ${dataRightMenu.map(item => `
                                <li class="main__nav__right-menu__item">
                                    <a href="#" class="main__nav__right-menu__link">                                        
                                        ${item}
                                    </a>                                    
                                </li>                            
                            `).join('')}     
                        </ul>
                    </ul>
                </nav>
            </main>
        `)
        mainComponent.append(messageCmp.render())
        return mainComponent
    }
}

const mainCmp = new MainComponent()
export default mainCmp