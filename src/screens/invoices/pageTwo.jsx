import LogoImage from "../../assets/logo.png";
import {GoDotFill} from "react-icons/go";

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
                    <div className="flex justify-between">
                        <div className="bg-[#DCDDDF] w-[49.2%] py-2 px-3">
                            <div className="flex items-start">
                                <div className="h-[100%] mr-2">
                                    <GoDotFill size={10} className="mt-1"/>
                                </div>
                                <div>
                                    <ul className="text-[13px]"><b>NON-DESTRUCTIVE TESTING</b></ul>
                                    <li className="text-[13px]">a) 130m weld linear length - Ultrasonic Testing</li>
                                    <li className="text-[13px]">b) 250m weld linear length - Magnetic Particle</li>
                                    <li className="text-[13px]">c) 15 x Welded Joints - Radiographic Testing</li>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#DCDDDF] w-[50.2%] py-2 px-3">
                            <div className="flex items-start">
                                <div className="h-[100%] mr-2">
                                    <GoDotFill size={10} className="mt-1"/>
                                </div>
                                <div>
                                    <ul className="text-[13px]"><b>LOAD TESTING</b></ul>
                                    <li className="text-[13px]">a) Load Testing to 50T</li>
                                    <li className="text-[13px]">b) Loadcell</li>
                                    <li className="text-[13px]">c) Manifold Frame to top section</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="requirements mb-6">
                    <div className="header-text bg-[#288068] py-1 text-center font-bold">
                        <p className="text-[12px] text-white font-bold">Resources</p>
                    </div>
                    <div>
                        <table className="resources-table">
                            <thead>
                                <tr>
                                    <th>Ref</th>
                                    <th>Resource/Equipment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2 x NDT Personnel : UT, MT, RT L2 (ISO9712)</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Load Testing Engineers</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Project Manager (Office Based)</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>UT Set & Probes, MT Yoke & Inverter, IR 192 Gamma Source & accessories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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