import React, { useEffect } from "react";
import axios from 'axios';

const KakaoRedirectHandler = () => {
  useEffect(()=> {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "976e4e1808a6f66902e5c9a5b08ffcec";

    console.log(code);
    console.log(grant_type);

    const bodyData = {
        grant_type : grant_type,
        client_id : client_id,
        redirect_uri : "http://localhost:3001/oauth/callback/kakao",
        code : code
    }
    
    const queryStringBody = Object.keys(bodyData)
                                .map(k=> encodeURIComponent(k)+"="+encodeURI(bodyData[k]))
                                .join("&");

    fetch("https://kauth.kakao.com/oauth/token",{
        method : "POST",
        headers : {
            'content-type' : 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body : queryStringBody
    })
    .then(res => res.json())
    .then((data)=>{
        console.log(data)
    })

  }, [])

  return <div>사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면 된다.</div>;
};

export default KakaoRedirectHandler;