import {toTitleCase} from "../../utils/index.js";

const CustomAssetTable = ({ data, label }) => {
    return (
        <div className="mt-3">
            <p className="text-[14px] font-bold mb-2">{label}</p>
            <div>
                <table className="asset-details-table">
                    <thead>
                        <tr>
                            {(data.length && data[0]) && Object.keys(data[0]).map((header, index) =>
                                <th key={index} className={"text-left p-1"}>{toTitleCase(header)}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) =>
                            <tr key={index}>
                                {Object.values(item).map((value, innerIndex) => <td key={innerIndex}>{value}</td>)}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomAssetTable;