import React from 'react';
import PageTwo from "./pageTwo.jsx";
import PageThree from "./pageThree.jsx";


export default function PreviewReportNormal({ report }) {

    return (
        <React.Fragment>
            <div id="pdf-content-page-2">
                <PageTwo data={report}/>
            </div>
            <div id="pdf-content-page-3">
                <PageThree data={report}/>
            </div>
        </React.Fragment>
    )
}