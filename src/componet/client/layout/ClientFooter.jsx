import { Link } from 'react-router-dom';
import '../../../css/Client.css'
import BulletMainDot from '../../../images/bullet_mainDot.gif';
import AirportIcon from '../../../images/116582_201705101152493663.jpg';



function ClientFooter() {
    return (
      <footer>
            <div className="container footer_top">
                <div className="footer_top_title">
                    <h2>서비스 &혜택</h2>
                    <div className="notice">
                        <span>공지사항</span><span><i className="fa-solid fa-circle-chevron-right"></i></span>
                        <p>[안내] 인터파크도서 eBook 서비스 종료 안내</p>
                    </div>
                </div>
                <div className="footer_top_info">
                    <div>
                        <h3>알뜰구매 혜택</h3>
                        <ul>
                            <li><Link to="#">L.POINT 100% 무제한 사용</Link></li>
                            <li><Link to="#">OK캐쉬백포인트 100% 무제한 사용</Link></li>
                            <li><Link to="#">북피니언롯데카드 최대30%청구할인</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>핵심서비스</h3>
                        <ul>
                            <li><Link to="#"><img src={AirportIcon} alt=""/>인터파크 Global</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>안심배송서비스</h3>
                        <ul>
                            <li><Link to="#">해외주문배송 서비스</Link></li>
                            <li><Link to="#">안심번호 서비스</Link></li>
                        </ul>
                    </div>
                    <div className="service">
                        <h3>고객센터</h3>
                        <ul>
                            <li>
                                <div>일반문의</div>
                                <div>1577 - 2555</div>
                            </li>
                            <li>
                                <div>eBook 문의</div>
                                <div>1588 - 2547</div>
                            </li>
                            <li>월~금 (09:00~18:00), 토요일, 일요일, 공휴일 휴무</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="footer_center">
                    <div>
                        <Link to="#">
                            <p>3, 5, 8 만원 이상 음반 구매시 더 싸게! <strong>음반 할인쿠폰전</strong></p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">
                            <p>친구에게 상품권 선물 FLEX로 포인트 적립까지! <strong>상품권 선물하기</strong></p>
                        </Link>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="service_center_form">
                            <ul className="group">
                                <li>그룹사 소개<i className="fa-solid fa-sort-down"></i></li>
                                <ul>
                                    <li>인터파크로지스틱스</li>
                                    <li>인터파크시어터</li>
                                    <li>블루스퀘어</li>
                                </ul>
                            </ul>
                            <ul className="footer_menu">
                                <li><Link to="#">개인정보처리방침</Link></li>
                                <li><Link to="#">청소년보호정책</Link></li>
                                <li><Link to="#">이용약관</Link></li>
                                <li><Link to="#">IR</Link></li>
                                <li><Link to="#">회사소개</Link></li>
                                <li><Link to="#">제품공고</Link></li>
                                <li><Link to="#">우수고객제도</Link></li>
                                <li><Link to="#">수익배분프로그램</Link></li>
                                <li><Link to="#">광고안내</Link></li>
                                <li><Link to="#">담당자안내</Link></li>
                                <li><Link to="#">판매자매니저</Link></li>
                            </ul>
                        </div>
                        <div className="company_info">
                            <div>
                                <h3>인터파크 주식회사</h3>
                                <ul>
                                    <li><img src={BulletMainDot} alt=""/> 서울특별시 강남구 삼성로 512 삼성동빌딩 10층(삼성동)</li>
                                    <li><img src={BulletMainDot} alt=""/> 대표이사 강동화</li>
                                    <li><img src={BulletMainDot} alt=""/> 사업자등록번호 824-81-02515 ㅣ 통신판매업신고
                                        2015-서울강남-01050</li>
                                </ul>
                            </div>
                            <div>
                                <h3>고객센터</h3><Link to="#" className="inquiry"></Link>
                                <ul>
                                    <li><img src={BulletMainDot} alt=""/> 전화 1577-2555</li>
                                    <li><img src={BulletMainDot} alt=""/> 팩스 02-6924-9050</li>
                                    <li><img src={BulletMainDot} alt=""/> 개인정보보유기간 : 회원탈퇴시까지</li>
                                    <li><img src={BulletMainDot} alt=""/> 개인정보보호책임자 : 윤혜정 <Link to="#">cpo@interpark.com</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>구매안전 서비스</h3>
                                <ul>
                                    <li><img src={BulletMainDot} alt=""/> 고객님은 안전거래를 위해 현금으로 5만원 이상 결제시 구매자가 보호를 받을
                                        수 있는 구매안전 서비스를(쇼핑몰보증보험) 이용하실수 있습니다.</li>
                                    <li><img src={BulletMainDot} alt=""/> <Link to="#" className="service_subs"></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_terms">
                            <p>인터파크도서에 등록된 오픈마켓 상품은 그 내용과 책임이 모두 판매자에게 있으며, 인터파크도서는 해당상품과 내용에 대해 책임지지 않습니다.</p>
                            <span>Copyright ⓒ INTERPARK Corporation All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default ClientFooter;
  