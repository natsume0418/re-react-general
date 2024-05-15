import Header from "../Molecules/Header";
import InputField from "../Molecules/InputField";
import Label from "../Atoms/Label";
import Icon from "../Atoms/Icon";
import Button from "../Atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData, setFormData, selectFormError, setFormError, selectImageIcon, setImageIcon, selectFileError, setFileError, selectSubmit, setSubmit } from "../../redux/formSlice";
import { useNavigate } from "react-router-dom";
import unknown from "../../Image/unknown.jpg"

interface FormValue {
    mailAddress:string;
    password:string;
    confirmPassword:string;
    nickName:string;
};

interface ErrorValue {
    mailAddress:string;
    password:string;
    confirmPassword:string;
    nickName:string;
};

const Registration = () => {

    const dispatch = useDispatch();
    const formData = useSelector(selectFormData);
    const formError = useSelector(selectFormError);
    const imageIcon = useSelector(selectImageIcon);
    const fileError = useSelector(selectFileError);
    const submit = useSelector(selectSubmit);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(setFormData({
            ...formData,
            [name]:value,
        }));
        if (submit) {
            const errorMessage = Validate({
                ...formData,
                [name]: value,
            });
            dispatch(setFormError(errorMessage));
        }
    };

    const submitChange = () => {
        dispatch(setSubmit(true)); 
        const errorMessage = Validate(formData);
        dispatch(setFormError(errorMessage));
        if(Object.keys(errorMessage).length === 0) {
            navigate('/MyPage');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            const fileType = file.type;
            if (fileType !== 'image/jpeg') {
                dispatch(setFileError('JPEG形式以外は表示されません。<br/> 画像は選択しなくても構いません。'));
                dispatch(setImageIcon(unknown));
                return;
            };

            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(setImageIcon(reader.result));
                dispatch(setFileError(""));
            };
            reader.readAsDataURL(file);
        }
    };
    

    const Validate = (value:FormValue) => {
        const errors = {} as ErrorValue;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

        if(!value.mailAddress) {
            errors.mailAddress = 'メールアドレスを入力してください。'
        }else if (!regex.test(value.mailAddress)) {
            errors.mailAddress = '正しいメールアドレスを入力してください。'
        }
        if(!value.password) {
            errors.password = 'パスワードを入力してください。'
        }else if (!passwordRegex.test(value.password)) {
            errors.password = '英数字８字以上で入力してください。'
        }
        if(!value.confirmPassword) {
            errors.confirmPassword ='パスワードを入力してください。'
        }else if(value.password !== value.confirmPassword) {
            errors.confirmPassword = '同じパスワードを入力してください。'
        }
        if(!value.nickName) {
            errors.nickName = 'ニックネームを入力してください。'
        }else if(value.nickName.length < 8) {
            errors.nickName ='8文字以上で入力してください。'
        }
        return errors;
    };

    return(
        <div>
            <Header/>
            <div>
                <h1 className="text-3xl text-center my-5">会員登録</h1>
            </div>
            <div className="w-9/12 mx-auto flex flex-col">
                <div>
                    <InputField
                        name='mailAddress'
                        label="ログインID(メールアドレス)"
                        type="text"
                        value={formData.mailAddress}
                        onChange={handleChange}
                    />
                    <p className="text-red-500 mb-1">{formError.mailAddress}</p>
                </div>
                <div>
                    <InputField
                        name="password"
                        label="パスワード(英数8文字以上)"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p className="text-red-500 mb-1">{formError.password}</p>
                </div>
                <div>
                    <InputField
                        name="confirmPassword"
                        label="パスワード確認"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <p className="text-red-500 mb-1">{formError.confirmPassword}</p>
                </div>
                <div>
                    <InputField
                        name="nickName"
                        label="ニックネーム(8文字以上)"
                        type="text"
                        value={formData.nickName}
                        onChange={handleChange}
                    />
                    <p className="text-red-500 mb-1">{formError.nickName}</p>
                </div>
                <div>
                    <Label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <Label children="ユーザーアイコン画像"/>
                        <Icon src = {imageIcon} className="h-24 mt-3 mx-auto rounded-full"/>
                        <p className="text-center mt-3 text-red-500" dangerouslySetInnerHTML={{ __html: fileError }}></p>
                        <p className="text-center mt-3">タップして画像を変更</p>
                    </Label>
                </div>
                <Button 
                    onClick={submitChange} 
                    className={`border ml-auto my-5 p-2 px-3 ${Object.values(formError).some(error => error !== '') ? 'bg-gray-400' : 'bg-blue-400'}`} 
                    disabled={Object.values(formError).some(error => error !== '')}
                >
                    登録
                </Button> 
            </div>
        </div>
    )

};

export default Registration;