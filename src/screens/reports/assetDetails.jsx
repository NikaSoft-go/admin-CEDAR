

const assetDetails = ({ data, isLifting }) => {
    return (
        <div className="mt-3">
            <p className="text-[14px] font-bold mb-2">Asset Details</p>
            <div>
                <table className="asset-details-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Serial Number</th>
                            <th>Model</th>
                            <th>Description</th>
                            {!isLifting && <th>Size</th>}
                            {!isLifting && <th>Material</th>}
                            {isLifting && <th>Image</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) =>
                            <tr key={index}>
                                <td>{item.type}</td>
                                <td>{item["serial number"] ?? item.serial_number}</td>
                                <td>{item.model || '-'}</td>
                                <td>{item.description}</td>
                                {!isLifting && <td>{item.size}</td>}
                                {!isLifting && <td>{item.material}</td>}
                                {isLifting && <td>{item.image}</td>}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default assetDetails;