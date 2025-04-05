import SectionDetails from "../sectionDetails.jsx";
import Visual from "../visual.jsx";
import {isLifting} from "../../../utils/index.js";
import CustomAssetTable from "../../../components/assetTable/assetTable.jsx";
import LiftingInfoView from "../../../components/liftingInfoView/liftingInfoView.jsx";
import {assetTableHeaders, itemTableHeaders} from "../../../utils/data.js";

const LiftingPageTwo = ({ data }) => {
    const isLiftingItem = isLifting(data.report_type);
    console.log(isLiftingItem)
    return (
        <div className="mx-6 mt-3 mb-6">
            {/*<PdfHead />*/}
            <SectionDetails data={data} isLifting={isLiftingItem} />
            <CustomAssetTable
                data={data?.asset_details}
                label={"Asset Details"}
                headers={assetTableHeaders}
                values={assetTableHeaders.map((header) => header.toLowerCase())}
            />
            <CustomAssetTable
                data={data?.report_type_data}
                label={"Items"}
                headers={itemTableHeaders}
                values={itemTableHeaders.map((header) => header.toLowerCase())}
            />
            <LiftingInfoView data={data} />
            <Visual data={data?.visual} />
            {/*{data?.personnel_data && <CustomAssetTable*/}
            {/*    data={data?.personnel_data}*/}
            {/*    label={"Personnel"}*/}
            {/*/>}*/}
        </div>
    )
}

export default LiftingPageTwo;
