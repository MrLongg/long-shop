import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping, faEnvelope, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <img className={cx('logo')} src={logo} alt="Logo" />
                    <div className={cx('search')}>
                        <input className={cx('search-bar')} type="text" placeholder="Tìm kiếm..." />
                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('info')}>
                        <div className={cx('info-icon')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className={cx('info-icon')}>
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className={cx('info-icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className={cx('info-icon')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
