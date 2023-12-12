import {Route, Routes} from "react-router-dom";

import LoginPage from "./screens/login/index.jsx";
// import Home from "./screens/home/index.jsx";
import JobQuotations from "./screens/invoices/index.jsx";
import AddJobQuotationsPage from "./screens/invoices/addInvoice.jsx";
import 'react-toastify/dist/ReactToastify.css';
import PDFPages from "./screens/invoices/previewInvoice.jsx";
import EditJobQuotationsPage from "./screens/invoices/editInvoice.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/job-quotation" element={<JobQuotations/>}/>
        <Route path="/add-job-quotation" element={<AddJobQuotationsPage/>}/>
        <Route path="/preview-job-quotation/:id" element={<PDFPages/>}/>
        <Route path="/job-quotation/update/:id" element={<EditJobQuotationsPage/>}/>
        {/*<Route path="/reports" element={<Reports/>}/>*/}
        {/*<Route path="/profile" element={<Home/>}/>*/}
      </Routes>
  )
}

export default App
