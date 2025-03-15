import {FiTrash2} from "react-icons/fi";
import {IoMdAddCircleOutline} from "react-icons/io";


export default function TableList(
    {
        listData,
        setListData,
        handleRemoveTableItems,
        handleTableItemChange,
        tableHeaders,
        label
    }
) {
    const handleAddTableItem = () => {
        const item = tableHeaders.reduce((acc, curr) => {
            acc[curr.toLowerCase()] = "";
            return acc;
        }, {});
        setListData((items) => [...items, item]);
    }

    return (
        <div className="mt-8">
            <label className="block text-gray-700 text-md font-bold mb-2">
                {label}
            </label>
            <table className="w-full border">
                <thead>
                <tr>
                    {tableHeaders.map((header, index) => <th key={index} className="border p-2">{header}</th>)}
                    <th className="border p-2"></th>
                </tr>
                </thead>
                <tbody>
                {listData?.map((asset, rowIndex) => (
                    <tr key={asset.id || rowIndex}> {/* Use a unique identifier from `asset` or fallback to rowIndex */}
                        {tableHeaders.map((header, colIndex) => (
                            <td className="border p-2"
                                key={`${rowIndex}-${colIndex}`}> {/* Combine rowIndex and colIndex for a unique key */}
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder={header}
                                    value={asset[header.toLowerCase()] || ''} // Use the value from the asset object
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            rowIndex,
                                            header.toLowerCase(),
                                            e.target.value,
                                        )
                                    }
                                />
                            </td>
                        ))}
                        <td className="border p-2">
                            <button
                                type="button"
                                className="remove-btn rounded p-1"
                                onClick={() =>
                                    handleRemoveTableItems(
                                        rowIndex,
                                        listData,
                                        setListData
                                    )
                                }
                            >
                                <FiTrash2/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                type="button"
                className="add-item-btn text-white rounded px-2 py-1"
                onClick={handleAddTableItem}
            >
                <IoMdAddCircleOutline/>
            </button>
        </div>
    )
}