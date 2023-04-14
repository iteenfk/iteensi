"use strict"

function displayCalendar() {
    const monthSelect = document.getElementById("monthSelect");
    const monthIndex = monthSelect.selectedIndex;
    const monthValue = monthSelect.options[monthIndex].value;



    const date = new Date();
    date.setMonth(monthValue);
    date.setDate(1);


    let calendarHTML = "<table>";
    calendarHTML +="<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>"

    while (date.getMonth() == monthValue) {
        calendarHTML +="<tr>";
        for (let i =0; i < 7;i++){
            if (date.getDay() == i){
                calendarHTML += "<td>" + date.getDate() + "</td>";
                date.setDate(date.getDate() + 1);
            } else {
                calenderHTML += "<td></td>"
            }
        }
        calendarHTML += "</tr>";
    }

    calendarHTML += "</table>";

    console.log(calendarHTML);

    document.getElementById("calendar").innerHTML = calendarHTML;
}