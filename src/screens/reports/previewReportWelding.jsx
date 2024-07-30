import React from 'react';
import WeldingPageTwo from "./weldingPageTwo.jsx";
import WeldingPageThree from "./weldingPageThree.jsx";


export default function PreviewReportWeldingInspection({ report }) {

    return (
        <React.Fragment>
            <div id="pdf-content-page-2">
                <WeldingPageTwo data={report}/>
            </div>
            <div id="pdf-content-page-3">
                <WeldingPageThree data={report}/>
            </div>
        </React.Fragment>
    )
}