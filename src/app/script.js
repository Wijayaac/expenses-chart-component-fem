import data from "../data/data.json";

class Chart {
  constructor() {
    this.barElms = document.querySelectorAll(".chart__day-bar");
    this.init();
  }
  getDayName(dateStr, locale) {
    return dateStr.toLocaleDateString(locale, { weekday: "short" });
  }
  today(indexDay) {
    let today = new Date(),
      dayOfTheWeek = this.getDayName(today, "en-US").toLowerCase();
    if (dayOfTheWeek == indexDay) {
      return true;
    }
    return false;
  }
  init() {
    this.barElms.forEach((item, index) => {
      let popOverContent = item.parentNode.querySelector(".chart__day-popover");
      popOverContent.innerText = `$${data[index].amount}`;
      console.log(data[index].amount, popOverContent);
      item.style.height = `${data[index].amount * 1.5}%`;
      if (this.today(data[index].day)) {
        item.classList.add("chart__day-bar--current");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Chart();
});
