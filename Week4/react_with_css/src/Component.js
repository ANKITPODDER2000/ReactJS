import React , {Component} from "react";

class Comp extends Component{
    render() {
        return (
          <div className="container">
            <h2>Dream Place</h2>
            <div className="image-wrapper">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/110/197/200/sand-sea-rock-landscape-wallpaper-preview.jpg"
                className="img"
              />
            </div>
          </div>
        );
    }
}

export default Comp;