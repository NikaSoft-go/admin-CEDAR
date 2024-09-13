import LogoImage from '../../../assets/logo.png';

export const PdfHead = () => {
    return (
        <div className="report-page-head">
            <div className="flex justify-between p-3">
                <div>
                    <img src={LogoImage} alt="" className="w-[200px] h-[80px]" />
                </div>
                <div>
                    <p>Cedar Inspection Ventures</p>
                    <p>Tema Community 1, Greater Accra</p>
                    <p>Ghana, West-Africa</p>
                </div>
            </div>
            <div className="bg-[#D8D8D8] font-bold text-[14px] text-center pb-2 pl-2">
                Inspection Report
            </div>
        </div>
    )
}

export default PdfHead;