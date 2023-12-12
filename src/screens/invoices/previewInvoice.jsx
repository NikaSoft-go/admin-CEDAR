import Sidebar from "../../components/sidebar/index.jsx";
import html2pdf from 'html2pdf.js';
import {FaChevronLeft, FaDownload} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PageOne from "./pageOne.jsx";
import PageTwo from "./pageTwo.jsx";
import PageThree from "./pageThree.jsx";
import PageFour from "./pageFour.jsx";


export default function PDFPages() {
    const navigate = useNavigate();
    const invoices = useSelector(store => store.invoice);
    const { id } = useParams();
    let invoice = invoices.data?.find(invoice => invoice.id === Number(id));
    invoice = {
        ...invoice,
        scope: JSON.parse(invoice.scope),
        resources: JSON.parse(invoice.resources),
        costs: JSON.parse(invoice.costs),
        responsibilities: JSON.parse(invoice.responsibilities),
        terms: JSON.parse(invoice.terms)
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
                        <PageOne data={invoice}/>
                    </div>
                    <div id="pdf-content-page-2">
                        <PageTwo data={invoice}/>
                    </div>
                    <div id="pdf-content-page-3">
                        <PageThree data={invoice}/>
                    </div>
                    <div id="pdf-content-page-4">
                        <PageFour data={invoice}/>
                    </div>
                </main>
            </div>
        </div>
    )
}