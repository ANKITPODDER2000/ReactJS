class App extends React.Component {
    render() {
        return (
            <div>
                <Hello from = "Ankit"  to = "Raja"/>
                <Hello from = "Riki" to = "Ridhi"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));