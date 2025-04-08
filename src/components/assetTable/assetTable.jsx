import {toTitleCase} from "../../utils/index.js";
import DocumentSpacer from "../spacer/index.jsx";

const CustomAssetTable = ({ data, label, headers = [], values = [], uniqueId="" }) => {
    return (
        <div>
            <DocumentSpacer name={uniqueId} defaultValue={15} />
            <p className="text-[14px] font-bold mb-2">{label}</p>
            <div>
                <table className="asset-details-table">
                    <thead>
                    {headers.length === 0 && <tr>
                            {(data.length && data[0]) && Object.keys(data[0]).map((header, index) =>
                                <th key={index} className={"text-left p-1"}>{toTitleCase(header)}</th>)}
                        </tr>
                    }
                    {headers.length > 0 && <tr>
                        {headers.map((header, index) =>
                            <th key={index} className={"text-left p-1"}>{header}</th>)}
                    </tr>
                    }
                    </thead>
                    {values.length  === 0 && <tbody>
                        {data?.map((item, index) =>
                            <tr key={index}>
                                {Object.values(item).map((value, innerIndex) => <td key={innerIndex}>{value}</td>)}
                            </tr>
                        )}
                    </tbody>}
                    {values.length > 0 && <tbody>
                    {data?.map((item, index) =>
                        <tr key={index}>
                            {values.map((value, innerIndex) => <td key={innerIndex}>{item[value]}</td>)}
                        </tr>
                    )}
                    </tbody>}
                </table>
            </div>
        </div>
    )
}

export default CustomAssetTable;
