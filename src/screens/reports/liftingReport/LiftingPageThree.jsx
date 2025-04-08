import ImageSection from "../imageSection.jsx";
import PdfBottom from "../pdfBottom.jsx";
import ViewComments from "../../../components/viewComments/viewComments.jsx";

const LiftingPageThree = ({ data }) => {
    return (
        <div className="mx-6">
            <ViewComments comments={data?.inspector_comments} label="Comments" uniqueId={"lifting-comment"} />
            {data?.images?.length > 0 && <ImageSection data={data?.images} uniqueId={"lifting-images"} />}
            <PdfBottom data={data} uniqueId={"lifting-bottom"} />
        </div>
    )
}

export default LiftingPageThree;
