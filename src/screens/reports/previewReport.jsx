import Sidebar from "../../components/sidebar/index.jsx";
import html2pdf from 'html2pdf.js';
import {FaChevronLeft, FaDownload} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PageOne from "./pageOne.jsx";
import PageTwo from "./pageTwo.jsx";


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
            html2canvas: {scale: 2},
            jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
        });
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="preview-sticker flex justify-start">
                        <FaChevronLeft size={20} className="cursor-pointer" onClick={() => navigate('/job-quotation')}/>
                        <FaDownload size={20} className="ml-2 cursor-pointer" onClick={generateCombinedPDF}/>
                    </div>
                    <div id="pdf-content-page-1">
                        <PageOne data={report}/>
                    </div>
                    <div id="pdf-content-page-2">
                        <PageTwo data={report}/>
                    </div>
                </main>
            </div>
        </div>
    )
}