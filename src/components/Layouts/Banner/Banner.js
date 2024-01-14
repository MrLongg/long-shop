import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-container')}>
                <img
                    className={cx('img')}
                    src="https://media.istockphoto.com/id/923079848/photo/online-shopping.jpg?s=1024x1024&w=is&k=20&c=e7TS1ukDwc2Wkyq3lf3QLO8jgsOOsbZDrrruiQwd1aE="
                    alt=""
                />
            </div>
        </div>
    );
}

export default Banner;
