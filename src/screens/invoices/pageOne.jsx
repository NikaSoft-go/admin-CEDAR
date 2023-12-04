import PDFCoverImage from "../../assets/pdf_cover.png";
import BannerCard from "../../assets/banner.jpg";
import TableWithHeader from "../../components/pdfComponents/coverPageTable.jsx";
import LogoImage from "../../assets/logo.png";

const PageOne = ({ data }) => {
    return (
        <div>
            <img src={PDFCoverImage} alt="" className="pdf-image"/>
            <img src={BannerCard} alt="" className="banner-image"/>
            <TableWithHeader data={data}/>
            <div className="cover-bottom mt-[25px]">
                <div className="cover-bottom-header w-[100%] h-[8px]"></div>
                <div className="cover-bottom-content px-3">
                    <img src={LogoImage} className="pdf-logo"/>
                </div>
            </div>
        </div>
    )
}

export default PageOne;