import React, {Component} from 'react';
// import './App.css';
import Terms from './components/Terms'
import PdfRenderer from './components/PdfRenderer'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">


                </header>
                <body>
                <PdfRenderer>
                    {/*<Terms/>*/}
                </PdfRenderer>

                </body>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
