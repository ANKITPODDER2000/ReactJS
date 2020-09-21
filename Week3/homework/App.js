class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    from  = "Ankit"
                    to    = "Raja"
                    bangs = {4}
                    url= "https://wallpapercave.com/wp/NGD9aMj.jpg"
                />
                <Hello
                    from    = "Riki"
                    to      = "Ridhi"
                    bangs   = {10}
                    url= 'https://downloadwallpapers-net.s3.amazonaws.com/blue-night-and-moon-nature-hd-wallpapers.jpg'
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));