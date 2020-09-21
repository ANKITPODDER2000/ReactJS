class Hello extends React.Component{
    render() {
        let bangs = "!".repeat(this.props.bangs);
        {/*console.log(this.props);*/}
        return (
            <div style = {{margin : "30px 0"}}>
                <p style = {{textAlign:"center" , display : "block" , fontSize : "24px" , margin:"0 0 30px 0"}}>Hello {this.props.to} from {this.props.from}{bangs}</p>
                <img style={{width:"100%" ,position:"relative" }} src = {this.props.url} />
            </div>
        );
    }
}