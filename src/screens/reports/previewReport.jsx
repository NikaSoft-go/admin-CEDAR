import Sidebar from "../../components/sidebar/index.jsx";
import html2pdf from 'html2pdf.js';
import {FaChevronLeft, FaDownload} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PageOne from "./pageOne.jsx";
import PreviewReportNormal from "./previewReportNormal.jsx";
import PreviewReportUltrasonicInspection from "./previewReportUltrasonicInspection.jsx";
import PreviewReportWeldingInspection from "./weldingReport/previewReportWelding.jsx";
import PreviewReportLifting from "./previewReportLifting.jsx";
import {getReportFormatInfo} from "../../utils/index.js";


export default function PreviewReport() {
    const navigate = useNavigate();
    const reports = useSelector(store => store.report);
    const {id} = useParams();
    let report = reports.data?.find(invoice => invoice.id === Number(id));
    report = getReportFormatInfo(report);

    // Function to generate a single PDF by combining the content of all pages
    const generateCombinedPDF = () => {
        const combinedContent = [];

        // Collect the content of each page
        for (let i = 1; i <= 10; i++) {
            const contentId = `pdf-content-page-${i}`;
            const element = document.getElementById(contentId);

            if (element) {
                combinedContent.push(element.innerHTML);
            }
        }

        // Create a div to hold the combined content
        const combinedElement = document.createElement('div');
        combinedElement.innerHTML = combinedContent.join('');

        // Use html2pdf library to generate a single PDF
        html2pdf(combinedElement, {
            filename: 'combined_pages.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {dpi: 20, letterRendering: true, useCORS: true, scale: 2},
            jsPDF: {unit: 'pt', format: "a4", orientation: 'portrait'},
        });
    };

    const normalReportTypes = [
        "MPI",
        "MPI with connections",
        "DPI",
        "DPI with connections",
    ]

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="preview-sticker flex justify-start">
                        <FaChevronLeft size={20} className="cursor-pointer" onClick={() => navigate('/reports')}/>
                        <FaDownload size={20} className="ml-2 cursor-pointer" onClick={generateCombinedPDF}/>
                    </div>
                    <div id="pdf-content-page-1">
                        <PageOne data={report}/>
                    </div>

                    {normalReportTypes.includes(report?.report_type) && <PreviewReportNormal report={report}/>}
                    {report?.report_type === "Ultrasonic Inspection" &&
                        <PreviewReportUltrasonicInspection report={report}/>}
                    {report?.report_type === "Welding" && <PreviewReportWeldingInspection report={report}/>}
                    {report?.report_type === "Forklift Visual report" &&
                        <PreviewReportLifting report={report}  includeMpi={true} includeChecklist={true}/>}
                    {report?.report_type === "Forklift Visual with MPI report" &&
                        <PreviewReportLifting report={report} includeMpi={true} includeChecklist={true}/>}
                    {report?.report_type === "Crane Visual report" &&
                        <PreviewReportLifting report={report} includeMpi={true} includeChecklist={true}/>}
                    {report?.report_type === "Crane Visual with MPI report" &&
                        <PreviewReportLifting report={report} includeMpi={true} includeChecklist={true}/>}
                </main>
            </div>
        </div>
    )
}
