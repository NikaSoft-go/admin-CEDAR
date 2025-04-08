import LogoImage from "../../assets/logo.png";


export const BottomTag = () => {
    return (
        <div className="cover-bottom" style={{ marginTop: 0}}>
            <div className="cover-bottom-header w-[100%] h-[8px]"></div>
            <div className="cover-bottom-content px-3 flex items-center">
                <img src={LogoImage} className="pdf-logo" alt=""/>
                <div className="ml-12 flex justify-evenly w-[100%]">
                    <p className="text-white text-[13px] font-bold">Integrity Management</p>
                    <p className="text-white text-[13px] font-bold">NDT Inspection</p>
                    <p className="text-white text-[13px] font-bold">OCTG Inspection</p>
                    <p className="text-white text-[13px] font-bold">Lifting Inspection</p>
                    <p className="text-white text-[13px] font-bold">Factory Inspection</p>
                </div>
            </div>
        </div>
    )
}
