
import PdfHead from "../../components/pdfComponents/reportComponents/pdfHead.jsx";
import SectionDetails from "./sectionDetails.jsx";
import AssetDetails from "./assetDetails.jsx";

const PageTwo = ({ data }) => {
    return (
        <div className="mx-6 mt-3 mb-6">
            <PdfHead />
            <SectionDetails data={data} />
            <AssetDetails data={data?.asset_details} />
        </div>
    )
}

export default PageTwo;