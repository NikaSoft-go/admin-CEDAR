import LogoImage from "../../assets/logo.png";
import {GoDotFill} from "react-icons/go";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";

const PageTwo = ({data}) => {
    return (
        <div className="mb-6">
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
                        Scope: {data?.scope_header_text}
                    </p>
                    <div className="flex justify-between">
                        {data?.scope?.map((elt, index) =>
                            <div className="bg-[#DCDDDF] w-[49.2%] py-2 px-3" key={index}>
                                <div className="flex items-start">
                                    <div className="h-[100%] mr-2">
                                        <GoDotFill size={10} className="mt-1"/>
                                    </div>
                                    <div>
                                        <ul className="text-[11.5px]"><b>{elt?.category}</b></ul>
                                        {elt?.values?.map((innerElt, index) =>
                                            <li className="text-[11.5px]" key={index}>{innerElt}</li>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
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
                            {data?.resources?.map((elt, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{elt}</td>
                                </tr>
                            )}
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
                                    <p className="mb-1">SCOPE / ITEM DESCRIPTION</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                                <th>
                                    <p className="mb-1">QTY</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                                <th>
                                    <p className="mb-1">COST</p>
                                    <p className="bg-[#288068] h-[5px]"></p>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {data?.costs?.map((elt, index) =>
                                <tr key={index}>
                                    <td>{elt?.item}</td>
                                    <td>{elt?.scope}</td>
                                    <td>{elt?.quantity}</td>
                                    <td>{elt?.totalCost}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <div className="mt-3" style={{marginBottom: 35}}>
                            <table className="w-[100%] flex justify-end">
                                <tbody>
                                <tr>
                                    <td><span
                                        className="text-[#8B8989] mr-3 text-sm">Subtotal:</span> <span className={"text-sm"}>{data?.subtotal}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span
                                        className="text-[#8B8989] mr-3 text-sm">NHL ({data?.nhl_percent}%):</span> <span className={"text-sm"}>{data?.nhl}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span
                                        className="text-[#8B8989] mr-3 text-sm">GETFL ({data?.getfl_percent}%):</span> <span className={"text-sm"}>{data?.getfl}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span
                                        className="text-[#8B8989] mr-3 text-sm">COVID ({data?.covid_percent}%):</span> <span className={"text-sm"}>{data?.covid}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span
                                        className="text-[#8B8989] mr-3 text-sm">Total Before tax:</span> <span className={"text-sm"}>{data?.total_before_tax}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span
                                        className="text-[#8B8989] mr-3 text-sm">VAT ({data?.vat_percent}%):</span> <span className={"text-sm"}>{data?.vat}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="text-[#8B8989] mr-3 text-sm">Total Amount:</span> <span
                                        className="font-bold text-sm">{data?.currency} {data?.total_amount}</span></td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                <div className="cover-bottom-content px-3 flex items-center">
                    <img src={LogoImage} className="pdf-logo" alt={""}/>
                    <div className="ml-12 flex justify-evenly w-[100%]">
                        <p className="text-white text-[13px]">Integrity Management</p>
                        <p className="text-white text-[13px]">NDT Inspection</p>
                        <p className="text-white text-[13px]">OCTG Inspection</p>
                        <p className="text-white text-[13px]">Lifting Inspection</p>
                        <p className="text-white text-[13px]">Factory Inspection</p>
                    </div>
                </div>
            </div>
            <div className="mt-2 mx-5 mb-3 flex justify-between w-[100%]">
                {/*<div className="flex justify-start items-center">*/}
                {/*    <div className="circle">*/}
                {/*        <GiRotaryPhone size={18} fill="#288068"/>*/}
                {/*    </div>*/}
                {/*    <div className="ml-2">*/}
                {/*        <p className="text-[11px]">+233 (0) 54 279 5320</p>*/}
                {/*        <p className="text-[11px]">+233 (0) 54 307 1604</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <FaGlobe size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">cedarinspectionventures.com</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <IoLocationSharp size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">P.O.Box SQ 516</p>
                        <p className="text-[11px]">Tema Commununity 1, Greater Accra</p>
                        <p className="text-[11px]">Ghana, West Africa</p>
                    </div>
                </div>
                <div className="flex justify-around items-center mx-12">
                    <div className="circle">
                        <LuPenLine size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">Reg No.: CS183851124</p>
                        <p className="text-[11px]">Tin: C0064790371</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageTwo;