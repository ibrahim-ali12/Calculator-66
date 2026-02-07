const monthYear = document.getElementById("monthYear");
const dates = document.getElementById("dates");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentDate = new Date();

const renderCalendar = () => {
    dates.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.innerText = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
        let todayClass = "";
        if (
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            todayClass = "today";
        }

        dates.innerHTML += `<div class="${todayClass}">${day}</div>`;
    }
};

prev.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

next.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
