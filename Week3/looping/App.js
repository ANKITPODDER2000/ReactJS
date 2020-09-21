class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    name="Ankit Podder"
                    hobbies={['Coding', "Analysis", "Development"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));