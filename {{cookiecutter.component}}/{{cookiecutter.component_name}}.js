import React from 'react';

import propTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'

const TermsAndConditions = ({termsTxt}) => {

    return (
        <ReactMarkdown source={termsTxt}>

        </ReactMarkdown>
    )
};

TermsAndConditions.propTypes = {
    termsTxt: propTypes.string,
};

TermsAndConditions.defaultProps = {
    termsTxt: `{{cookiecutter.placeholder}}`
};


export default TermsAndConditions