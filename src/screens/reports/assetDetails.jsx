

const assetDetails = ({ data }) => {
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
                            <th>Size</th>
                            <th>Material</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) =>
                            <tr key={index}>
                                <td>{item.type}</td>
                                <td>{item.serial_number}</td>
                                <td>{item.model || '-'}</td>
                                <td>{item.description}</td>
                                <td>{item.size}</td>
                                <td>{item.material}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default assetDetails;