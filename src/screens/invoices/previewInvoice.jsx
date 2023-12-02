import PDFCoverImage from "../../assets/pdf_cover.jpg";
import LogoImage from "../../assets/logo.png";
import BannerCard from "../../assets/banner.jpg";
import Sidebar from "../../components/sidebar/index.jsx";
import TableWithHeader from "../../components/pdfComponents/coverPageTable.jsx";
import html2pdf from 'html2pdf.js';
import {FaChevronLeft, FaDownload} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const PageOne = ({ data }) => {
    return (
        <div>
            <img src={PDFCoverImage} alt="" className="pdf-image"/>
            <img src={BannerCard} alt="" className="banner-image"/>
            {/*<div className="space-out"></div>*/}
            <TableWithHeader data={data}/>
            <div className="cover-bottom mt-[60px] mb-[17px]">
                <div className="cover-bottom-header bg-[#248917] w-[100%] h-[8px]"></div>
                <div className="cover-bottom-content px-3 bg-[#3bf123]">
                    <img src={LogoImage} className="pdf-logo"/>
                </div>
            </div>
        </div>
    )
}

const PageTwo = ({ data }) => {
    return (
        <div>
            <div className="page-head">
                <div className="pdf-logo-wrapper">
                    <img src={LogoImage} alt="" className="pdf-logo"/>
                </div>
                <p className="pdf-banner-text">Quote No.: {data?.quote_number}</p>
            </div>
            <div className="page-head-spacer"></div>
            <div className="sub-page-head">
                <div className="flex justify-between mb-4">
                    <span className="sub-page-text">Att: Someone</span>
                    <span className="sub-page-text">{data?.invoice_date}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className="sub-page-text">{data?.client_name}</span>
                    <span className="sub-page-text">{data?.invoice_type}</span>
                </div>
            </div>
            <div className="page-content px-3">
                <p className="text-center mb-6 text-[13px]">
                    Thank you for the opportunity to provide our commercial proposal
                    and trust it meets with your requirements.
                </p>
                <div className="requirements px-[100px] mb-6">
                    <div className="header-text flex justify-center items-center bg-[#3bf123] h-[50px] text-center font-bold">
                        <p className="text-[13px] mt-[-5px]">Requirement</p>
                    </div>
                    <p className="text-center my-3 text-[13px]">{data?.requirements}</p>
                </div>
            </div>
        </div>
    )
}


export default function PDFPages() {
    const navigate = useNavigate();
    const invoices = useSelector(store => store.invoice);
    const { id } = useParams();
    const invoice = invoices.data?.find(invoice => invoice.id === Number(id));
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
            margin: 0,
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
                        <FaChevronLeft size={20} className="cursor-pointer" onClick={() => navigate('/invoices')}/>
                        <FaDownload size={20} className="ml-2 cursor-pointer" onClick={generateCombinedPDF}/>
                    </div>
                    <div id="pdf-content-page-1">
                        <PageOne data={invoice}/>
                    </div>
                    <div id="pdf-content-page-2">
                        <PageTwo data={invoice}/>
                    </div>
                </main>
            </div>
        </div>
    )
}