import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Footer from './components/Layouts/Footer/Footer';
import Header from './components/Layouts/Header/Header';
import Sidebar from './components/Layouts/Sidebar/Sidebar';
import Content from './components/Layouts/Content/Content';
import Banner from './components/Layouts/Banner/Banner';

const cx = classNames.bind(styles);

function App() {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div>
                    <Banner />
                    <Content />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
