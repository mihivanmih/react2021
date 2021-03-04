import {NavLink} from "react-router-dom";
import style from "../dialogs/dialogs.module.css";

export const VisibleTime = (props) => {
    return (
        <div className="item">
            {props.dateState} - {props.timeState} - {props.study}
        </div>
    )
}

export const TimeStudy = () => {

    let arrTime = [
        {id: '0', 'date': '28.02.2021', 'time': '02:50:00', 'study': 'React 1 рок'},
        {id: '1', 'date': '01.03.2021', 'time': '03:45:38', 'study': 'React 25 урок'},
        {id: '2', 'date': '02.03.2021', 'time': '03:15:05', 'study': 'React 35 урок'},
        {id: '3', 'date': '03.03.2021', 'time': '06:26:28', 'study': 'React 40 урок'},
        {id: '4', 'date': '04.03.2021', 'time': '03:15:20', 'study': 'React 47 урок'},
    ]

    let arrTimeVisible = arrTime.map( item => (<VisibleTime dateState={item.date} key={item.id} timeState={item.time} study={item.study} />));


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
    while(col<arrTime.length) {
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

    if(String(mnts).length==1){
        mnts = "0" + mnts
    }

    let TimeDay = days+" дней, "+hrs+":"+mnts+":"+seconds;

    return (
        <div>
            Время учебы: <br/>

            {arrTimeVisible}


            Полное время: {TimeDay}
        </div>
    );
}