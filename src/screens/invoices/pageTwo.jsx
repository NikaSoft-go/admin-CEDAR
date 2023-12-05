import LogoImage from "../../assets/logo.png";
import Scope from "../../assets/scope.jpg";
import Resources from "../../assets/resources.jpg";

const PageTwo = ({ data }) => {
    return (
        <div>
            <div className="page-head mt-6">
                <div className="pdf-logo-wrapper">
                    <img src={LogoImage} alt="" className="pdf-logo"/>
                </div>
                <p className="pdf-banner-text">Quote No.: {data?.quote_number}</p>
            </div>
            <div className="page-head-spacer"></div>
            <div className="sub-page-head">
                <div className="flex justify-between mb-2">
                    <span className="sub-page-text">Att: Someone</span>
                    <span className="sub-page-text">{data?.invoice_date}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="sub-page-text uppercase italic">{data?.client_name}</span>
                    <span className="sub-page-text italic">{data?.invoice_type}</span>
                </div>
            </div>
            <div className="page-content">
                <p className="text-center mb-3 text-[13px]">
                    Thank you for the opportunity to provide our commercial proposal
                    and trust it meets with your requirements.
                </p>
                <div className="requirements mb-6">
                    <div className="header-text bg-[#288068] py-1 text-center font-bold">
                        <p className="text-[12px] text-white font-bold">Requirement</p>
                    </div>
                    <p className="text-center my-1 text-[12px]">{data?.requirements}</p>
                </div>
                <div className="requirements mb-6">
                    <div className="header-text bg-[#288068] py-1 text-center font-bold">
                        <p className="text-[12px] text-white font-bold">Scope</p>
                    </div>
                    <p className="text-left my-3 text-[13px] font-bold">
                        Scope: NDT & LT on fabricated suction Piles
                    </p>
                    <img src={Scope} alt="" className="w-[100%]"/>
                </div>
                <div className="requirements mb-6">
                    <div className="header-text mb-3 bg-[#288068] py-1 text-center font-bold">
                        <p className="text-[12px] text-white font-bold">Resources</p>
                    </div>
                    <img src={Resources} alt="" className="w-[100%]"/>
                </div>
                <div className="requirements mt-6 mb-6">
                    <div className="header-text bg-[#288068] py-1 text-center font-bold">
                        <p className="ext-[12px] text-white font-bold">Cost</p>
                    </div>
                    <div>
                        <table className="cost-table">
                            <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>SCOPE</th>
                                <th>QTY</th>
                                <th>UNIT PRICE</th>
                                <th>COST</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Inspection Personnel - 2 man team (based on 6 days working)</td>
                                <td>Lumpsum</td>
                                <td>10</td>
                                <td>USD 9,288.50</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    IR 192 Gamma Source & Accessories (based on 5 days working)
                                    MT / UT Sets & Accessories
                                </td>
                                <td>Lumpsum</td>
                                <td>10</td>
                                <td>USD 9,288.50</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    Consumables:
                                    RT Films (100x400mm) x15
                                    Processing Chemicals : Developer & Fixer x 1
                                    NDT Consumables (White Contrast/Black Ink/Solvent) x 25
                                </td>
                                <td>Lumpsum</td>
                                <td>10</td>
                                <td>USD 9,288.50</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Load Testing Engineers + 50T Waterbag and Load Cell</td>
                                <td>Lumpsum</td>
                                <td>10</td>
                                <td>USD 9,288.50</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageTwo;