
import PdfHead from "../../components/pdfComponents/reportComponents/pdfHead.jsx";
import SectionDetails from "./sectionDetails.jsx";
import AssetDetails from "./assetDetails.jsx";
import DimensionDetails from "./dimensionDetails.jsx";
import Visual from "./visual.jsx";
import ReportDataType from "./reportDataType.jsx";
import PdfBottom from "./pdfBottom.jsx";

const PageTwo = ({ data }) => {
    return (
        <div className="mx-6 mt-3 mb-6">
            <PdfHead />
            <SectionDetails data={data} />
            <AssetDetails data={data?.asset_details} />
            <DimensionDetails data={data} />
            <Visual data={data?.visual} />
            <ReportDataType data={data} />
            <PdfBottom data={data} />
        </div>
    )
}

export default PageTwo;