export default function createTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
        <div class="template__container">
            <header class="header"></header>
            <div class="middle__container">
                <aside class="aside"></aside>
                <main class="main">
                    <div class="main-menu__container"></div>
                    <div class="main-message-container">
                     <div class="inbox"></div> 
                     <div class="main-message-container__middle">
                        <div class="middle__messages"></div>
                        <div class="write-message__container"></div>
                    </div>    
                    <div class="about"></div>
                </div>
                </main>
            </div> 
        </div>   
    `
    return template.content
}