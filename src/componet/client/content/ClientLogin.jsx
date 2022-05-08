import '../../../css/Client.css'
import Tab from '../../common/Tab';

function ClientLogin() {

    const loginTabList = [
      {
        id : "tabMember",
        title : "회원"
      },
      {
        id : "tabNonMember",
        title : "비회원"
      }
    ];

    const CLIENT_ID = "976e4e1808a6f66902e5c9a5b08ffcec";
    const REDIRECT_URI =  "http://localhost:3001/oauth/callback/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const Login = () => {
      
    }

    return (
      <div className='login_tab_wrap'>
        <Tab tabList={loginTabList}></Tab>
        <div className="login-form">
          <input type={'text'} className='input' placeholder='아이디'></input>
          <input type={'password'} className='input' placeholder='비밀번호'></input>
          <button value={"로그인"} onClick={Login}>로그인</button>
          <a href={KAKAO_AUTH_URL}>
            <div className={"kakao-btn"}>
            </div>
          </a>
        </div>
      </div>
    );
  }
  
  export default ClientLogin;
  