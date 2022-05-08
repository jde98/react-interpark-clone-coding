import '../../../css/Client.css'

function ClientLogin() {
  
    const loginTabClick = (first) => {
        const array = ['tabMember', 'tabNonMember'];

        array.forEach(item => {
            if(item == first){
                document.getElementById(item).classList.add("front");
                document.getElementById(item).classList.remove("back");
            } else {
                document.getElementById(item).classList.add("back");
                document.getElementById(item).classList.remove("front");
            }
        });
    }

    return (
      <div>
        <div className='login_tab_wrap'>
          <div id="tabMember" className='front' onClick={() => loginTabClick('tabMember')}>회원</div>
          <div id="tabNonMember" className='back' onClick={() => loginTabClick('tabNonMember')}>비회원</div>
          <main>
              <input type={'text'} className='input' placeholder='아이디'></input>
              <input type={'password'} className='input' placeholder='비밀번호'></input>
              <button value={"로그인"} className=''>로그인</button>
          </main>
        </div>
      </div>
    );
  }
  
  export default ClientLogin;
  