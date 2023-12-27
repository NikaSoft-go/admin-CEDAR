
import PdfHead from "../../components/pdfComponents/reportComponents/pdfHead.jsx";
import EquipmentSection from "./equipment.jsx";

const PageThree = ({ data }) => {
    return (
        <div className="mx-6 mt-5 mb-6">
            <PdfHead />
            <EquipmentSection data={data} />
        </div>
    )
}

export default PageThree;