import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const promotionRegistStyle = css`
#promotionRegist {
    position: relative;
    width: 690px;
    height: 900px;
    margin: 30px auto;
    padding: 40px 70px 70px 70px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.promotionRegist_SubText {
    color: #a9a9a9;
}
.promotionRegist_Title {
    font-size: 20px;
    font-weight: bold;
    color: #ff528f;
}
.promotionRegist_TextField {
    width: 400px;
    height: 30px;
    margin-bottom: 30px;
    font-size: 14px;
}
.promotionRegist_Timezone {
   width: 220px;
   height: 30px;
   margin-bottom: 30px;
   font-size: 14px;
}
.segmentConfirm_attention {
    border-radius: 2px;
    background-color: #f0f0f0;
    width: 500px;
    height: 130px;
    margin-bottom: 60px;
    padding: 30px;
}
.segmentConfirm_attention small {
    color: #ff528f;
    font-weight: bold;
    font-size: 18px;
}
.promotionRegist_footer {
    width: 280px;
    height: 40px;
    margin: 40px auto 10px auto;
    padding-left: 0px;
    color: gray;
}
.promotionRegist_footer li {
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
}
.promotionRegist_footer .next {
    background-color: #00bcd4;
    color: #fff;
    margin-left: 40px;
}
.promotionRegist_footer .next:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;
}
.promotionRegist_footer .back:hover {
    background-color: #eaeaea;
    cursor: pointer;
    transition: 0.3s;
}
`;

export default compose(
    pure
)(() => (
    <promotion>
        <div id="promotionRegist">

            <label for="name" className="promotionRegist_Title">画像アイコン</label><br/>
            <small className="promotionRegist_SubText">アイコンに使用する画像ファイルを選択してください</small><br/><br/>
            <input type="file" id="segmentRegist_file"></input><br/><br/><br/>

            <label for="name" className="promotionRegist_Title">プロモーション名</label><br/>
            <input type="text" id="name" placeholder="プロモーション名を入力してください" className="promotionRegist_TextField"></input><br/><br/>

            <label for="name" className="promotionRegist_Title">プロモーションの説明</label><br/>
            <input type="text" id="name" placeholder="プロモーションの説明を入力してください" className="promotionRegist_TextField"></input><br/><br/>
            
            <label for="name" className="promotionRegist_Title">タイムゾーン</label><br/>
            <select className="promotionRegist_Timezone">
                <option value="hogehoge">(GMT+9:00) japan</option>
                <option value="fugafuga">(GMT+9:00) japan</option>
                <option value="hogefuga">(GMT+9:00) japan</option>                
            </select><br/><br/>
        
            <label for="name" className="promotionRegist_Title">APNs Key</label><br/>
            <input type="text" id="name" placeholder="" className="promotionRegist_TextField"></input><br/><br/>
            
            <label for="name"  className="promotionRegist_Title">FCM Key</label><br/>
            <input type="text" id="name" placeholder="" className="promotionRegist_TextField"></input><br/><br/>

            <div className="segmentConfirm_attention">
                <small>APNs Keyについて</small><br/>
                APNs Key説明が入ります。<br/><br/>
                <small>FCM Keyについて</small><br/>
                FCM Keyの説明が入ります。<br/>
            </div>

            <ul className="promotionRegist_footer">
                <Link route="/promotion">
                    <li className="back">キャンセル</li>
                </Link>
                <Link route="/promotion">
                    <li className="next">登録する</li>
                </Link>
            </ul>

        </div>
        <style jsx>{promotionRegistStyle}</style>
    </promotion>
));