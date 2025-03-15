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


export default function PreviewReport() {
    const navigate = useNavigate();
    const reports = useSelector(store => store.report);
    const { id } = useParams();
    let report = reports.data?.find(invoice => invoice.id === Number(id));
    report = {
        ...report,
        consumables: JSON.parse(report.consumables || "{}"),
        dimension_one: JSON.parse(report.dimension_one || "{}"),
        dimension_two: JSON.parse(report.dimension_two || "{}"),
        issuer: JSON.parse(report.issuer || "{}"),
        quality_controller: JSON.parse(report.quality_controller || "{}"),
        keys: JSON.parse(report.keys || "{}"),
        report_type_data: JSON.parse(report.report_type_data || "{}"),
        body: JSON.parse(report.body || "{}"),
        blade: JSON.parse(report.blade || "{}"),
        asset_details: JSON.parse(report.asset_details || "{}"),
        equipments: JSON.parse(report.equipments || "{}"),
        ut_results: JSON.parse(report.ut_results || "{}")?.rows || [],
        inspector_comments: JSON.parse(report.inspector_comments || "[]"),
        equipment_consumables: JSON.parse(report.equipment_consumables || "[]"),
        other_welding_props: JSON.parse(report.other_welding_props || "[]"),
        welding_table_data: JSON.parse(report.welding_table_data || "[]"),
        lifting_data: typeof report?.lifting_data === "string"
            ? JSON.parse(report.lifting_data)
            : report.lifting_data,
        personnel_data: typeof report.personnel_data === "string"
                ? JSON.parse(report.personnel_data)
                : report.personnel_data
    }
    // Function to generate a single PDF by combining the content of all pages
    const generateCombinedPDF = () => {
        const combinedContent = [];

        // Collect the content of each page
        for (let i = 1; i <= 6; i++) {
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

                    {normalReportTypes.includes(report?.report_type) && <PreviewReportNormal report={report} />}
                    {report?.report_type === "Ultrasonic Inspection" && <PreviewReportUltrasonicInspection report={report} />}
                    {report?.report_type === "Welding" && <PreviewReportWeldingInspection report={report} />}
                    {report?.report_type === "Forklift Visual report" && <PreviewReportLifting report={report} />}
                </main>
            </div>
        </div>
    )
}