
import EquipmentSection from "./equipment.jsx";
import ConsumablesSection from "./consumables.jsx";
import KeySection from "./keys.jsx";
import ImageSection from "./imageSection.jsx";
import PdfBottom from "./pdfBottom.jsx";
import ViewComments from "../../components/viewComments/viewComments.jsx";

const PageThree = ({ data }) => {
    return (
        <div className="mx-6 mb-6">
            {data?.equipments?.length > 0 && <EquipmentSection data={data?.equipments} />}
            {data?.consumables?.length > 0 && <ConsumablesSection data={data?.consumables} />}
            <ViewComments
                comments={data?.inspector_comments}
                label="Inspector's Comment: "
                uniqueId={"normal-comment"}
            />
            {data?.keys?.length > 0 && <KeySection data={data?.keys} />}
            {data?.images?.length > 0 && <ImageSection data={data?.images} uniqueId={"normal-images"} />}
            <PdfBottom data={data} uniqueId={"normal-bottom"} />
        </div>
    )
}

export default PageThree;
