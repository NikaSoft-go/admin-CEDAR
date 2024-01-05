import {formatDate} from "../../utils/index.js";
import LogoImage from "../../assets/logo.png";


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
                            <tr><td><span className="text-[#8B8989] mr-3">NHL:</span> {data?.nhl}%</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">GETFL:</span> {data?.getfl}%</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">COVID:</span> {data?.covid}%</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">Total Before tax:</span> {data?.currency} {data?.total_before_tax}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">VAT:</span> {data?.vat}</td></tr>
                            <tr><td><span className="text-[#8B8989] mr-3">Total Amount:</span> <span className="font-bold">{data?.currency} {data?.total_amount}</span></td></tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className="relative bottom-0 right-0">
                <div className="mt-8">
                    <p className="text-[#8B8989]">Terms & Conditions</p>
                    <p>Payment is due within 15 days</p>
                </div>
                <div className="mt-5 mb-6">
                    <p>Name of Bank</p>
                    <p>Account number: 12346382322</p>
                    <p>Routing: 727387282</p>
                </div>
                <div className="w-[100%] bg-[#288068] h-[40px]"></div>
                <div className="flex justify-center mt-3">
                    <img src={LogoImage} className="w-[150px]" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default JobInvoicePreviewPageOne;