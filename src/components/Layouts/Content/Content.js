import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('category')}>
                    <div className={cx('title')}>Đồ gia dụng</div>
                    <div className={cx('see-all')}>Xem tất cả</div>
                </div>
                <ul className={cx('list-item')}>
                    <li className={cx('item')}>
                        <img
                            className={cx('img')}
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/fa/70/74/462f2367994d9239378de2a39c48c447.png.webp"
                            alt=""
                        />
                        <div className={cx('description')}>
                            <div className={cx('name')}>
                                Nước giặt OMO 1 lần xả đỉnh cao hàng chính hãng giá giảm sập xình
                            </div>
                            <div className={cx('rating')}>
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                            </div>
                            <div className={cx('price')}>
                                345.000<sup>đ</sup>
                            </div>
                        </div>
                    </li>
                    <li className={cx('item')}>
                        <img
                            className={cx('img')}
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/fa/70/74/462f2367994d9239378de2a39c48c447.png.webp"
                            alt=""
                        />
                        <div className={cx('description')}>
                            <div className={cx('name')}>Nước giặt</div>
                            <div className={cx('rating')}>
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                            </div>
                            <div className={cx('price')}>
                                345.000<sup>đ</sup>
                            </div>
                        </div>
                    </li>
                    <li className={cx('item')}>
                        <img
                            className={cx('img')}
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/fa/70/74/462f2367994d9239378de2a39c48c447.png.webp"
                            alt=""
                        />
                        <div className={cx('description')}>
                            <div className={cx('name')}>Nước giặt</div>
                            <div className={cx('rating')}>
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                            </div>
                            <div className={cx('price')}>
                                345.000<sup>đ</sup>
                            </div>
                        </div>
                    </li>
                    <li className={cx('item')}>
                        <img
                            className={cx('img')}
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/fa/70/74/462f2367994d9239378de2a39c48c447.png.webp"
                            alt=""
                        />
                        <div className={cx('description')}>
                            <div className={cx('name')}>Nước giặt</div>
                            <div className={cx('rating')}>
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                            </div>
                            <div className={cx('price')}>
                                345.000<sup>đ</sup>
                            </div>
                        </div>
                    </li>
                    <li className={cx('item')}>
                        <img
                            className={cx('img')}
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/fa/70/74/462f2367994d9239378de2a39c48c447.png.webp"
                            alt=""
                        />
                        <div className={cx('description')}>
                            <div className={cx('name')}>Nước giặt</div>
                            <div className={cx('rating')}>
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                            </div>
                            <div className={cx('price')}>
                                345.000<sup>đ</sup>
                            </div>
                        </div>
                    </li>
                    <li className={cx('item')}>
                        <img
                            className={cx('img')}
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/fa/70/74/462f2367994d9239378de2a39c48c447.png.webp"
                            alt=""
                        />
                        <div className={cx('description')}>
                            <div className={cx('name')}>Nước giặt</div>
                            <div className={cx('rating')}>
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                                <FontAwesomeIcon className={cx('star')} icon={faStar} />
                            </div>
                            <div className={cx('price')}>
                                345.000<sup>đ</sup>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Content;
