// const clockDiv = document.createElement('div');
// clockDiv.setAttribute("id", "clock");
// document.body.appendChild(clockDiv);

function displayTime() {
    const date = new Date();

    const options = { month: 'long' };
    const month = date.toLocaleString('en-US', options);
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const timeMonth = `${month} ${day}`;
    const timeHour = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clockup").innerHTML = timeMonth ;
    document.getElementById("clockdown").innerHTML = timeHour;
}
setInterval(displayTime, 1000)