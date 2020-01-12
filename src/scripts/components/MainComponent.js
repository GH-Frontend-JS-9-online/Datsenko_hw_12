import HTML from './HTML.js'

class MainComponent {
    constructor() {}

    render() {
        let mainComponent = HTML(`
              <main class="main">
                <nav class="main__nav">
                    <ul class="main__nav__menu">
                        <ul class="main__nav__left-menu">
                            <li class="main__nav__left-menu__item">
                                <a href="#" class="main__nav__left-menu__link">
                                    <img src="./assets/images/main/inbox.png" alt="inbox">
                                    Inbox (2)
                                </a>
                            </li>
                            <li class="main__nav__left-menu__item">
                                <a href="#" class="main__nav__left-menu__link telegram">
                                    <img src="./assets/images/main/telegram.png" alt="telegram">
                                    Sent
                                </a>
                            </li>
                            <li class="main__nav__left-menu__item">
                                <a href="#" class="main__nav__left-menu__link delete">
                                    <img src="./assets/images/main/delete.png" alt="delete">
                                    Trash
                                </a>
                            </li>
        
                        </ul>
                        <ul class="main__nav__right-menu">
                            <li class="main__nav__right-menu__item">
                                    Filter messages:
                            </li>
                            <li class="main__nav__right-menu__item">
                                <a href="#" class="main__nav__right-menu__link filter-btn">
                                    Date
                                    <img src="./assets/images/main/chevron.png" alt="chevron">
                                </a>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </main>
        `)
        return mainComponent
    }
}

const mainCmp = new MainComponent()
export default mainCmp