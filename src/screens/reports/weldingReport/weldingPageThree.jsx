
import ImageSection from "../imageSection.jsx";
import PdfBottom from "../pdfBottom.jsx";
import WeldingResult from "./weldingResult.jsx";

const WeldingPageThree = ({ data }) => {
    return (
        <div className="mx-6 mt-5 mb-6">
            <WeldingResult data={data} />
            {data?.images?.length > 0 && <ImageSection data={data?.images} uniqueId={"welding-images"} />}
            <PdfBottom data={data} uniqueId={"welding-bottom"} />
        </div>
    )
}

export default WeldingPageThree;
