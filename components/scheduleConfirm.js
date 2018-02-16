import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const scheduleConfirmStyle = css`
.scheduleConfirm_mainTitle {
    position: absolute;
    top: 90px;
    left: 300px;
    font-size: 28px;
    font-weight: bold;
    color: #404040;
}
#scheduleConfirm {
    position: absolute;
    top: 160px;
    left: 300px;
    width: 950px;
    height: 720px;
    padding: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.scheduleConfirm_table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #cccccc;
    margin-bottom: 40px;
  }
.scheduleConfirm_td {
    width: 460px;
    font-size: 12px;
    padding: 20px;
    text-align: center;
}
.scheduleConfirm_tableSubheading {
    border-right: 1px solid #cccccc;
    font-weight: bold;
}
.scheduleConfirm_attention {
    border-radius: 2px;
    background-color: #fff;
    width: 800px;
    height: 100px;
    font-size: 14px;
    padding-left: 20px;
    margin-bottom: 10px;
}
.scheduleConfirm_attention small {
    color: #00bcd4;
    font-weight: bold;
    font-size: 16px;
}
.scheduleConfirm_footer {
    width: 280px;
    height: 40px;
    margin: 60px auto 20px auto;
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

        <div className="scheduleConfirm_mainTitle">
            配信内容確認    
        </div>

        <div id="scheduleConfirm">

            <table className="scheduleConfirm_table">
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">通知アイコンのURL指定</td>
                    <td className="scheduleConfirm_td">https://****</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">プラットフォーム</td>
                    <td className="scheduleConfirm_td">pc sp</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">セグメント条件</td>
                    <td className="scheduleConfirm_td">テンプレート名</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">タイムゾーン</td>
                    <td className="scheduleConfirm_td">(GMT+9:00) japan</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">配信日時</td>
                    <td className="scheduleConfirm_td">2018/1/1 01:00</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">配信タイトル</td>
                    <td className="scheduleConfirm_td">クレジットカード決済をしてポイントを貯めよう！</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">本文</td>
                    <td className="scheduleConfirm_td">ーーー</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">ディープリンク(PC)</td>
                    <td className="scheduleConfirm_td">https://***</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">ディープリンク(SP)</td>
                    <td className="scheduleConfirm_td">https://***</td>
                </tr>
                <tr>
                    <td className="scheduleConfirm_td scheduleConfirm_tableSubheading">TTL指定</td>
                    <td className="scheduleConfirm_td">0</td>
                </tr>
            </table>

            <div className="scheduleConfirm_attention">
                <small>配信予約をする</small><br/><br/>
                設定された配信日時になったら自動的に配信を実行します<br/>
                配信日時までであれば登録内容の変更は可能です
            </div>

            <ul className="scheduleConfirm_footer">
                <Link route="/schedule/regist">
                    <li className="back">戻る</li>
                </Link>
                <Link route="/schedule">
                    <li className="next">予約する</li>
                </Link>
            </ul>
        
        </div>
        <style jsx>{scheduleConfirmStyle}</style>
    </schedule>
));