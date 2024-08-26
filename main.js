


function App(){
    const st1 = { color: 'red', backgroundColor: 'lime' }
    return(
        // <body style={{backgroundColor: '#23272F'}}></body>
        <div style={{
            alignItems: 'baseline',
            backgroundColor: '#23272F',
            margin: '10px',
            padding: '10px'
        }}>
            <h1 style={{color: 'white'}}>Quick Start</h1>
            <p style={{color: 'white'}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React
concepts that you will use on a daily basis.</p>
            <div style={{
                alignItems: 'baseline',
                backgroundColor: '#343A46',
                margin: '10px',
                padding: '10px',
                borderRadius: '20px'
            }}>
                <h3 style={{color: 'white'}}>You will learn</h3>
                <ul style={{color: 'white'}}>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)