// TODO: expose text area with the terms markdown, add preivew button, add download button

import React from 'react';

import PdfRenderer from './PdfRenderer'


class LiveEditor extends React.Component {

    // children is the predefined terms
    constructor(props) {
        super(props);
        console.log(this.props.children);
        this.state = {
            value: this.props.children.props.termsTxt,
            reloadOnChange: false, // default dont reaload on change
            preview: this.props.children.props.termsTxt
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleReloadToggle = this.handleReloadToggle.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (this.state.reloadOnChange)
            this.setState({preview: event.target.value});
    }

    handleReloadToggle(event) {
        event.preventDefault();
        this.setState({reloadOnChange: !this.state.reloadOnChange})
    }

    handlePreviewReload(event) {
        event.preventDefault();
        this.setState({preview: event.target.value});
    }

    render() {
        return (
            <div className="example">
                <div className="split left">

                    <form onSubmit={this.handleReloadToggle}>
                        <span>Terms</span>
                        <textarea className="textwrapper" value={this.state.value} onChange={this.handleChange} rows={1000} />
                        <input type="submit" value="toggle Reload"/>
                        <input type="submit" value="refresh Preview" onClick={this.handlePreviewReload}/>
                        <div><p>{this.state.reloadOnChange ? 'live edit: true' : 'live edit: false'}</p></div>
                    </form>

                </div>

                <div className="split right">
                    <div className="preview">
                        <PdfRenderer>
                            {this.state.preview}
                        </PdfRenderer>
                    </div>

                </div>

            </div>
        );
    }
}


export default LiveEditor;


