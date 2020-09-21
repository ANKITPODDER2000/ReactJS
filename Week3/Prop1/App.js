class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines</h1>
                <Hello
                    a = "🎂"
                    b = "🦄" 
                    c = "🥪"
                />
                <Hello
                    a = "🥪"
                    b = "🦄" 
                    c = "🥪"
                />
                <Hello
                    a = "🎂"
                    b = "🎂" 
                    c = "🎂"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));