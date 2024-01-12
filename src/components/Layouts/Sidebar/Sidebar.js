import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Danh mục</div>
            <ul className={cx('list-item')}>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Đồ gia dụng</div>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
                        alt=""
                    />
                    <div className={cx('item-title')}>Điện thoại - Máy tính bảng</div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
