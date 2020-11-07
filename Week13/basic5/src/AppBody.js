import React, { Component } from 'react';

class AppBody extends Component {
    render() {
        return (
            <div>
                <div className="app">
                    <div className="app_body">
                        { this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppBody;
