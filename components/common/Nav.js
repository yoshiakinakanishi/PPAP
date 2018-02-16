import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../../routes';

const navStyle = css`
#nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 1000px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.Nav_image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444), linear-gradient(-45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
    background-size: 25px 25px;
    margin: 10px auto 20px auto;
}
.Nav_List {
    padding: 0px 35px;
}
.Nav_promotionSubList {
    font-size: small;
    color: #808080;
}
.Nav_promotionList {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    background-color: #fff;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.Nav_title {
    color: #ff528f;
    font-weight: bold;
    font-size: 18px;
    padding: 15px 0px;
    margin-bottom: 0px;
}
.Nav_menuBtn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 15px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.Nav_menuBtn:hover {
    background-color: #00bcd4;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 2px;
}
`;

export default compose(
    pure
)(() => (
    <nav>
        <div id="nav">
            <ul className="Nav_List">
                <li className="Nav_image"></li>
            
                <li className="Nav_promotionSubList">プロモーション名</li><br/>
                <li></li>
                <li className="Nav_promotionSubList">プロモーションID</li><br/>
                <li></li>

                <Link route="/promotion">
                    <li className="Nav_promotionList Nav_menuBtn">プロモーション一覧</li>
                </Link>

                <li className="Nav_title">プッシュ通知</li>
                    <Link route="/schedule/regist">
                        <li className="Nav_menuBtn">新規配信登録</li>
                    </Link>
                    <Link route="/schedule">
                        <li className="Nav_menuBtn">登録リスト</li>
                    </Link>

                <li className="Nav_title">セグメント</li>
                    <Link route="/segment/regist">
                        <li className="Nav_menuBtn">新規配信登録</li>
                    </Link>
                    <Link route="/segment">                  
                        <li className="Nav_menuBtn">登録リスト</li>
                    </Link>

                <li className="Nav_title">レポート</li>
                    <a href="https://redash.ntpfdmm.net/"><li className="Nav_menuBtn">レポート</li></a>                
                   
            </ul>
        </div>
        <style jsx>{navStyle}</style>
    </nav>
));