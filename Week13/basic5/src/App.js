import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                {
                    name: 'Riktom Jha',
                    last_message: {text : "Hi Man!" , sendbyme : false},
                    time: '12:05 pm',
                    img : `https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 500)}.svg`
                },
                {
                    name: 'Ranjit Kumar',
                    last_message: {text : "Heyy there!" , sendbyme : true},
                    time: '00:05 am',
                    img : `https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 500)}.svg`
                },
                {
                    name: 'AP',
                    last_message: {text : "What are you doing ??" , sendbyme : false},
                    time: '07:05 pm',
                    img : `https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 500)}.svg`
                },
                {
                    name: 'Ritesh Garodia',
                    last_message: {text : "What is going on ?" , sendbyme : true},
                    time: '08:05 am',
                    img : `https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 500)}.svg`
                }
            ]
        }
    }
    render() {
        return (
            <div className="app">
                <div className="app_body">
                    <Sidebar
                        chats = {this.state.chats}
                    />
                    <Chat />
                </div>
            </div>
        )
    }
}

export default App;
