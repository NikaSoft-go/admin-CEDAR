import React from 'react';
import UTPageTwo from "./utPageTwo.jsx";
import UTPageThree from "./utPageThree.jsx";


export default function PreviewReportUltrasonicInspection({ report }) {

    return (
        <React.Fragment>
            <div id="pdf-content-page-2">
                <UTPageTwo data={report}/>
            </div>
            <div id="pdf-content-page-3">
                <UTPageThree data={report}/>
            </div>
        </React.Fragment>
    )
}