class App extends React.Component {
    render() {
        return (
            <div>
                <Heading />
                <RandomNumber />
                <ImageShow />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
