import { Route, Routes } from "react-router-dom";
import AdminFooter from "../layout/AdminFooter";
import AdminHeader from "../layout/AdminHeader";
import AdminMain from "./AdminMain";
import AdminPage1 from "./AdminPage1";
import AdminPage2 from "./AdminPage2";

function AdminLayout() {
    return (
      <div>
        <AdminHeader></AdminHeader>
        <Routes>
          <Route path="/" element={<AdminMain></AdminMain>}></Route>

          <Route path="/page1" element={<AdminPage1></AdminPage1>}></Route>
          <Route path="/page2" element={<AdminPage2></AdminPage2>}></Route>
        </Routes>
        <AdminFooter></AdminFooter>
      </div>
    );
  }
  
  export default AdminLayout;
  