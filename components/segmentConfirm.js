import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const segmentConfirmStyle = css`
.segmentConfirm_mainTitle {
    position: absolute;
    top: 90px;
    left: 300px;
    font-size: 28px;
    font-weight: bold;
    color: #404040;
}
#segmentConfirm {
    position: absolute;
    top: 160px;
    left: 300px;
    width: 950px;
    height: 300px;
    padding: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.segmentConfirm_table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #cccccc;
    margin-bottom: 40px;
  }
.segmentConfirm_td {
    width: 460px;
    font-size: 12px;
    padding: 20px;
    text-align: center;
}
.segmentConfirm_tableSubheading {
    border-right: 1px solid #cccccc;
    font-weight: bold;
}
.segmentConfirm_attention {
    border-radius: 2px;
    background-color: #fff;
    width: 800px;
    height: 100px;
    font-size: 14px;
    padding-left: 20px;
    margin-bottom: 50px;
}
.segmentConfirm_attention small {
    color: #00bcd4;
    font-weight: bold;
    font-size: 16px;
}

.scheduleConfirm_footer {
    width: 280px;
    height: 40px;
    margin: 20px auto 20px auto;
    padding-left: 0px;
    color: gray;
}
.scheduleConfirm_footer li {
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
}
.scheduleConfirm_footer .next {
    background-color: #00bcd4;
    color: #fff;
    margin-left: 40px;
}

.scheduleConfirm_footer .next:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;
}
.scheduleConfirm_footer .back:hover {
    background-color: #eaeaea;
    cursor: pointer;
    transition: 0.3s;
}
`;

export default compose(
    pure
)(() => (
    <schedule>

        <div className="segmentConfirm_mainTitle">
            配信内容確認    
        </div>

        <div id="segmentConfirm">

            <table className="segmentConfirm_table">
                <tr>
                    <td className="segmentConfirm_td segmentConfirm_tableSubheading">セグメント名</td>
                    <td className="segmentConfirm_td">動画配信キャンペーン用</td>
                </tr>
                <tr>
                    <td className="segmentConfirm_td segmentConfirm_tableSubheading">説明文</td>
                    <td className="segmentConfirm_td">3ヶ月以内に動画サービスを利用したユーザーに対するセグメント条件</td>
                </tr>
                <tr>
                    <td className="segmentConfirm_td segmentConfirm_tableSubheading">アップロードファイル名</td>
                    <td className="segmentConfirm_td">--.csv</td>
                </tr>
                </table>

            <div className="segmentConfirm_attention">
                <small>配信予約をする</small><br/><br/>
                セグメント内容が予約登録されます<br/>
                左メニューのセグメントの【登録リスト】から確認ができます
            </div>

            <ul className="scheduleConfirm_footer">
                <Link route="/segment/regist">
                    <li className="back">戻る</li>
                </Link>
                <Link route="/segment">
                    <li className="next">予約する</li>
                </Link>
            </ul>
        
        </div>
        <style jsx>{segmentConfirmStyle}</style>
    </schedule>
));