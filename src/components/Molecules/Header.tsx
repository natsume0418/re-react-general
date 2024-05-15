import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice";
import '../../HumburgerStyle.css';
import { Link } from "react-router-dom";
import Icon from "../Atoms/Icon";
import fireworks from "../../Image/fireworks.jpeg"

interface RootState {
    menu: {
        isOpen: boolean;
    };
};

const Header = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state:RootState) => state.menu.isOpen);

    const toggleChange = () => {
        dispatch(toggleMenu());
    };

    return(
        <div>
            <header className="bg-red-50 py-2 items-center flex justify-center border-b sm:justify-between">
                <Link to = "/">
                    <Icon className = "w-16 ml-3"  src={fireworks}/>
                </Link>
                <Link to = "/ArticlePost" className="hidden sm:block">新規投稿画面</Link>
                <Link to = "/ArticleList" className="hidden sm:block">投稿一覧画面</Link>
                <Link to = "/InformationChange" className="hidden sm:block">会員情報変更画面</Link>
                <Link to = "/MyPage" className="hidden sm:block">マイページ</Link>
                <Link to = "/" className="hidden sm:block mr-3">ログアウト</Link>
            </header>
            <div onClick={toggleChange} className="burger-icon sm:hidden">
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && (
            <div>
                <div className="flex flex-col items-center text-center bg-red-50 pl-3 absolute w-full sm:hidden">
                    <Link to = "/Registration" className="py-2 border-b w-full">会員登録</Link>
                    <Link to = "/Login" className="py-2 border-b w-full">ログイン</Link>
                    <Link to = "/MyPage" className="py-2 border-b w-full">マイページ</Link>
                </div>
            </div>

        )}
        </div>
    )
};

export default Header;