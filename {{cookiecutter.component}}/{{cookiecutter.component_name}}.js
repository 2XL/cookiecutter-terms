import React from 'react';

import propTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'

const TermsAndConditions = ({termsTxt, isRaw}) => {

    return isRaw ?
        <>
            {termsTxt}
        </>
        :
        <ReactMarkdown source={termsTxt}>

        </ReactMarkdown>

};

TermsAndConditions.propTypes = {
    termsTxt: propTypes.string,
    isRaw: propTypes.bool,
};

TermsAndConditions.defaultProps = {
    termsTxt: `{{cookiecutter.placeholder}}`,
    isRaw: false
};


export default TermsAndConditions