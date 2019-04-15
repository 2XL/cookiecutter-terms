import propTypes from 'prop-types'

const TermsAndConditions = ({termsTxt}) => {


    return (

        <>
            {{cookiecutter.placeholder}}
        </>

    )
};

TermsAndConditions.propTypes = {
    termsTxt: propTypes.string,
};

TermsAndConditions.defaultProps = {
    termsTxt: ``
};


export default TermsAndConditions