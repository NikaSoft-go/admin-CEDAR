import AddReportLiftingReportCommonFields from "./addReportLiftingReportCommonFields.jsx";


export default function AddReportLiftingReport(
    props
) {
    return (
        <div>
            <AddReportLiftingReportCommonFields
                handleChange={props.handleChange}
                handleTableItemChange={props.handleTableItemChange}
                assetDetails={props.assetDetails}
                setAssetDetails={props.setAssetDetails}
                handleRemoveTableItems={props.handleRemoveTableItems}
                handleAddTableItem={props.handleAddTableItem}
                reportTypeData={props.reportTypeData}
                setReportTypeData={props.setReportTypeData}
            />

        </div>
    )
}