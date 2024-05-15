import Header from "../Molecules/Header";
import Button from "../Atoms/Button";
import { useNavigate } from "react-router-dom";
import Icon from "../Atoms/Icon";
import sky from "../../Image/sky.jpeg"

const Top = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/Login');
    };

    const handleRagistration = () => {
        navigate('/Registration')
    };

    return(
        <div className="sm:w-9/12 mx-auto">
            <Header/>
            <div className="text-center">
                <h1 className="text-3xl my-5">タイトル</h1>
                <h2>React.jsを利用したブログサービス課題です。</h2>
            </div>
            <div className="flex flex-col items-center justify-center mt-5 sm:flex-row">
                <Button className="mb-3 border border-blue-100 bg-blue-200 w-44 p-2 sm:mr-3" onClick={handleLogin}>ログイン</Button>
                <Button className="mb-3 border border-blue-100 bg-blue-200 w-44 p-2" onClick={handleRagistration}>会員登録</Button>
            </div>
            <Icon src = {sky} className="hidden sm:block w-9/12 mx-auto mt-8"></Icon>
        </div>
    )
};

export default Top;