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
        {id: '4', 'date': '04.03.2021', 'time': '05:48:10', 'study': 'React 49 урок'},
        {id: '5', 'date': '05.03.2021', 'time': '03:02:08', 'study': 'React 55 урок'},
        {id: '6', 'date': '06.03.2021', 'time': '04:11:51', 'study': 'React 59 урок'},
        {id: '7', 'date': '07.03.2021', 'time': '06:08:03', 'study': 'React 63 урок'},
        {id: '8', 'date': '08.03.2021', 'time': '01:41:00', 'study': 'React 65 урок'},
        {id: '9', 'date': '09.03.2021', 'time': '03:11:07', 'study': 'React 68 урок'},
        {id: '10', 'date': '10.03.2021', 'time': '03:13:04', 'study': 'React 72 урок'},
        {id: '11', 'date': '11.03.2021', 'time': '02:03:04', 'study': 'React 74 урок'},
        {id: '12', 'date': '12.03.2021', 'time': '03:29:15', 'study': 'React 77 урок'},
        {id: '13', 'date': '13.03.2021', 'time': '01:51:05', 'study': 'React 79 урок'},
        {id: '14', 'date': '14.03.2021', 'time': '02:13:25', 'study': 'React 81 урок'},
        {id: '15', 'date': '15.03.2021', 'time': '05:31:07', 'study': 'React 89 урок'},
        {id: '16', 'date': '16.03.2021', 'time': '00:00:07', 'study': 'React 89 урок'},
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

    if(String(mnts).length==1){mnts = "0" + mnts }
    if(String(hrs).length==1){hrs = "0" + hrs }

    let TimeDay = days+" дня, "+hrs+":"+mnts+":"+seconds;

    return (
        <div>
            Время учебы: <br/>

            {arrTimeVisible}


            Полное время: {TimeDay}
        </div>
    );
}