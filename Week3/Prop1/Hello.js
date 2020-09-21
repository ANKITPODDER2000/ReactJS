class Hello extends React.Component{
    render() {
        let msg = "";
        if (this.props.a == this.props.b && this.props.b == this.props.c)
            msg = "You win!"
        else
            msg = "You loss!"
        return (
            <div>
                <h1>{this.props.a}  {this.props.b}  {this.props.c}</h1>
                {msg}
            </div>
        );
    }
}