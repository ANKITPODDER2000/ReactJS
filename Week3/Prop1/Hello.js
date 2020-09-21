class Hello extends React.Component{
    render() {
        {/*console.log(this.props);*/}
        return <h1>Hello {this.props.to} from {this.props.from}...</h1>;
    }
}