import { Component } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class App extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div>
                        <h1>Tic Tac Toe</h1>
                        <Switch checked={true} onChange={()=>console.log(5)} name="checkedA" />
                    </div>
                </nav>
            </div>
        )
    }
}

export default App;
