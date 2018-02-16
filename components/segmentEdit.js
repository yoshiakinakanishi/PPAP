import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import segment from './segment';
import { Link } from '../routes';

const segmentEditStyle = css`
.segmentEdit_mainTitle {
    position: absolute;
    top: 90px;
    left: 300px;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 35px;
    color: #404040;
}
#segmentEdit {
    position: absolute;
    top: 160px;
    left: 300px;
    width: 950px;
    height: 350px;
    padding: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.segmentEdit_Title {
    font-size: 20px;
    font-weight: bold;
    color: #ff528f;
}
.segmentEdit_TextField {
    width: 400px;
    height: 30px;
    margin-bottom: 20px;
    font-size: 14px;
}
.segmentEdit_footer {
    width: 280px;
    height: 40px;
    margin: 40px auto 10px auto;
    padding-left: 0px;
    color: gray;
}
.segmentEdit_footer li {
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
}
.segmentEdit_footer .next {
    background-color: #00bcd4;
    color: #fff;
    margin-left: 40px;
}
.segmentEdit_footer .next:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;
}
.segmentEdit_footer .back:hover {
    background-color: #eaeaea;
    cursor: pointer;
    transition: 0.3s;
}
`;

export default compose(
    pure
)(() => (
    <segment>

        <div className="segmentEdit_mainTitle">
            ユーザーセグメント登録編集    
        </div>

        <div id="segmentEdit">

            <label className="segmentEdit_Title">ユーザーセグメントID</label><br/>
            12000156c17d6a210c4b0001<br/><br/>

            <label className="segmentEdit_Title">ユーザーセグメント名</label><br/>
            <input type="text" placeholder="" className="segmentEdit_TextField"></input><br/><br/>
        
            <label className="segmentEdit_Title">説明文</label><br/>
            <input type="text" placeholder="" className="segmentEdit_TextField"></input><br/><br/>

            <label for="name" className="segmentEdit_Title">ファイルのアップロードとダウンロード</label><br/>
     
            <label for="segmentEdit_file"></label>       
            <input type="file" id="segmentEdit_file"></input><br/><br/>

            <ul className="segmentEdit_footer">
                <Link route="/segment">
                    <li className="back">キャンセル</li>
                </Link>
                <Link route="/segment">
                    <li className="next">削除</li>
                </Link>
            </ul>
        
        </div>
        <style jsx>{segmentEditStyle}</style>
    </segment>
));