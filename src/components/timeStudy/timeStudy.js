export const TimeStudy = () => {
    let arrTime = [
        [
            ['28.02.2021','02:50:00'],
            ['01.03.2021','02:38:14'],
        ]
    ]

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
    while(col<2) {
        time = SEcondTime(arrTime[0][col][1]);
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

    //console.log(days+" days, "+hrs+" Hrs, "+mnts+" Minutes, "+seconds+" Seconds");



    return (
        <div>
            Время учебы: <br/>
            28.02.2021 - {arrTime[0][0][1]} <br/>
            01.03.2021 - {arrTime[0][1][1]} <br/>

            Полное время: {TimeDay}
        </div>
    );
}