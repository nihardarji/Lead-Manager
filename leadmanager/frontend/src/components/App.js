import React from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    return (
        <h1>React Application</h1>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)