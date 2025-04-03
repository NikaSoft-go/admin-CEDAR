

const dimensionDetails = ({ data }) => {
    const showDimensions = data?.dimension_one?.length > 0
    || data?.body?.length > 0 || data?.blade?.length > 0
    || data?.dimension_two?.length > 0;

    return (
        <>{showDimensions &&
            <div className="mt-3">
                <p className="text-[14px] font-bold mb-2">Dimension Details</p>
                <div className="flex justify-start w-100">
                    {data?.dimension_one?.length > 0 && <div className="dimension-table-cover dimension-one">
                        <p className="bg-[#D8D8D8] text-[12px] pb-2 pl-2" style={{ fontWeight: 600}}>Connection 1: {data?.dimension_one_name}</p>
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
                    </div>}
                    <div className=" dimension-body">
                        {data?.body?.length > 0 && <div className="dimension-table-cover mb-4">
                            <p className="bg-[#D8D8D8] text-[12px] pb-2 pl-2" style={{ fontWeight: 600}}>Body</p>
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
                            <p className="bg-[#D8D8D8] font-bold text-[12px] pb-2 pl-2">Blade</p>
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
                    {data?.dimension_two?.length > 0 && <div className="dimension-table-cover dimension-two">
                        <p className="bg-[#D8D8D8] font-bold text-[12px] pb-2 pl-2">Connection 2: {data?.dimension_two_name}</p>
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
                    }
                </div>
            </div>
        }</>
    )
}

export default dimensionDetails;
