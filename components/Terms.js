import propTypes from 'prop-types'

const TermsAndConditions = ({termsTxt}) => {


    return (

        <>
            ## Generic Terms and Conditions template

            Terms and Conditions ("Terms")

            Last updated: 2019

            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using
            the https://example.com website and the My Mobile App Example App
            mobile application (the "Service") operated by My Company Company Name ("us", "we", or "our").

            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users and others who access or use the Service.

            By accessing or using the Service you agree to be bound by these Terms.
            If you disagree with any part of the terms then you may not access the Service.

            ## Purchases

            If you wish to purchase any product or service made available through the Service ("Purchase"), you may be
            asked to supply certain information relevant to your Purchase including, without limitation, your email,
            address, phone...

            ## Subscriptions

            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in
            advance on a recurring ...

            ## Content

            Our Service allows you to post, link, store, share and otherwise make available certain information, text,
            graphics, videos, or other material ("Content").
            You are responsible for the content distribution


            ## Links To Other Web Sites

            Our Service may contain links to third-party web sites or services that are not owned or controlled by My
            Company Company Name.
            My Company Company Name has no control over, and assumes no responsibility for, the content, privacy
            policies, or practices of any third party web sites or services.
            You further acknowledge and agree that My Company Company Name shall not be responsible or liable, directly
            or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or
            reliance on any such content, goods or services available on or through any such web sites or services.

            ## Changes

            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
            If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking
            effect.
            What constitutes a material change will be determined at our sole discretion.

            ## Contact Us

            If you have any questions about these Terms, please contact us. mailto:chenglong.zq@gmail.com
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