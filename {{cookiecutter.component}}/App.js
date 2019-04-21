import React, {Component} from 'react';
import './App.css';
import {{cookiecutter.component_name}} from './{{cookiecutter.component}}/{{cookiecutter.component_name}}'

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {Button, Hero, Container} from 'reactbulma'

class App extends Component {


    render() {
        const TabsStyle = {
            width: "100%",
            height: "100%",
            minHeight: '900px'
        };

        const TabPanelStyle = {
            minHeight: 900
        };

        return (
            <div className="App">
                <header className="App-header">


                    <Tabs style={TabsStyle}>
                        <TabList>
                            <Tab>Default view</Tab>
                            <Tab>Reader Pdf</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>

                            </h2>
                            <div>
                                <{{cookiecutter.component_name}}>

                                </{{cookiecutter.component_name}}>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <h2>React-PDF Reader</h2>
                            <div>
                                pdf reader
                            </div>

                        </TabPanel>
                    </Tabs>


                </header>
            </div>
        );
    }
}

export default App;
