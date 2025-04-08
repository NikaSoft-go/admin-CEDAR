
import SectionDetails from "./sectionDetails.jsx";
import AssetDetails from "./assetDetails.jsx";
import DimensionDetails from "./dimensionDetails.jsx";
import Visual from "./visual.jsx";
import ReportDataType from "./reportDataType.jsx";
import {isLifting} from "../../utils/index.js";

const PageTwo = ({ data }) => {
    const isLiftingItem = isLifting(data.report_type)
    return (
        <div className="mx-6">
            {/*<PdfHead />*/}
            <SectionDetails data={data} isLifting={isLiftingItem} uniqueId={"normal-sectionDetails"} />
            <AssetDetails data={data?.asset_details} isLifting={isLiftingItem} />
            <DimensionDetails data={data} />
            <Visual data={data?.visual} uniqueId={"normal-visual"} />
            <ReportDataType data={data} />
        </div>
    )
}

export default PageTwo;
