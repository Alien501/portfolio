import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SmoothScrolling from './Components/SmoothScrolling/SmoothScrolling.jsx'
import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <SmoothScrolling>
        <App />
    </SmoothScrolling>
</React.StrictMode>,
)
