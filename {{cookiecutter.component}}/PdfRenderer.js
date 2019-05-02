import React from 'react';

import {Document, Page, Text, View, StyleSheet, Font} from '@react-pdf/renderer';

import {PDFViewer} from '@react-pdf/renderer';


Font.register(
    'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
    {family: 'Oswald'},
);

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        padding: 10,
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 30,
        marginHorizontal: 100,
    },
    emphasis: {
        margin: 12,
        fontSize: 24,
        color: '#F22300',
        fontFamily: 'Oswald'
    }
});

const PDFViewerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "1800px"
};

// Create Document Component
const PdfRenderer = ({children}) => {
    console.log(children);

    const onPdfRendered = () => {
        console.log("rendered")
    };

    return (
        <PDFViewer style={PDFViewerStyle}>
            <Document>
                <Page size="A4"
                      onRender={onPdfRendered}
                      style={styles.body}>
                    <Text style={styles.text}>
                        {children}
                    </Text>

                </Page>
            </Document>
        </PDFViewer>
    )

};


export default PdfRenderer;