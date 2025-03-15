import React from 'react';
import LiftingPageTwo from "./liftingReport/LiftingPageTwo.jsx";
import LiftingPageThree from "./liftingReport/LiftingPageThree.jsx";


export default function PreviewReportLifting({ report }) {

    return (
        <React.Fragment>
            <div id="pdf-content-page-2">
                <LiftingPageTwo data={report}/>
            </div>
            <div id="pdf-content-page-3">
                <LiftingPageThree data={report}/>
            </div>
        </React.Fragment>
    )
}