import '../../../css/Client.css'
import '../../../css/reset.css'
import logoImg from '../../../images/logo_book.png';
import gnBanner from '../../../images/GN-banner.jpg';
import { Link } from 'react-router-dom';

function ClientHeader() {
    return (
        <header>
            <div className="header_top">
                <div className="container">
                    <ul className="header_top_left">
                        <li><Link to="#">홈</Link></li>
                        <li><Link to="#" className="red">도서 바로가기</Link></li>
                        <li><Link to="#">티켓</Link></li>
                        <li><Link to="#">투어</Link></li>
                    </ul>
                    <ul className="header_top_right">
                        <li><Link to="#">로그인</Link></li>
                        <li><Link to="#">회원가입</Link></li>
                        <li><Link to="#">북카트</Link></li>
                        <li><Link to="#">마이페이지</Link></li>
                        <li><Link to="#">북피니언</Link></li>
                        <li><Link to="#">고객센터test</Link></li>
                        <li><Link to="#">모바일APP</Link></li>
                        <li><Link to="#">Language</Link></li>
                    </ul>
                </div>
            </div>
            <div className="header_center">
                <div className="container">
                    <div className="logo"><img src={logoImg} alt=""/></div>
                    <div>
                        <div className="header_center_top">
                            <input type={"text"} placeholder="하루 10분 문해력 충전타임!" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <ul className="header-center-footer">
                            <li><Link to="#">경제적자유</Link></li>
                            <li><Link to="#">나에게고맙다</Link></li>
                            <li><Link to="#">새학기START</Link></li>
                            <li><Link to="#">결혼수업</Link></li>
                            <li><Link to="#">영어습관만들기</Link></li>
                        </ul>
                    </div>
                    <img src={gnBanner} alt=""/>
                </div>
            </div>

            <div className="header_bottom">
                <div className="container">
                    <div className="nav">
                        <ul className="header_bottom_two">
                            <li id="header_nav_all" className="header_nav_all"><Link to="#" className="font_14 line">
                                    <i className="fa-solid fa-bars font_14 line"></i>
                                    전체 카테고리
                                    <i className="fa-solid fa-angle-down font_14 line"></i>
                                </Link>
                                <div id="header_nav_all_sub" className="header_nav_all_sub menu_hide">
                                    <ul className="header_nav_all_sub_form">
                                        <li className="all_nav">
                                            <Link to="#" className="nav_name">국내도서<span>&gt;</span></Link>
                                            <ul>
                                                <li><Link to="#">소설</Link></li>
                                                <li><Link to="#">장르소설</Link></li>
                                                <li><Link to="#">시·에세이</Link></li>
                                                <li><Link to="#">경제경영</Link></li>
                                                <li><Link to="#">자기계발</Link></li>
                                                <li><Link to="#">사회과학</Link></li>
                                                <li><Link to="#">역사·문화</Link></li>
                                                <li><Link to="#">예술·대중문화</Link></li>
                                                <li><Link to="#">인문</Link></li>
                                                <li><Link to="#">자연·과학</Link></li>
                                                <li><Link to="#">종교·역학</Link></li>
                                                <li><Link to="#">우아</Link></li>
                                                <li><Link to="#">아동</Link></li>
                                                <li><Link to="#">가정과생활</Link></li>
                                                <li><Link to="#">청소년</Link></li>
                                                <li><Link to="#">초등학습</Link></li>
                                                <li><Link to="#">중등학습</Link></li>
                                                <li><Link to="#">고등학습</Link></li>
                                                <li><Link to="#">국어·외국어·사전</Link></li>
                                            </ul>
                                            <ul>
                                                <li><Link to="#">자격서·수험서</Link></li>
                                                <li><Link to="#">공무원·수험서</Link></li>
                                                <li><Link to="#">컴퓨터·인터넷</Link></li>
                                                <li><Link to="#">전공·대학교재</Link></li>
                                                <li><Link to="#">여행</Link></li>
                                                <li><Link to="#">취미레저</Link></li>
                                                <li><Link to="#">건강뷰티</Link></li>
                                                <li><Link to="#">잡지</Link></li>
                                                <li><Link to="#">만화라이트노벨</Link></li>
                                                <li><Link to="#">유아동전집</Link></li>
                                                <li><Link to="#" className="sub_color">예약판매</Link></li>
                                            </ul>

                                        </li>
                                        <li className="all_nav"><Link to="#" className="nav_name">외국도서<span>&gt;</span></Link>
                                            <ul>
                                                <li><Link to="#">어린이</Link></li>
                                                <li><Link to="#">문학</Link></li>
                                                <li><Link to="#">ELT사전</Link></li>
                                                <li><Link to="#">일본도서</Link></li>
                                                <li><Link to="#">경제인문</Link></li>
                                                <li><Link to="#">실용예술</Link></li>
                                                <li><Link to="#">대학전문서적</Link></li>
                                                <li><Link to="#">컴퓨터</Link></li>
                                                <li><Link to="#">해외잡지</Link></li>
                                                <li><Link to="#">학습교구/게임</Link></li>
                                                <li><Link to="#">프랑스도서</Link></li>
                                                <li><Link to="#" className="sub_color">예약판매</Link></li>
                                                <li><Link to="#" className="sub_color">원서vs번역서</Link></li>
                                            </ul>
                                        </li>
                                        <li className="all_nav"><Link to="#" className="nav_name">음반<span>&gt;</span></Link>
                                            <ul>
                                                <li><Link to="#">가요</Link></li>
                                                <li><Link to="#">팝</Link></li>
                                                <li><Link to="#">클래식</Link></li>
                                                <li><Link to="#">국악</Link></li>
                                                <li><Link to="#">일본음악</Link></li>
                                                <li><Link to="#">락</Link></li>
                                                <li><Link to="#">뉴에이지</Link></li>
                                                <li><Link to="#">해외구매</Link></li>
                                                <li><Link to="#">수입음반</Link></li>
                                                <li><Link to="#">재즈</Link></li>
                                                <li><Link to="#">유아아동태교</Link></li>
                                                <li><Link to="#">뮤직 DVD</Link></li>
                                                <li><Link to="#">O.S.T</Link></li>
                                                <li><Link to="#">월드뮤직</Link></li>
                                                <li><Link to="#">종교</Link></li>
                                                <li><Link to="#" className="sub_color">예약판매</Link></li>
                                                <li><Link to="#" className="sub_color">스타샵</Link></li>
                                                <li><Link to="#" className="sub_color">아티스트파일</Link></li>
                                                <li><Link to="#" className="sub_color">LP</Link></li>
                                            </ul>
                                        </li>
                                        <li className="all_nav"><Link to="#" className="nav_name">DVD<span>&gt;</span></Link>
                                            <ul>
                                                <li><Link to="#">블루레이</Link></li>
                                                <li><Link to="#">EBS교육용</Link></li>
                                                <li><Link to="#">유아동교육 DVD</Link></li>
                                                <li><Link to="#">영화</Link></li>
                                                <li><Link to="#">건강취미스포츠</Link></li>
                                                <li><Link to="#">TV시리즈</Link></li>
                                                <li><Link to="#">해외구매</Link></li>
                                                <li><Link to="#">해외구매</Link></li>
                                                <li><Link to="#">블루레이해외구매</Link></li>
                                                <li><Link to="#">애니메이션</Link></li>
                                                <li><Link to="#">예약판매</Link></li>
                                            </ul>
                                        </li>
                                        <li className="all_nav"><Link to="#" className="nav_name">굿즈#<span>&gt;</span></Link>
                                            <ul>
                                                <li><Link to="#">문구/팬시</Link></li>
                                                <li><Link to="#">사무/학용</Link></li>
                                                <li><Link to="#">학습</Link></li>
                                                <li><Link to="#">독서용품</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="#" className="font_14 line">베스트셀러</Link></li>
                            <li><Link to="#" className="font_14 line">추천</Link></li>
                            <li><Link to="#" className="font_14 line">이벤트</Link></li>
                            <li><Link to="#" className="font_14 line">정가인하</Link></li>
                        </ul>
                        <ul className="header_bottom_three">
                            <li><Link to="#" className="font_14">음반</Link></li>
                            <li><Link to="#" className="font_14">DVD</Link></li>
                            <li><Link to="#" className="font_14">북DB</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ClientHeader;