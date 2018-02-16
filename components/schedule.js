import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import { Link } from '../routes';

const scheduleStyle = css`
#schedule {
    position: absolute;
    top: 100px;
    left: 300px;
    padding-top: 30px;
}
.ChangeElem_Btn_Content {
    width: 1050px;
    display: flex;
    justify-content: space-around;
}
.ChangeElem_Btn {
    padding: 13px 0px;
    background-color: #00bcd4;
    border: 1px solid  #00bcd4;
    border-bottom: 3px solid lightgray;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    flex: 1;
    font-size: 14px;
    position: relative;
    transition: all .3s ease-in-out;
    vertical-align: middle;
    text-align: center;
    opacity:0.7;
}
.is-active {
    background-color: #00bcd4;
    border: 1px solid #00bcd4;
    border-bottom: 3px solid #ff528f;
    color: #fff;
    opacity:1.0;
}
.schedule_table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 1050px;
}
.schedule_th {
    background-color: #fff;
    border-bottom: 1px solid lightgray;
    color: gray;
    font-size: 14px;
    font-weight: lighter;
    padding: 10px 10px 10px 30px;
    text-align: left;
}
.schedule_td {
    font-size: 12px;
    padding: 20px 50px 20px 30px;
    background-color: #fff;
}
.schedule_checkbox {
    padding-left: 50px;
}
.checkBtnScale {
	transform: scale(1.6);
}
.segment_statusBtn {
    width: 70px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background: navy;
    border-radius: 5px;
}
.schedule_editBtn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.schedule_editBtn:hover {
    background-color: lightgray;
    border: 1px solid lightgray;
    cursor: pointer;
    transition: 0.3s;
}
.schedule_deleteBtn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background-color: #404040;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.schedule_deleteBtn:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;  
}
`;

export default compose(
    pure
)(() => (
    <schedule>
        <div id="schedule">
            <div className="ChangeElem_Btn_Content">
                <div className="ChangeElem_Btn is-active">配信予約</div>
                <div className="ChangeElem_Btn">配信済み</div>
            </div>
            <table className="schedule_table">
                <thead>
                    <tr>
                        <th className="schedule_th">ステータス</th>
                        <th className="schedule_th"><div className="schedule_deleteBtn">削除</div></th>
                        <th className="schedule_th">配信日時</th>
                        <th className="schedule_th">タイトル</th>
                        <th className="schedule_th"></th>
                    </tr>
                </thead>
                <tr>
                    <td className="schedule_td"><div className="segment_statusBtn">成功</div></td>               
                    <td className="schedule_td schedule_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="schedule_td">2018/1/1 02:00</td>
                    <td className="schedule_td">今ならお得！電子書籍無料読み放題キャンペーン実施中！</td>
                    <td className="schedule_td">
                        <Link route="/schedule/edit">
                            <div className="schedule_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
                <tr>
                    <td className="schedule_td"><div className="segment_statusBtn">成功</div></td>               
                    <td className="schedule_td schedule_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="schedule_td">2018/1/1 01:00</td>
                    <td className="schedule_td">仮想通貨取引を始めるならDMM Bitcoin！</td>
                    <td className="schedule_td">
        <Link route="/schedule/edit">
                            <div className="schedule_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
                <tr>
                    <td className="schedule_td"><div className="segment_statusBtn">成功</div></td>               
                    <td className="schedule_td schedule_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="schedule_td">2018/1/1 01:00</td>
                    <td className="schedule_td">今ならお得！電子書籍無料読み放題キャンペーン実施中！</td>
                    <td className="schedule_td">
                        <Link route="/schedule/edit">
                            <div className="schedule_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
                <tr>
                    <td className="schedule_td"><div className="segment_statusBtn">成功</div></td>               
                    <td className="schedule_td schedule_checkbox"><input type="checkbox" className="checkBtnScale"></input></td>
                    <td className="schedule_td">2018/1/1 01:00</td>
                    <td className="schedule_td">仮想通貨取引を始めるならDMM Bitcoin！！</td>
                    <td className="schedule_td">
                        <Link route="/schedule/edit">
                            <div className="schedule_editBtn">編集</div>
                        </Link>
                    </td>     
                </tr>
            </table>
        </div>
        <style jsx>{scheduleStyle}</style>
    </schedule>
));