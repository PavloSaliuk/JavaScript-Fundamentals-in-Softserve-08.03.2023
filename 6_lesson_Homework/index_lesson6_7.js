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

    const timeMOnth = `${month} ${day}`;
    const timeHour = `<br> ${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerHTML = timeMOnth + timeHour;
}
setInterval(displayTime, 1000)