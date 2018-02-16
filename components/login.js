import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const loginStyle = css`
#login {
    width: 250px;
    height: 130px;
    margin: 60px auto 0px auto;
    padding: 20px;
    border-radius: 2px;
}
#login p {
    color: gray;
    font-size: small;
}
.login_textField {
    width: 250px;
    height: 25px;
    font-size: 14px;
} 
.loginBtn {
    width: 100px;
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #00bcd4;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; 
}
.loginBtn:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;   
}
`;

export default compose(
    pure
)(() => (
    <login>
        <div id="login">
            <p>メールアドレス</p>
                <input type="text" className="login_textField"></input><br/><br/>
            <p>パスワード</p>
                <input type="text" className="login_textField"></input>
        </div>
        <Link route="/promotion">
            <div className="loginBtn">ログイン</div>
        </Link>
        <style jsx>{loginStyle}</style>
    </login>
));