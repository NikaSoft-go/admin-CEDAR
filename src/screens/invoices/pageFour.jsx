import LogoImage from "../../assets/logo.png";
import {GiRotaryPhone} from "react-icons/gi";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";
import SignatureImage from "../../assets/signature.png";

const PageFour = ({ data }) => {
    return (
        <div className="mb-3">
            <div className="page-head">
                <div className="pdf-logo-wrapper">
                    <img src={LogoImage} alt="" className="pdf-logo"/>
                </div>
                <p className="pdf-banner-text">Quote No.: {data?.quote_number}</p>
            </div>
            <div className="page-head-spacer"></div>
            <div className="mx-8 mt-12 mb-[600px]">
                <p className="text-center text-[13px] font-bold">Thank you for considering APEX AIS, I remain available to readily address any questions
                you may have.</p>
                <p className="text-[13px] mt-3">Regards,</p>
                <div className="bottom-cards">
                    <div className="signature">
                        <img src={SignatureImage} alt="" className="max-h-[100px]"/>
                        <p className="mt-2 font-bold text-[13px]">Nick Ames</p>
                        <p className="text-[13px]">Technical Manager</p>
                        <p className="text-[13px] text-[blue] underline">example@gmail.com</p>
                        <p className="text-[13px]">+23300000000000</p>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                <div className="cover-bottom-content px-3">
                    <img src={LogoImage} className="pdf-logo"/>
                </div>
            </div>
            <div className="mt-2 mx-5 mb-3 flex justify-between w-[100%]">
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <GiRotaryPhone size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">+233 (0) 54 279 5320</p>
                        <p className="text-[11px]">+233 (0) 54 307 1604</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <FaGlobe size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">https://www.cedarcompanylimited.com</p>
                    </div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="circle">
                        <IoLocationSharp size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">West-Tanakrom, Western region</p>
                        <p className="text-[11px]">Ghana, West Africa</p>
                    </div>
                </div>
                <div className="flex justify-around items-center mx-12">
                    <div className="circle">
                        <LuPenLine size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">Reg No.</p>
                        <p className="text-[11px]">Tin: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageFour;