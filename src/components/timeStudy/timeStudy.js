import {NavLink} from "react-router-dom";
import style from "../dialogs/dialogs.module.css";

export const VisibleTime = (props) => {
    return (
        <div className="item">
            {props.dateState} - {props.timeState}
        </div>
    )
}

export const TimeStudy = () => {

    let arrTime = [
        {'date': '28.02.2021', 'time': '02:50:00'},
        {'date': '01.03.2021', 'time': '03:45:38'},
        {'date': '02.03.2021', 'time': '03:15:05'},
    ]

    let arrTimeVisible = arrTime.map( item => (<VisibleTime dateState={item.date} timeState={item.time} />));


    function SEcondTime(str) {
        let massTime = str.split(':');

        let h = Number(massTime[0]);
        let m = Number(massTime[1]);
        let s = Number(massTime[2]);

        let sec = (h * 60 * 60) + m * 60 + s;
        return sec;
    }

    let col = 0;
    let time = "";
    let allTime = "";
    while(col<3) {
        time = SEcondTime(arrTime[col].time);
        allTime = Number(time) + Number(allTime);
        col++;
    }

    let seconds = parseInt(allTime, 10);

    let days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    let hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    let mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;

    let TimeDay = days+" дней, 0"+hrs+":"+mnts+":"+seconds;

    return (
        <div>
            Время учебы: <br/>

            {arrTimeVisible}


            Полное время: {TimeDay}
        </div>
    );
}