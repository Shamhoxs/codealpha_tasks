function buttonclick() {
    var container = document.getElementById("container");
    var label = document.getElementById("output");
    container.style.width = "25vw";
    container.style.height = "60vh";
    container.style.flexWrap = "wrap";
    container.style.margin = "auto";
    label.style.fontFamily = "Roboto";

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    leapChecker(currentYear);

    var birthInput = document.getElementById("inputfield");
    var birthDateValue = birthInput.value;
    var birthDate = new Date(birthDateValue);

    var birthYear = birthDate.getFullYear();
    var birthMonth = birthDate.getMonth() + 1;
    var birthDay = birthDate.getDate();

    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        label.textContent = "Please select Date of Birth to find the age";
        return;
    }

    if ((birthYear === currentYear && birthMonth === currentMonth && birthDay > currentDay) ||
        birthYear > currentYear ||
        (birthYear === currentYear && birthMonth > currentMonth)) {
        label.textContent = "Please enter a past date";
        return;
    }

    var calculatedYear = currentYear - birthYear;
    var calculatedMonth;
    var calculatedDay;

    if (currentMonth >= birthMonth) {
        calculatedMonth = currentMonth - birthMonth;
    } else {
        calculatedYear--;
        calculatedMonth = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        calculatedDay = currentDay - birthDay;
    } else {
        calculatedMonth--;
        calculatedDay = months[currentMonth - 2] + currentDay - birthDay;
        if (calculatedMonth < 0) {
            calculatedMonth = 11;
            calculatedYear--;
        }
    }

    label.textContent = "Age is: " + calculatedYear + " years " + calculatedMonth + " months " + calculatedDay + " days old";

    function leapChecker(year) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            months[1] = 29;
        } else {
            months[1] = 28;
        }
    }
}
