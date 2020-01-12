import styles from "./styles/main.scss"

import components from "./scripts/main.js";

const app = document.getElementById('app')
components.map(component => app.append(component.render()))



