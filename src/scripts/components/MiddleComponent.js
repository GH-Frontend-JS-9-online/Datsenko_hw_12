import HTML from './HTML.js'
import asideCmp from "./AsideComponent.js";
import mainCmp from "./MainComponent.js";

class MiddleComponent {
    constructor() {}

    render() {
        let middleComponent = HTML(`
            <div class="middle"></div>      
        
        `)

        middleComponent.append(asideCmp.render())
        middleComponent.append(mainCmp.render())
        return middleComponent
    }
}

const middleCmp = new MiddleComponent()
export default  middleCmp
