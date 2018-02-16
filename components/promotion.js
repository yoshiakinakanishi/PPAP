import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const promotionStyle = css`
#promotion {
    position: relative;
    width: 60%;
    height: 280px;
    margin: 30px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.promotion_title {
    position: absolute;
    top: 20px;
    left: 180px;
    width: 500px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    font-weight: bold;
    color: #404040;
}
.promotion_titleText {
    position: absolute;
    top: 90px;
    left:  180px;
    width: 600px;
    height: 80px;
    line-height: 80px;
    color: #808080;
}
.promotion_image {
    position: absolute;
    top: 15px;
    left: 40px;
    width: 100px;
    height: 100px;
    background-color: #fff;
    background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444), linear-gradient(-45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
    background-size: 25px 25px;
    border-radius: 50%;
}
.promotion_status {
    position: absolute;
    top: 135px;
    left: 40px;
    width: 100px;
    height: 10px;
    line-height:10px;
    text-align: center;
    color: gray;
    font-size: 14px;
}
.promotion_statusText {
    position: absolute;
    top: 155px;
    left: 40px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #00bcd4;
    border-radius: 2px;
    text-align: center;
    color: #00bcd4;
}
.promotion_innerLine {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #e0e0e0;
}
.promotion_scheduleBtn {
    position: absolute;
    top: 200px;
    left: 20px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    margin: 20px;
    background-color: #ff528f;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.promotion_scheduleBtn:hover {
    opacity: 0.7;
    transition: 0.3s;
    cursor: pointer;
}
.promotion_editBtn {
    position: absolute;
    top: 200px;
    right: 20px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 20px;
    border-radius: 2px;
    text-align: center;
    color: #404040;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.promotion_editBtn:hover {
    background-color: lightgray;
    transition: 0.3s;
    cursor: pointer;
}
`;

export default compose(
    pure
)(() => (
    <promotion>
        <div id="promotion">
            <div className="promotion_title">ほげほげぷー</div>
            <div className="promotion_titleText">プロモーションの説明が入ります。プロモーションの説明が入ります。</div>            
            <div className="promotion_image"></div>
            <div className="promotion_status">ステータス</div>
            <div className="promotion_statusText">有効</div>
            <div className="promotion_innerLine"></div>
            <Link route="/schedule">
                <div className="promotion_scheduleBtn">配信設定</div>
            </Link>
            <Link route="/promotion/edit">
                <div className="promotion_editBtn">編集</div>            
            </Link>
        </div>
        <div id="promotion">
            <div className="promotion_title">ほげほげぷー</div>
            <div className="promotion_titleText">プロモーションの説明が入ります。プロモーションの説明が入ります。</div>            
            <div className="promotion_image"></div>
            <div className="promotion_status">ステータス</div>
            <div className="promotion_statusText">有効</div>
            <div className="promotion_innerLine"></div>
            <Link route="/schedule">
                <div className="promotion_scheduleBtn">配信設定</div>
            </Link>
            <Link route="/promotion/edit">
                <div className="promotion_editBtn">編集</div>            
            </Link>
        </div>
        <div id="promotion">
            <div className="promotion_title">ほげほげぷー</div>
            <div className="promotion_titleText">プロモーションの説明が入ります。プロモーションの説明が入ります。</div>            
            <div className="promotion_image"></div>
            <div className="promotion_status">ステータス</div>
            <div className="promotion_statusText">有効</div>
            <div className="promotion_innerLine"></div>
            <Link route="/schedule">
                <div className="promotion_scheduleBtn">配信設定</div>
            </Link>
            <Link route="/promotion/edit">
                <div className="promotion_editBtn">編集</div>            
            </Link>
        </div>
        <div id="promotion">
            <div className="promotion_title">ほげほげぷー</div>
            <div className="promotion_titleText">プロモーションの説明が入ります。プロモーションの説明が入ります。</div>            
            <div className="promotion_image"></div>
            <div className="promotion_status">ステータス</div>
            <div className="promotion_statusText">有効</div>
            <div className="promotion_innerLine"></div>
            <Link route="/schedule">
                <div className="promotion_scheduleBtn">配信設定</div>
            </Link>
            <Link route="/promotion/edit">
                <div className="promotion_editBtn">編集</div>            
            </Link>
        </div>
        <div id="promotion">
            <div className="promotion_title">ほげほげぷー</div>
            <div className="promotion_titleText">プロモーションの説明が入ります。プロモーションの説明が入ります。</div>            
            <div className="promotion_image"></div>
            <div className="promotion_status">ステータス</div>
            <div className="promotion_statusText">有効</div>
            <div className="promotion_innerLine"></div>
            <Link route="/schedule">
                <div className="promotion_scheduleBtn">配信設定</div>
            </Link>
            <Link route="/promotion/edit">
                <div className="promotion_editBtn">編集</div>            
            </Link>
        </div>
        <style jsx>{promotionStyle}</style>
    </promotion>
));