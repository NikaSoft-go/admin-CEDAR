import React from 'react';
import LiftingPageTwo from "./liftingReport/LiftingPageTwo.jsx";
import LiftingPageThree from "./liftingReport/LiftingPageThree.jsx";
import PageTwo from "./pageTwo.jsx";
import PageThree from "./pageThree.jsx";
import PageOne from "./pageOne.jsx";
import {getChecklistInfo, getReportFormatInfo} from "../../utils/index.js";
import PreviewChecklistPageOne from "../checklists/preview-checklist-page-one.jsx";
import DocumentSpacer from "../../components/spacer/index.jsx";


export default function PreviewReportLifting(
    {report, includeMpi = false, includeChecklist = false}
) {
    return (
        <React.Fragment>
            <div id="pdf-content-page-2">
                <LiftingPageTwo data={report}/>
            </div>
            <div id="pdf-content-page-3">
                <LiftingPageThree data={report}/>
            </div>
            {(includeChecklist && report?.checklists?.length > 0) && (
                <div>
                    <DocumentSpacer name={"lifting-checklists"} defaultValue={15} />
                    <div id="pdf-content-page-4">
                        <PreviewChecklistPageOne checklist={getChecklistInfo(report?.checklists[0])}/>
                    </div>
                </div>
            )}
            {(includeMpi && report?.sub_reports?.length > 0) && (
                <div>
                    <DocumentSpacer name={"lifting-sub-reports"} defaultValue={15} />
                    <div id="pdf-content-page-5">
                        <PageOne data={getReportFormatInfo(report.sub_reports[0])}/>
                    </div>
                    <div id="pdf-content-page-6">
                        <PageTwo data={getReportFormatInfo(report.sub_reports[0])}/>
                    </div>
                    <div id="pdf-content-page-7">
                        <PageThree data={getReportFormatInfo(report.sub_reports[0])}/>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
