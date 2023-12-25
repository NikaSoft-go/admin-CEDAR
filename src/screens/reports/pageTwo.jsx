
import PdfHead from "../../components/pdfComponents/reportComponents/pdfHead.jsx";
import SectionDetails from "./sectionDetails.jsx";
import AssetDetails from "./assetDetails.jsx";
import DimensionDetails from "./dimensionDetails.jsx";
import Visual from "./visual.jsx";

const PageTwo = ({ data }) => {
    return (
        <div className="mx-6 mt-3 mb-6">
            <PdfHead />
            <SectionDetails data={data} />
            <AssetDetails data={data?.asset_details} />
            <DimensionDetails data={data} />
            <Visual data={data?.visual} />
        </div>
    )
}

export default PageTwo;