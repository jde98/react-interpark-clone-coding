import { Route, Routes } from "react-router-dom";
import ClientFooter from "../layout/ClientFooter";
import ClientHeader from "../layout/ClientHeader";
import ClientLogin from "./ClientLogin";
import ClientMain from "./ClientMain";
import ClientPage1 from "./ClientPage1";
import ClientPage2 from "./ClientPage2";

function ClientLayout() {
    return (
      <div>
        <ClientHeader></ClientHeader>
          <Routes> 
            {/* 사용자 페이지 */}
            <Route path="/"                element={<ClientMain />}></Route> 
            <Route path="/login"           element={<ClientLogin />}></Route> 
            <Route path="/page1"           element={<ClientPage1 />}></Route> 
            <Route path="/page2"           element={<ClientPage2 />}></Route> 
          </Routes> 
        <ClientFooter></ClientFooter>
      </div>
    );
  }
  
  export default ClientLayout;
  