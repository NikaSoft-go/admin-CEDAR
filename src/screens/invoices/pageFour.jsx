import LogoImage from "../../assets/logo.png";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";
import Signature from "../../assets/signature.png";
import CardOneImage from "../../assets/card_1.jpg";
import CardTwoImage from "../../assets/card_2.jpg";

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
            <div className="mx-8 mt-12 mb-[570px]">
                <p className="text-center text-[13px] font-bold">
                    {data?.last_words}
                </p>
                <p className="text-[13px] mt-3 mb-3">Regards,</p>
                <div className="bottom-cards flex">
                    <div className="signature">
                        <img src={Signature} alt="" className="bottom-card-images"/>
                        <p className="mt-2 font-bold text-[13px]">{data?.presented_by}</p>
                        <p className="text-[13px]">{data?.presenter_role}</p>
                        <p className="text-[13px] text-[blue] underline">{data?.email}</p>
                        <p className="text-[13px]">{data?.presenter_phone}</p>
                    </div>
                    <img src={CardOneImage} alt="" className="bottom-card-images" />
                    <img src={CardTwoImage} alt="" className="bottom-card-images" />
                </div>
            </div>
            <div className="cover-bottom">
                <div className="cover-bottom-content px-3 flex items-center">
                    <img src={LogoImage} className="pdf-logo" alt="" />
                    <div className="ml-12 flex justify-evenly w-[100%]">
                        <p className="text-white text-[13px]">Integrity Management</p>
                        <p className="text-white text-[13px]">NDT Inspection</p>
                        <p className="text-white text-[13px]">OCTG Inspection</p>
                        <p className="text-white text-[13px]">Lifting Inspection</p>
                    </div>
                </div>
            </div>
            <div className="mt-2 mx-5 mb-3 flex justify-between w-[100%]">
                {/*<div className="flex justify-start items-center">*/}
                {/*    <div className="circle">*/}
                {/*        <GiRotaryPhone size={18} fill="#288068"/>*/}
                {/*    </div>*/}
                {/*    <div className="ml-2">*/}
                {/*        <p className="text-[11px]">{data?.mobile_phone_one}</p>*/}
                {/*        <p className="text-[11px]">{data?.mobile_phone_two}</p>*/}
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
                        <p className="text-[11px]">West-Tanakrom, Western region</p>
                        <p className="text-[11px]">Tema Commununity 1, Greater Accra</p>
                        <p className="text-[11px]">Ghana, West Africa</p>
                    </div>
                </div>
                <div className="flex justify-around items-center mx-12">
                    <div className="circle">
                        <LuPenLine size={18} fill="#288068"/>
                    </div>
                    <div className="ml-2">
                        <p className="text-[11px]">Reg No.: BN161481223</p>
                        <p className="text-[11px]">Tin: P0059386088</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageFour;