import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
    componentDidMount() {
        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        };
        axios
            .get("/api/test", config)
            .then(res => {
                console.log("response data: " + JSON.stringify(res.data));
            })
            .catch(err => {
                console.log("error: " + err);
            });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload....
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/caseyr003/flask-react-template"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Github
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
