import React from 'react';

import {Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

import {PDFViewer} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
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
                    style={styles.page}>
                    <View>
                        <Text>
                            {
                                console.log(children.props)
                            }
                            {
                                children
                            }
                        </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )

};


export default PdfRenderer;