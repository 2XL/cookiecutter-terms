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

// Create Document Component
const PdfRenderer = ({children}) => {
    console.log(children);
    const onPdfRendered = () => {
        console.log("rendered")
    };


    return (
        <PDFViewer
            <Document>
                <Page
                    size="A4"
                    onRender={onPdfRendered}
                    style={styles.page}>
                    <View>

                    </View>
                    {/*{children}*/}
                </Page>
            </Document>
        </PDFViewer>
    )

};


export default PdfRenderer;