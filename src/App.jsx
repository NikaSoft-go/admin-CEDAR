import {Route, Routes} from "react-router-dom";

import LoginPage from "./screens/login/index.jsx";
// import Home from "./screens/home/index.jsx";
import JobQuotations from "./screens/invoices/index.jsx";
import AddJobQuotationsPage from "./screens/invoices/addInvoice.jsx";
import 'react-toastify/dist/ReactToastify.css';
import PDFPages from "./screens/invoices/previewInvoice.jsx";
import EditJobQuotationsPage from "./screens/invoices/editInvoice.jsx";
import Reports from "./screens/reports/index.jsx";
import AddReport from "./screens/reports/addReport.jsx";
import PreviewReport from "./screens/reports/previewReport.jsx";
import EditReport from "./screens/reports/editReport.jsx";
import Invoices from "./screens/jobInvoices/index.jsx";
import AddJobInvoice from "./screens/jobInvoices/addJobInvoice.jsx";
import EditInvoice from "./screens/jobInvoices/editJobInvoice.jsx";
import PreviewJobInvoice from "./screens/jobInvoices/previewJobInvoice.jsx";
import ConnectReports from "./screens/connectReports/connectReports.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/job-quotation" element={<JobQuotations/>}/>
        <Route path="/add-job-quotation" element={<AddJobQuotationsPage/>}/>
        <Route path="/preview-job-quotation/:id" element={<PDFPages/>}/>
        <Route path="/job-quotation/update/:id" element={<EditJobQuotationsPage/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/connect-reports" element={<ConnectReports/>}/>
        <Route path="/add-report" element={<AddReport/>}/>
        <Route path="/preview-report/:id" element={<PreviewReport/>}/>
        <Route path="/report/update/:id" element={<EditReport/>}/>
        <Route path="/invoices" element={<Invoices/>}/>
        <Route path="/add-invoice" element={<AddJobInvoice/>}/>
       <Route path="/invoice/update/:id" element={<EditInvoice/>}/>
       <Route path="/preview-invoice/:id" element={<PreviewJobInvoice/>}/>
      </Routes>
  )
}

export default App
