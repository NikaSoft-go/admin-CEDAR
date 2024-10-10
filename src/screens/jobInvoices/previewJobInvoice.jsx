import Sidebar from "../../components/sidebar/index.jsx";
import html2pdf from 'html2pdf.js';
import {FaChevronLeft, FaDownload} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import JobInvoicePreviewPageOne from "./pageOne.jsx";

export default function PreviewJobInvoice() {
    const navigate = useNavigate();
    const invoices = useSelector(store => store.jobInvoice.data);
    const { id } = useParams();
    let invoice = invoices?.find(invoice => invoice.id === Number(id));
    invoice = {
        ...invoice,
        invoice_data: JSON.parse(invoice.invoice_data),
    }
    console.log(invoice);
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
            jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
        });
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="preview-sticker flex justify-start">
                        <FaChevronLeft size={20} className="cursor-pointer" onClick={() => navigate('/invoices')}/>
                        <FaDownload size={20} className="ml-2 cursor-pointer" onClick={generateCombinedPDF}/>
                    </div>
                    <div id="pdf-content-page-1">
                        <JobInvoicePreviewPageOne data={invoice}/>
                    </div>
                </main>
            </div>
        </div>
    )
}