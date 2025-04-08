import {useDispatch, useSelector} from "react-redux";
import {setReportSpacing} from "../../redux/slices/reportSpacing.js";


export default function DocumentSpacer({ name, defaultValue }) {
    const dispatch = useDispatch();
    const reportSpacing = useSelector((state) => state.reportSpacing.report);

    const handleChange = (e) => {
        dispatch(setReportSpacing({
            name,
            value: Number(e.target.value)
        }));
    }

    return (
        <div>
            <input
                className={"hide-on-export"}
                type="number"
                onChange={handleChange}
                value={reportSpacing[name]}
                style={{
                    width: "100%",
                    border: "1px solid #000",
                    padding: "5px",
                    height: `${(reportSpacing[name] || defaultValue) * 1.5}px`
                }}
            />
            <div
                className={"show-on-export"}
                style={{
                    width: "100%",
                    height: `${(reportSpacing[name] || defaultValue)}px`
                }}
            />
        </div>
    );
}
