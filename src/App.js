import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLayout from "./componet/client/content/ClientLayout";
import ClientPasswordFind from "./componet/client/content/ClientPasswordFind";
import ClientRegister from "./componet/client/content/ClientRegister";
import AdminLayout from "./componet/admin/content/AdminLayout";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes> 
          {/* 사용자 페이지 */}
          <Route path="/client/*"   element={<ClientLayout />}></Route> 
          <Route path="/register"   element={<ClientRegister />}></Route> 
          <Route path="/pwfind"     element={<ClientPasswordFind />}></Route> 

          {/* 관리자 페이지 */}
          <Route path="/admin/*"    element={<AdminLayout />}></Route>
        </Routes> 
      </BrowserRouter>
    </main>
  );
}

export default App;
