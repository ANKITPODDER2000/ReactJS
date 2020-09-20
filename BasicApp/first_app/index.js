class Hello extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello There!</h1>
                <h1>Hello There!!</h1>
                <h1>Hello There!!!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.querySelector("#root"));