import React, { Component } from 'react';
import './App.css';
import {{cookiecutter.component_name}} from './{{cookiecutter.component}}/{{cookiecutter.component_name}}'

class App extends Component {



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <{{cookiecutter.component_name}}>

                    </{{cookiecutter.component_name}}>
                </header>
            </div>
        );
    }
}

export default App;
