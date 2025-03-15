import Sidebar from "../../components/sidebar/index.jsx";
import {FaChevronLeft, FaDownload} from "react-icons/fa";
import html2pdf from "html2pdf.js";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PreviewChecklistPageOne from "./preview-checklist-page-one.jsx";


export default function PreviewChecklist() {
    const navigate = useNavigate();

    const checklists = useSelector(store => store.report.checklists);
    const {id} = useParams();
    let checklist = checklists?.find(checklist => checklist.id === Number(id));
    checklist = {
        ...checklist,
        checklists_info: typeof checklist?.checklists_info === "string"
        ? JSON.parse(checklist?.checklists_info): checklist?.checklists_info
    }

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
                        <FaChevronLeft size={20} className="cursor-pointer" onClick={() => navigate('/checklists')}/>
                        <FaDownload size={20} className="ml-2 cursor-pointer" onClick={generateCombinedPDF}/>
                    </div>
                    <div id="pdf-content-page-1">
                        <PreviewChecklistPageOne checklist={checklist} />
                    </div>
                </main>
            </div>
        </div>
    )
}