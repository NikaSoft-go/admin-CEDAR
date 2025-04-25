import React from 'react';
import LogoImage from "../../assets/logo.png";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";
import DocumentSpacer from "../../components/spacer/index.jsx";

const PageThree = ({data}) => {
    return (
        <div>
            <div className="page-head">
                <div className="pdf-logo-wrapper">
                    <img src={LogoImage} alt="" className="pdf-logo"/>
                </div>
                <p className="pdf-banner-text">Quote No.: {data?.quote_number}</p>
            </div>
            <DocumentSpacer name={"lifting-comment"} defaultValue={25}/>
            <div className="mx-8">
                <div>
                    <table className="responsibilities-table" style={{marginTop: 0}}>
                        <thead>
                        <tr>
                            <th colSpan="2">Responsibilities</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data?.responsibilities?.map((elt, index) =>
                            <React.Fragment key={index}>
                                <tr>
                                    <td rowSpan={elt?.values?.length + 1} className="bg-[#288068] text-white">
                                        {elt?.category}
                                    </td>
                                </tr>
                                {elt?.values?.map((innerElt, index) =>
                                    <tr key={index}>
                                        <td>{innerElt}</td>
                                    </tr>
                                )}
                            </React.Fragment>
                        )}
                        </tbody>
                    </table>
                </div>
                <DocumentSpacer name={"normal-comment"} defaultValue={25}/>
                <div>
                    <table className="responsibilities-table terms" style={{marginTop: 0}}>
                        <thead>
                        <tr>
                            <th colSpan="2">Terms</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data?.terms?.map((elt, index) =>
                            <tr key={index}>
                                <td>{elt?.category}</td>
                                {elt?.values?.map((innerElt, index) =>
                                    <td key={index}>{innerElt}</td>
                                )}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <DocumentSpacer name={"lifting-images"} defaultValue={25}/>
            <div className="cover-bottom">
                <div className="cover-bottom-content px-3 flex items-center">
                    <img src={LogoImage} className="pdf-logo" alt={"logo-image"}/>
                    <div className="ml-12 flex justify-evenly w-[100%]">
                        <p className="text-white text-[13px]">Integrity Management</p>
                        <p className="text-white text-[13px]">NDT Inspection</p>
                        <p className="text-white text-[13px]">OCTG Inspection</p>
                        <p className="text-white text-[13px]">Lifting Inspection</p>
                        <p className="text-white text-[13px]">Factory Inspection</p>
                    </div>
                </div>
            </div>
             <DocumentSpacer name={"welding-images"} defaultValue={25}/>
            <div className="mx-5 flex justify-between w-[100%]">
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
                        <p className="text-[11px]">P.O.Box SQ 516, Tema</p>
                        <p className="text-[11px]">Community 12, Opposite witsand international sch., Greater Accra</p>
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
            <DocumentSpacer name={"normal-images"} defaultValue={25}/>
        </div>
    )
}


export default PageThree;