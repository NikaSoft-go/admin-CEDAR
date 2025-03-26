const WeldingResult = ({data}) => {
    return (
        <div className="mt-5">
            <p className="text-[14px] font-bold mb-2">Welding Results</p>
            <table className="equipment_table w-[100%]">
                <tbody>
                <tr>
                    <td>Item Tested:</td>
                    <td>{data?.item_tested}</td>
                </tr>
                <tr>
                    <td>Method of Test</td>
                    <td>{data?.test_method}</td>
                </tr>
                <tr>
                    <td>Results</td>
                    <td style={{color: "red"}}>{data?.results}</td>
                </tr>
                <tr>
                    <td>Limitations</td>
                    <td style={{color: "red"}}>{data?.limitations}</td>
                </tr>
                <tr>
                    <td rowSpan={2} colSpan={2}>
                        Disclaimer: {data?.disclaimer}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeldingResult;