class RandomNumber extends React.Component{
    render() {
        return <h1>Number is : {Math.floor(Math.random() * 100)}</h1>;
    }
}