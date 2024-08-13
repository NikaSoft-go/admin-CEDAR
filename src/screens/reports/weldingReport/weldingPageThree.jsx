
import EquipmentSection from "../equipment.jsx";
import ConsumablesSection from "../consumables.jsx";
import Visual from "../visual.jsx";
import KeySection from "../keys.jsx";
import ImageSection from "../imageSection.jsx";
import PdfBottom from "../pdfBottom.jsx";
import WeldingResult from "./weldingResult.jsx";

const WeldingPageThree = ({ data }) => {
    return (
        <div className="mx-6 mt-5 mb-6">
            <WeldingResult data={data} />
            {data?.images?.length > 0 && <ImageSection data={data?.images} />}
            <PdfBottom data={data} />
        </div>
    )
}

export default WeldingPageThree;