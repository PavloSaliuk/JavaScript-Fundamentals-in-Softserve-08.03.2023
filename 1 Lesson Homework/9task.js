function findCompartment() {
    let placeNumber = document.getElementById("placeNumber").value;

    let compartmentNumber = Math.ceil(placeNumber / 6);

    let seatType = "";
    if (placeNumber < 1 || placeNumber > 54) {
        return alert("Не правильно вказане місце, місце може бути від 1 до 54")
    }
    if (placeNumber % 2 == 0) {
        seatType += "верхнє";
    } else {
        seatType += "нижнє";
    }

    if (placeNumber % 6 == 1 || placeNumber % 6 == 2) {
        seatType += " бічне";
    } else {
        seatType += " не бічне";
    }

    document.getElementById("result").innerHTML = "Номер купе: " + compartmentNumber + "<br>" + "Тип місця: " + seatType;
}