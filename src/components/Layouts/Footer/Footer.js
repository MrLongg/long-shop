import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logo from '../../logo/logo.png';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img className={cx('logo')} src={logo} alt="Logo" />
                <div className={cx('navigation')}>
                    <div className={cx('menu')}>
                        <h4 className={cx('title')}>DANH MỤC</h4>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <a href="/">Đăng kí theo dõi</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Chương trình khuyến mãi</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Shop</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Quần áo</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Đồ gia dụng</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Phụ kiện</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Blog</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Câu chuyện của chúng tôi</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('services')}>
                        <h4 className={cx('title')}>DỊCH VỤ</h4>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <a href="/">Điều khoản dịch vụ</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Chính sách hoàn tiền</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Chính sách bảo mật</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">FAQs</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Liên hệ</a>
                            </li>
                        </ul>
                        <h4 className={cx('title')}>THÔNG TIN NGƯỜI DÙNG</h4>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <a href="/">Đăng nhập</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">Đăng kí</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('follow')}>
                    <h4 className={cx('title')}>THEO DÕI CHÚNG TÔI</h4>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>
                            <a href="/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="/">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </li>
                        <li className={cx('item')}>
                            <a href="/">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('sign-up')}>
                    <h4 className={cx('title')}>CẬP NHẬT TIN TỨC</h4>
                    <p className={cx('description')}>
                        Hãy trở thành người đầu tiên được nhận thông báo
                        <br />
                        về các tin tức, cập nhật và khuyến mãi đặc biệt.
                    </p>
                    <form className={cx('form')}>
                        <input className={cx('input')} placeholder="Địa chỉ Email" />
                        <input className={cx('input')} placeholder="Điện thoại (Tùy chọn)" />
                        <button className={cx('subscribe')}>ĐĂNG KÍ</button>
                    </form>
                    <p className={cx('sub-text')}>
                        Bằng cách đăng ký, bạn đồng ý nhận thông tin cập nhật và tiếp thị <br /> qua email & SMS.
                    </p>
                </div>
            </div>
            <div className={cx('copyright')}>
                <p className={cx('container')}>Copyright © 2024 Long Shop - www.longshop.vn. Powered by Long</p>
            </div>
        </div>
    );
}

export default Footer;
