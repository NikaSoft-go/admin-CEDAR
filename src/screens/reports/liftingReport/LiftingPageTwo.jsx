import SectionDetails from "../sectionDetails.jsx";
import Visual from "../visual.jsx";
import {isLifting} from "../../../utils/index.js";
import CustomAssetTable from "../../../components/assetTable/assetTable.jsx";
import LiftingInfoView from "../../../components/liftingInfoView/liftingInfoView.jsx";

const LiftingPageTwo = ({ data }) => {
    const isLiftingItem = isLifting(data.report_type)
    return (
        <div className="mx-6 mt-3 mb-6">
            {/*<PdfHead />*/}
            <SectionDetails data={data} isLifting={isLiftingItem} />
            <CustomAssetTable
                data={data?.asset_details}
                label={"Asset Details"}
            />
            <CustomAssetTable
                data={data?.report_type_data}
                label={"Items"}
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
