//imr importa react
import React from 'react'
//imrd importa reactDom
import ReactDOM from 'react-dom'

//npm i primereact primeflex primeicons

// md--dark-deepblue \m/

//import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import App from './components/App'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)