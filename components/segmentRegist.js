import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import segment from './segment';
import { Link } from '../routes';

const segmentRegistStyle = css`
.segmentRegist_mainTitle {
    position: absolute;
    top: 90px;
    left: 300px;
    font-size: 28px;
    font-weight: bold;
    color: #404040;
}
#segmentRegist {
    position: absolute;
    top: 160px;
    left: 300px;
    width: 950px;
    height: 450px;
    padding: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.segmentRegist_Title {
    font-size: 20px;
    font-weight: bold;
    color: #ff528f;
}
.segmentRegist_TextField {
    width: 600px;
    height: 30px;
    margin-bottom: 20px;
    font-size: 14px;
}
.segmentRegistt_SubText {
    color: #a9a9a9;
}
.segmentRegist_ListBtn {
    padding-left: 0px;
    margin-top: 60px;
}
.segmentRegist_footer {
    width: 280px;
    height: 40px;
    margin: 20px auto 10px auto;
    padding-left: 0px;
    color: gray;
}
.segmentRegist_footer li {
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
}
.segmentRegist_footer .next {
    background-color: #00bcd4;
    color: #fff;
    margin-left: 40px;
}
.segmentRegist_footer .next:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;
}
.segmentRegist_footer .back:hover {
    background-color: #eaeaea;
    cursor: pointer;
    transition: 0.3s;
}
`;

export default compose(
    pure
)(() => (
    <segment>

        <div className="segmentRegist_mainTitle">
            ユーザーセグメント新規登録    
        </div>

        <div id="segmentRegist">

            <label className="segmentRegist_Title">ユーザーセグメント名</label><br/>
            <small className="segmentRegistt_SubText">・この画面ではopenIDに紐づいたセグメント条件を登録することが可能です</small><br/>
            <small className="segmentRegistt_SubText">・セグメント条件を条件することで、セグメント分けされた配信が可能になります</small><br/>
            <small className="segmentRegistt_SubText">・openIDがリスト化されたCSVファイルをアップロードし、登録頂くことでご利用になれます</small><br/><br/>
            <input type="text" placeholder="セグメント名を入力してください" className="segmentRegist_TextField"></input><br/><br/>
        
            <label className="segmentRegist_Title">説明文</label><br/>
            <input type="text" placeholder="セグメントの内容を入力してください" className="segmentRegist_TextField"></input><br/><br/>

            <label for="name" className="segmentRegist_Title">ファイルアップロード</label><br/>
            <small className="segmentRegistt_SubText">・CSV形式でアップロードすることができます</small><br/>
            <small className="segmentRegistt_SubText">・xls形式はアップロードすることができません</small><br/>
            <small className="segmentRegistt_SubText">・会員IDの利用はできません</small><br/><br/>
            <label for="segmentRegist_file"></label>       
            <input type="file" id="segmentRegist_file"></input><br/><br/>
        
            <ul className="segmentRegist_footer">
                <Link route="/segment">
                    <li className="back">戻る</li>
                </Link>
                <Link route="/segment/confirm">
                    <li className="next">進む</li>
                </Link>
            </ul>
        
        </div>
        <style jsx>{segmentRegistStyle}</style>
    </segment>
));