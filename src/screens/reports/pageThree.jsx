
import PdfHead from "../../components/pdfComponents/reportComponents/pdfHead.jsx";
import EquipmentSection from "./equipment.jsx";
import ConsumablesSection from "./consumables.jsx";
import Visual from "./visual.jsx";
import KeySection from "./keys.jsx";
import ImageSection from "./imageSection.jsx";
import PdfBottom from "./pdfBottom.jsx";

const PageThree = ({ data }) => {
    return (
        <div className="mx-6 mt-5 mb-6">
            <PdfHead />
            <EquipmentSection data={data?.equipments} />
            <ConsumablesSection data={data?.consumables} />
            <Visual data={data?.comments} title="Inspector's Comment: " />
            <KeySection data={data?.keys} />
            <ImageSection data={data?.images} />
            <PdfBottom data={data} />
        </div>
    )
}

export default PageThree;