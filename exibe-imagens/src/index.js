//imr importa react
import React from 'react'
//imrd importa reactDom
import ReactDOM from 'react-dom'
import app from './components/app'

import 'primereact/resources/primereact.min.css'

ReactDOM.render(
    <app />,
    document.querySelector('#root')
)