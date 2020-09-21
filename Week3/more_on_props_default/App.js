class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    from="Ankit"
                    to="Raja"
                />
                <Hello
                    to="Ridhi"
                    bang={5}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));