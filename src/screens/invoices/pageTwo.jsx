import LogoImage from "../../assets/logo.png";
import {GoDotFill} from "react-icons/go";
import {GiRotaryPhone} from "react-icons/gi";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";

const PageTwo = ({ data }) => {
    return (
        <div>
            <div className="page-head">
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
                    <div className="header-text bg-[#288068] text-center font-bold">
                        <p className="text-[12px] text-white font-bold mb-1">Requirement</p>
                        <p className="bg-[#288068] h-[10px]"></p>
                    </div>
                    <p className="text-center my-1 text-[12px]">{data?.requirements}</p>
                </div>
                <div className="requirements mb-3">
                    <div className="header-text bg-[#288068] text-center font-bold">
                        <p className="text-[12px] text-white font-bold mb-1">Scope</p>
                        <p className="bg-[#288068] h-[5px]"></p>
                    </div>
                    <p className="text-left mt-1 mb-3 text-[13px] font-bold">
                        Scope: NDT & LT on fabricated suction Piles
                    </p>
                    <div className="flex justify-between">
                        <div className="bg-[#DCDDDF] w-[49.2%] py-2 px-3">
                            <div className="flex items-start">
                                <div className="h-[100%] mr-2">
                                    <GoDotFill size={10} className="mt-1"/>
                                </div>
                                <div>
                                    <ul className="text-[11.5px]"><b>NON-DESTRUCTIVE TESTING</b></ul>
                                    <li className="text-[11.5px]">a) 130m weld linear length - Ultrasonic Testing</li>
                                    <li className="text-[11.5px]">b) 250m weld linear length - Magnetic Particle</li>
                                    <li className="text-[11.5px]">c) 15 x Welded Joints - Radiographic Testing</li>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#DCDDDF] w-[50.2%] py-2 px-3">
                            <div className="flex items-start">
                                <div className="h-[100%] mr-2">
                                    <GoDotFill size={10} className="mt-1"/>
                                </div>
                                <div>
                                    <ul className="text-[11.5px]"><b>LOAD TESTING</b></ul>
                                    <li className="text-[11.5px]">a) Load Testing to 50T</li>
                                    <li className="text-[11.5px]">b) Loadcell</li>
                                    <li className="text-[11.5px]">c) Manifold Frame to top section</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="requirements mb-3">
                    <div className="header-text bg-[#288068] text-center font-bold">
                        <p className="text-[12px] text-white font-bold mb-1">Resources</p>
                        <p className="bg-[#288068] h-[5px]"></p>
                    </div>
                    <div>
                        <table className="resources-table">
                            <thead>
                                <tr>
                                    <th>
                                        <p className="mb-1">Ref</p>
                                        <p className="bg-[#329f81] h-[5px]"></p>
                                    </th>
                                    <th>
                                        <p className="mb-1">Resource/Equipment</p>
                                        <p className="bg-[#329f81] h-[5px]"></p>
                                    </th>
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
                <div className="requirements mt-3 mb-3">
                    <div className="header-text bg-[#288068] text-center font-bold">
                        <p className="text-[12px] text-white font-bold mb-1">Cost</p>
                        <p className="bg-[#288068] h-[5px]"></p>
                    </div>
                    <div>
                        <table className="cost-table">
                            <thead>
                            <tr>
                                <th>
                                    <p className="mb-1">ITEM</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                                <th>
                                    <p className="mb-1">SCOPE</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                                <th>
                                    <p className="mb-1">QTY</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                                <th>
                                    <p className="mb-1">UNIT PRICE</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                                <th>
                                    <p className="mb-1">COST</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
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
            <div className="cover-bottom">
                <div className="cover-bottom-header w-[100%] h-[8px]"></div>
                <div className="cover-bottom-content px-3">
                    <img src={LogoImage} className="pdf-logo"/>
                </div>
            </div>
            <div className="mt-2 mx-5 mb-3 flex justify-between w-[100%]">
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <GiRotaryPhone size={25} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[12px]">+233 (0) 54 279 5320</p>
                        <p className="text-[12px]">+233 (0) 54 307 1604</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <FaGlobe size={25} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[12px]">https://www.cedarcompanylimited.com</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <IoLocationSharp size={25} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[12px]">West-Tanakrom, Western region</p>
                        <p className="text-[12px]">Ghana, West Africa</p>
                    </div>
                </div>
                <div className="flex justify-around items-center mx-12">
                    <div className="circle">
                        <LuPenLine size={25} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[12px]">Reg No.</p>
                        <p className="text-[12px]">Tin: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageTwo;