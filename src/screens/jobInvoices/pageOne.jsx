import {formatDate} from "../../utils/index.js";
import LogoImage from "../../assets/logo.png";
import {FaGlobe} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {LuPenLine} from "react-icons/lu";


const JobInvoicePreviewPageOne = ({ data }) => {
    return (
        <div className="mx-6 mt-3 mb-6">
            <div className="w-[100%] bg-[#288068] h-[40px]"></div>
            <div className="px-4 py-2">
              <h3 className="uppercase text-[20px] font-bold">Invoice</h3>
              <div className="my-4 flex justify-between">
                  <div>
                      <p className="text-[#8B8989] font-bold">SENT TO</p>
                      <p>{data?.receiver}</p>
                      <p>{data?.receiver_address}</p>
                  </div>
                  <table>
                      <tbody>
                         <tr>
                             <td className="uppercase text-[#8B8989] font-bold text-right text-[15px]">Invoice #</td>
                             <td className="text-[15px]">
                                 <p className="ml-2">{data?.invoice_number}</p>
                             </td>
                         </tr>
                         <tr>
                             <td className="uppercase text-[#8B8989] font-bold text-right text-[15px]">Invoice Date</td>
                             <td className="text-[15px]">
                                 <p className="ml-2">{formatDate(data?.invoice_date)}</p>
                             </td>
                         </tr>
                         <tr>
                             <td className="uppercase text-[#8B8989] font-bold text-right text-[15px]">Due Date</td>
                             <td className="text-[15px]">
                                 <p className="ml-2">{formatDate(data?.due_date)}</p>
                             </td>
                         </tr>
                      </tbody>
                  </table>
              </div>
            </div>
            <div className="mt-3 mb-6">
                <table className="w-[100%] invoice_table">
                    <thead>
                        <tr>
                            <th className="text-left bg-[#288068] text-[#fff] px-2 py-1">Quantity</th>
                            <th className="text-left bg-[#288068] text-[#fff] px-2 py-1">Description</th>
                            <th className="text-left bg-[#288068] text-[#fff] px-2 py-1">Unit Price</th>
                            <th className="text-left bg-[#288068] text-[#fff] px-2 py-1">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.invoice_data?.map((elt, index) =>
                            <tr key={index}>
                                <td>{elt.quantity}</td>
                                <td>{elt.description}</td>
                                <td className="text-right">{elt.unitPrice}</td>
                                <td className="text-right">{data?.currency} {elt.totalCost}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="mt-6">
                    <table className="w-[100%] flex justify-end">
                        <tbody>
                            <tr><td><span className="text-[#8B8989] mr-3">Subtotal:</span> {data?.currency} {data?.subtotal}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">NHL ({data?.nhl_percent}%):</span>{data?.currency} {data?.nhl}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">GETFL ({data?.getfl_percent}%):</span>{data?.currency} {data?.getfl}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">COVID ({data?.covid_percent}%):</span>{data?.currency} {data?.covid}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">Total Before tax:</span> {data?.currency} {data?.total_before_tax}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">VAT ({data?.vat_percent}%):</span>{data?.currency} {data?.vat}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">Total Amount:</span> <span className="font-bold">{data?.currency} {data?.total_amount}</span></td></tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className="relative bottom-0 right-0">
                <div className={"flex justify-between"}>
                    <div>
                        <div className="mt-8">
                            <p className="text-[#8B8989]">Terms & Conditions</p>
                            <p>Payment is due within 15 days</p>
                        </div>
                        <div className="mt-5 mb-6">
                            <p>Name of Bank: {data?.bank_name}</p>
                            <p>Account number: {data?.account_number}</p>
                            <p>Routing: {data?.routing}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-5 mb-6 flex flex-col">
                            <div className={'flex justify-between'}>
                                <div>
                                    <p className="text-[#8B8989]">Approved By:</p>
                                    <p>{data?.approver}</p>
                                </div>
                                <div style={{marginLeft: 10}}>
                                    <p className="text-[#8B8989]">Contact:</p>
                                    <p>{data?.approver_contact}</p>
                                </div>
                            </div>
                            <div className={'flex justify-between'}>
                                <div>
                                    <p className="text-[#8B8989] mt-3">Date:</p>
                                    <p style={{marginTop: 30}}>________________</p>
                                </div>
                                <div style={{marginLeft: 10}}>
                                    <p className="text-[#8B8989] mt-3">Signature:</p>
                                    <p style={{marginTop: 30}}>_____________________</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] bg-[#288068] h-[40px]"></div>
                <div className="cover-bottom">
                    <div className="cover-bottom-content px-3 flex items-center">
                        <img src={LogoImage} className="pdf-logo" alt=""/>
                        <div className="ml-12 flex justify-evenly w-[100%]">
                            <p className="text-white text-[13px]">Integrity Management</p>
                            <p className="text-white text-[13px]">NDT Inspection</p>
                            <p className="text-white text-[13px]">OCTG Inspection</p>
                            <p className="text-white text-[13px]">Lifting Inspection</p>
                            <p className="text-white text-[13px]">Factory Inspection</p>
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
                            <p className="text-[11px]">P.O.Box SQ 516</p>
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
        </div>
    )
}

export default JobInvoicePreviewPageOne;