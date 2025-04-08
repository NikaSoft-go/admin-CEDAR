import PDFCoverImage from "../../assets/pdf_cover.jpg";
import BannerCard from "../../assets/banner.jpg";
import ReportPageOneTable from "./reportPageOneTable.jsx";
import {BottomTag} from "../../components/pdfComponents/bottomTag.jsx";
import DocumentSpacer from "../../components/spacer/index.jsx";

const PageOne = ({ data }) => {
    return (
        <div>
            <img src={PDFCoverImage} alt="" className="pdf-image"/>
            <img src={BannerCard} alt="" className="banner-image"/>
            <ReportPageOneTable data={data}/>
            <DocumentSpacer name={"page-one-coverBottom"} defaultValue={25} />
            <BottomTag />
        </div>
    )
}

export default PageOne;
