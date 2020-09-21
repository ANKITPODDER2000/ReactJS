class App extends React.Component {
    render() {
        return (
            <div className = "MainBox">
                <Hello
                    from  = "Ankit"
                    to    = "Raja"
                    bangs = {4}
                    url= "https://i.pinimg.com/originals/3e/a1/37/3ea1371e08a4634823d8fbfa2ae14f65.jpg"
                />
                <Hello
                    from    = "Riki"
                    to      = "Guddu"
                    bangs   = {10}
                    url= 'https://downloadwallpapers-net.s3.amazonaws.com/blue-night-and-moon-nature-hd-wallpapers.jpg'
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));