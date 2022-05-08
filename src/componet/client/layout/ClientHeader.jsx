import React, { useState } from 'react';
import '../../../css/Client.css'
import '../../../css/reset.css'
import logoImg from '../../../images/logo_book.png';
import gnBanner from '../../../images/GN-banner.jpg';

function ClientHeader(props) {
    return (
        <header>
            <div class="header_top">
                <div class="container">
                    <ul class="header_top_left">
                        <li><a href="#">홈</a></li>
                        <li><a href="#" class="red">도서 바로가기</a></li>
                        <li><a href="#">티켓</a></li>
                        <li><a href="#">투어</a></li>
                    </ul>
                    <ul class="header_top_right">
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">회원가입</a></li>
                        <li><a href="#">북카트</a></li>
                        <li><a href="#">마이페이지</a></li>
                        <li><a href="#">북피니언</a></li>
                        <li><a href="#">고객센터test</a></li>
                        <li><a href="#">모바일APP</a></li>
                        <li><a href="#">Language</a></li>
                    </ul>
                </div>
            </div>
            <div class="header_center">
                <div class="container">
                    <div class="logo"><img src={logoImg} /></div>
                    <div>
                        <div class="header_center_top">
                            <input type={"text"} placeholder="하루 10분 문해력 충전타임!" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <ul class="header-center-footer">
                            <li><a href="#">경제적자유</a></li>
                            <li><a href="#">나에게고맙다</a></li>
                            <li><a href="#">새학기START</a></li>
                            <li><a href="#">결혼수업</a></li>
                            <li><a href="#">영어습관만들기</a></li>
                        </ul>
                    </div>
                    <img src={gnBanner} />
                </div>
            </div>

            <div class="header_bottom">
                <div class="container">
                    <div class="nav">
                        <ul class="header_bottom_two">
                            <li id="header_nav_all" class="header_nav_all"
                                onclick="headerNavMenu('header_nav_all_sub')"><a href="#" class="font_14 line">
                                    <i class="fa-solid fa-bars font_14 line"></i>
                                    전체 카테고리
                                    <i class="fa-solid fa-angle-down font_14 line"></i>
                                </a>
                                <div id="header_nav_all_sub" class="header_nav_all_sub menu_hide">
                                    <ul class="header_nav_all_sub_form">
                                        <li class="all_nav"><a class="nav_name">국내도서<span>&gt;</span></a>
                                            <ul>
                                                <li><a>소설</a></li>
                                                <li><a>장르소설</a></li>
                                                <li><a>시·에세이</a></li>
                                                <li><a>경제경영</a></li>
                                                <li><a>자기계발</a></li>
                                                <li><a>사회과학</a></li>
                                                <li><a>역사·문화</a></li>
                                                <li><a>예술·대중문화</a></li>
                                                <li><a>인문</a></li>
                                                <li><a>자연·과학</a></li>
                                                <li><a>종교·역학</a></li>
                                                <li><a>우아</a></li>
                                                <li><a>아동</a></li>
                                                <li><a>가정과생활</a></li>
                                                <li><a>청소년</a></li>
                                                <li><a>초등학습</a></li>
                                                <li><a>중등학습</a></li>
                                                <li><a>고등학습</a></li>
                                                <li><a>국어·외국어·사전</a></li>
                                            </ul>
                                            <ul>
                                                <li><a>자격서·수험서</a></li>
                                                <li><a>공무원·수험서</a></li>
                                                <li><a>컴퓨터·인터넷</a></li>
                                                <li><a>전공·대학교재</a></li>
                                                <li><a>여행</a></li>
                                                <li><a>취미레저</a></li>
                                                <li><a>건강뷰티</a></li>
                                                <li><a>잡지</a></li>
                                                <li><a>만화라이트노벨</a></li>
                                                <li><a>유아동전집</a></li>
                                                <li><a class="sub_color">예약판매</a></li>
                                            </ul>

                                        </li>
                                        <li class="all_nav"><a class="nav_name">외국도서<span>&gt;</span></a>
                                            <ul>
                                                <li><a>어린이</a></li>
                                                <li><a>문학</a></li>
                                                <li><a>ELT사전</a></li>
                                                <li><a>일본도서</a></li>
                                                <li><a>경제인문</a></li>
                                                <li><a>실용예술</a></li>
                                                <li><a>대학전문서적</a></li>
                                                <li><a>컴퓨터</a></li>
                                                <li><a>해외잡지</a></li>
                                                <li><a>학습교구/게임</a></li>
                                                <li><a>프랑스도서</a></li>
                                                <li><a class="sub_color">예약판매</a></li>
                                                <li><a class="sub_color">원서vs번역서</a></li>
                                            </ul>
                                        </li>
                                        <li class="all_nav"><a class="nav_name">음반<span>&gt;</span></a>
                                            <ul>
                                                <li><a>가요</a></li>
                                                <li><a>팝</a></li>
                                                <li><a>클래식</a></li>
                                                <li><a>국악</a></li>
                                                <li><a>일본음악</a></li>
                                                <li><a>락</a></li>
                                                <li><a>뉴에이지</a></li>
                                                <li><a>해외구매</a></li>
                                                <li><a>수입음반</a></li>
                                                <li><a>재즈</a></li>
                                                <li><a>유아아동태교</a></li>
                                                <li><a>뮤직 DVD</a></li>
                                                <li><a>O.S.T</a></li>
                                                <li><a>월드뮤직</a></li>
                                                <li><a>종교</a></li>
                                                <li><a class="sub_color">예약판매</a></li>
                                                <li><a class="sub_color">스타샵</a></li>
                                                <li><a class="sub_color">아티스트파일</a></li>
                                                <li><a class="sub_color">LP</a></li>
                                            </ul>
                                        </li>
                                        <li class="all_nav"><a class="nav_name">DVD<span>&gt;</span></a>
                                            <ul>
                                                <li><a>블루레이</a></li>
                                                <li><a>EBS교육용</a></li>
                                                <li><a>유아동교육 DVD</a></li>
                                                <li><a>영화</a></li>
                                                <li><a>건강취미스포츠</a></li>
                                                <li><a>TV시리즈</a></li>
                                                <li><a>해외구매</a></li>
                                                <li><a>해외구매</a></li>
                                                <li><a>블루레이해외구매</a></li>
                                                <li><a>애니메이션</a></li>
                                                <li><a>예약판매</a></li>
                                            </ul>
                                        </li>
                                        <li class="all_nav"><a class="nav_name">굿즈#<span>&gt;</span></a>
                                            <ul>
                                                <li><a>문구/팬시</a></li>
                                                <li><a>사무/학용</a></li>
                                                <li><a>학습</a></li>
                                                <li><a>독서용품</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" class="font_14 line">베스트셀러</a></li>
                            <li><a href="#" class="font_14 line">추천</a></li>
                            <li><a href="#" class="font_14 line">이벤트</a></li>
                            <li><a href="#" class="font_14 line">정가인하</a></li>
                        </ul>
                        <ul class="header_bottom_three">
                            <li><a href="#" class="font_14">음반</a></li>
                            <li><a href="#" class="font_14">DVD</a></li>
                            <li><a href="#" class="font_14">북DB</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ClientHeader;