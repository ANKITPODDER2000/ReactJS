class Hello extends React.Component{
    render() {
        let bangs = "!".repeat(this.props.bangs);
        {/*console.log(this.props);*/}
        return (
            <div>
                <p>Hello {this.props.to} from {this.props.from}{bangs}</p>
                <img src = {this.props.url} height = "400px" />
            </div>
        );
    }
}