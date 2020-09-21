class Hello extends React.Component{
    static defaultProps = {
        from: "stuart",
        bang : 1
    }
    render() {
        let bang = "!".repeat(this.props.bang);
        console.log(this.props);
        {/*console.log(this.props);*/}
        return <h2>Hello {this.props.to} from {this.props.from} {bang}</h2>;
    }
}