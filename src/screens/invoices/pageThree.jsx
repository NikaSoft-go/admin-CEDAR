import LogoImage from "../../assets/logo.png";
import {GiRotaryPhone} from "react-icons/gi";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";

const PageThree = ({ data }) => {
    return (
        <div className="mb-3">
            <div className="page-head">
                <div className="pdf-logo-wrapper">
                    <img src={LogoImage} alt="" className="pdf-logo"/>
                </div>
                <p className="pdf-banner-text">Quote No.: {data?.quote_number}</p>
            </div>
            <div className="page-head-spacer"></div>
            <div className="mx-8 mb-3">
                <div className="mt-3">
                    <table className="responsibilities-table">
                        <thead>
                            <tr><th colSpan="2">Responsibilities</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan="10" className="bg-[#288068] text-white"> Customer&apos;s Responsibility</td>
                                <td>Site specific inductions and access to work areas.</td>
                            </tr>
                            <tr>
                                <td>Scaffolding (No ladders to be used on site).</td>
                            </tr>
                            <tr>
                                <td>QC to go with technicians to locate & identify welds</td>
                            </tr>
                            <tr>
                                <td>All welds to be tested to be clearly marked and flagged with tape.</td>
                            </tr>
                            <tr>
                                <td>Running water, drainage and electricity to be provided at Darkroom facility.</td>
                            </tr>
                            <tr>
                                <td>Certified electrician to connect up power to Darkroom</td>
                            </tr>
                            <tr>
                                <td>Ablution facilities</td>
                            </tr>
                            <tr>
                                <td>Lighting for after-hours work if required.</td>
                            </tr>
                            <tr>
                                <td>Crane (if lifting and reorientation of equipment required).</td>
                            </tr>
                            <tr>
                                <td>Issue Purchase Order to APEX ALS.</td>
                            </tr>
                            <tr>
                                <td rowSpan="4" className="bg-[#288068] text-white">APEX Responsibilities</td>
                                <td>Provide Component Personnel for specified task(s).</td>
                            </tr>
                            <tr>
                                <td>Provide Flights, Visas, Accommodation, Transfers and Equipment logistics at cost +5% to client.</td>
                            </tr>
                            <tr>
                                <td>Provide PPR, equipment and consumables for the task of conduction scope as required.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-3">
                    <table className="responsibilities-table terms">
                        <thead>
                        <tr><th colSpan="2">Terms</th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>General</td>
                            <td>Refer to General Terms and Conditions <a href="https://google.com" className="underline text-[blue]">here</a> notwithstanding.</td>
                        </tr>
                        <tr>
                            <td>Payment Terms</td>
                            <td>30 days from invoice</td>
                        </tr>
                        <tr>
                            <td>Lead Time</td>
                            <td>2 weeks</td>
                        </tr>
                        <tr>
                            <td>Equipment & Consumables</td>
                            <td>All equipment Duties, Excess will charged to client at cost +5%.
                                Consumables logistics (where applicable) will be charged to client at cost +5%.</td>
                        </tr>
                        <tr>
                            <td>Note(s)</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Durations</td>
                            <td>Estimated duration for the proposed scope in: 5 days working (excluding Load Testing).
                            Note: Estimated durations are a best guess based on previous experience in the field
                            and do not take into account any operational or weather delays. Should there be an
                            extension of the proposed scope duration due to delays outside of APEX control, then
                            the team & equipment day rate of USD 1,124.50 shall apply (excluding Load Testing).
                            These days will be verified on the timesheets</td>
                        </tr>
                        <tr>
                            <td>Exclusion 1</td>
                            <td>Price Quoted for services rendered directly to Wayoe Engineering & Construction
                            and excludes; WHT 7.5%, GETFL/NHIL 5%, Covid 1% and VAT. These will be included at the
                            date of invoicing.</td>
                        </tr>
                        <tr>
                            <td>Exclusion 2</td>
                            <td>Price excludes all Access Equipment if work at height required. These to be supplied
                            by Wayoe Engineering & Construction.</td>
                        </tr>
                        <tr>
                            <td>Validity</td>
                            <td>The quote is valid for 30 days.</td>
                        </tr>
                        </tbody>
                    </table>
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


export default PageThree;