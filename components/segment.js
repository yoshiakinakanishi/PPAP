import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const segmentStyle = css`
#segment {
    position: absolute;
    top: 100px;
    left: 300px;
    padding-top: 30px;
}
.segment_table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 1050px;
}
.segment_th {
    background-color: #00bcd4;
    border-bottom: 1px solid lightgray;
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    padding: 10px 10px 10px 30px;
    text-align: left;
}
.segment_td {
    font-size: 14px;
    padding: 20px 50px 20px 30px;
    background-color: #fff;
}
.segment_checkbox {
    padding-left: 50px;
}
.checkBtnScale {
	transform: scale(1.6);
}
.segment_editBtn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.segment_editBtn:hover {
    background-color: lightgray;
    border: 1px solid lightgray;
    cursor: pointer;
    transition: 0.3s;
}
.segment_deleteBtn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background-color: #404040;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.segment_deleteBtn:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;
}
`;

export default compose(
    pure
)(() => (
    <segment>
        <div id="segment">

            <table className="segment_table">
                <thead>
                    <tr>
                        <th className="segment_th"><div className="segment_deleteBtn">削除</div></th>
                        <th className="segment_th">ユーザーセグメント名</th>
                        <th className="segment_th">説明文</th>
                        <th className="segment_th"></th>
                    </tr>
                </thead>
                <tr>
                    <td className="segment_td segment_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="segment_td">動画キャンペーン配信用</td>
                    <td className="segment_td">直近1ヶ月に訪問したユーザーに送る</td>
                    <td className="segment_td">
                        <Link route="/segment/edit">
                            <div className="segment_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
                <tr>
                    <td className="segment_td segment_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="segment_td">動画キャンペーン配信用</td>
                    <td className="segment_td">直近1ヶ月に訪問したユーザーに送る</td>
                    <td className="segment_td">
                        <Link route="/segment/edit">
                            <div className="segment_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
                <tr>
                    <td className="segment_td segment_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="segment_td">動画キャンペーン配信用</td>
                    <td className="segment_td">直近1ヶ月に訪問したユーザーに送る</td>
                    <td className="segment_td">
                        <Link route="/segment/edit">
                            <div className="segment_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
                <tr>
                    <td className="segment_td segment_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="segment_td">動画キャンペーン配信用</td>
                    <td className="segment_td">直近1ヶ月に訪問したユーザーに送る</td>
                    <td className="segment_td">
                        <Link route="/segment/edit">
                            <div className="segment_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
            </table>
        </div>
        <style jsx>{segmentStyle}</style>
    </segment>
));