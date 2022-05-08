import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "./componet/client/content/ClientLayout";
import ClientPasswordFind from "./componet/client/content/ClientPasswordFind";
import ClientRegister from "./componet/client/content/ClientRegister";
import AdminLayout from "./componet/admin/content/AdminLayout";
import KakaoRedirectHandler from './componet/common/KakaoRedirectHandler';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes> 

          <Route path="/"           element={<Navigate replace to="/client"/>} />
          {/* 사용자 페이지 */}
          <Route path="/client/*"   element={<ClientLayout />}></Route> 
          <Route path="/register"   element={<ClientRegister />}></Route> 
          <Route path="/pwfind"     element={<ClientPasswordFind />}></Route> 

          {/* 관리자 페이지 */}
          <Route path="/admin/*"    element={<AdminLayout />}></Route>

          {/* 카카오 로그인 */}
          <Route path="/oauth/callback/kakao"   element={<KakaoRedirectHandler />} />
        </Routes> 
      </BrowserRouter>
    </main>
  );
}

export default App;
