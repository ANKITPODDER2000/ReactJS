class Hello extends React.Component{
    render() {
        let { name, hobbies } = this.props;
        return (
            <div>
                <h1>User name is : {name}</h1>
                <ul>
                    {hobbies.map(h => <li><h3>{h}</h3></li>)}
                </ul>
            </div>
        );
    }
}