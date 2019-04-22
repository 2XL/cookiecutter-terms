import React, {Component} from 'react';
import './App.css';
import {{cookiecutter.component_name}} from './{{cookiecutter.component}}/{{cookiecutter.component_name}}'

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import PdfRenderer from './components/PdfRenderer'
import Intl from "./components/IntlTrans"




class App extends Component {

    onTabSelectEvent = (...props) => {
        console.log(props)
    };
    render() {
        const TabsStyle = {
            width: "100%",
            height: "100%",
            minHeight: '4000px'
        };


        return (
            <div className="App">
                <header className="App-header">



                    <Tabs style={TabsStyle} onSelect={this.onTabSelectEvent}>
                        <TabList>
                            <Tab>Default view</Tab>
                            <Tab>Reader Pdf</Tab>
                        </TabList>

                        <TabPanel>
                            <h4>
                                Markdown Reader
                            </h4>
                            <div>
                                <{{cookiecutter.component_name}}>

                                </{{cookiecutter.component_name}}>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h4>React-PDF Reader</h4>
                            <div>
                                <PdfRenderer/>
                            </div>

                        </TabPanel>
                    </Tabs>


                </header>
            </div>
        );
    }
}

export default App;
