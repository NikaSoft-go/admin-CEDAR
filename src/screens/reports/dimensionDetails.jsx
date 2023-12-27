

const dimensionDetails = ({ data }) => {
    return (
        <div className="mt-3">
            <p className="text-[14px] font-bold mb-2">Dimension Details</p>
            <div className="flex justify-start w-100">
                <div className="dimension-table-cover dimension-one">
                    <p className="bg-[#D8D8D8] font-bold text-[14px] pl-2">Connection 1: {data?.dimension_one_name}</p>
                    <table>
                        <tbody>
                        {data?.dimension_one?.map((elt, index) =>
                            <tr key={index}>
                                <td><p>{elt?.property}</p></td>
                                <td><p>{elt?.value}</p></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className=" dimension-body">
                    {data?.body?.length > 0 && <div className="dimension-table-cover mb-4">
                        <p className="bg-[#D8D8D8] font-bold text-[14px] pl-2">Body</p>
                        <table>
                            <tbody>
                            {data?.body?.map((elt, index) =>
                                <tr key={index}>
                                    <td><p>{elt?.property}</p></td>
                                    <td><p>{elt?.value}</p></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>}
                    {data?.blade?.length > 0 && <div className="dimension-table-cover">
                        <p className="bg-[#D8D8D8] font-bold text-[14px] pl-2">Blade</p>
                        <table>
                            <tbody>
                            {data?.blade?.map((elt, index) =>
                                <tr key={index}>
                                    <td><p>{elt?.property}</p></td>
                                    <td><p>{elt?.value}</p></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>}
                </div>
                <div className="dimension-table-cover dimension-two">
                    <p className="bg-[#D8D8D8] font-bold text-[14px] pl-2">Connection 2: {data?.dimension_two_name}</p>
                    <table>
                        <tbody>
                        {data?.dimension_two?.map((elt, index) =>
                            <tr key={index}>
                                <td><p>{elt?.property}</p></td>
                                <td><p>{elt?.value}</p></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default dimensionDetails;