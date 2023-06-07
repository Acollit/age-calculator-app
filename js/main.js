const btn = document.querySelector('.form__btn')
let year = new Date();
let day = new Date();
let month = new Date();
year = year.getFullYear()
month = month.getUTCMonth();
day = day.getDate();
const DescrDay = document.getElementById("DescrDay")
const DescrMonth = document.getElementById("DescrMonth")
const DescrYear = document.getElementById("DescrYear")
const DayCount = document.getElementById("DayInput");
const MounthCount = document.getElementById("MounthInput");
const YearCount = document.getElementById("YearInput");
const LabelDay = document.getElementById("LabelDay")
const LabelMounth = document.getElementById("LabelMounth")
const LabelYear = document.getElementById("LabelYear")








btn.addEventListener("click", function () {

  let DayInput = document.getElementById("DayInput").value;
  let MounthInput = document.getElementById("MounthInput").value;
  let YearInput = document.getElementById("YearInput").value;
  let YearTotal = year - YearInput - 1
  let MounthTotal = 12 + month - MounthInput
  let DayTotal = 30 + day - DayInput



  if (DayInput == 0 && MounthInput == 0 && YearInput == 0) {
    LabelDay.classList.add("form__label--error")
    LabelMounth.classList.add("form__label--error")
    LabelYear.classList.add("form__label--error")

    DayCount.classList.add("form__input--error")
    DescrDay.classList.add("form__descr--error")
    MounthCount.classList.add("form__input--error")
    DescrMonth.classList.add("form__descr--error")
    YearCount.classList.add("form__input--error")
    DescrYear.classList.add("form__descr--error")

  } else if (DayInput == 0) {
    DayCount.classList.add("form__input--error")
    DescrDay.classList.add("form__descr--error")
    LabelDay.classList.add("form__label--error")

    LabelMounth.classList.remove("form__label--error")
    LabelYear.classList.remove("form__label--error")
    DescrMonth.classList.remove("form__descr--error")
    MounthCount.classList.remove("form__input--error")
    DescrYear.classList.remove("form__descr--error")
    YearCount.classList.remove("form__input--error")
  } else if (MounthInput == 0) {
    MounthCount.classList.add("form__input--error")
    DescrMonth.classList.add("form__descr--error")
    LabelMounth.classList.add("form__label--error")


    LabelDay.classList.remove("form__label--error")
    LabelYear.classList.remove("form__label--error")
    DayCount.classList.remove("form__input--error")
    DescrDay.classList.remove("form__descr--error")
    DescrYear.classList.remove("form__descr--error")
    YearCount.classList.remove("form__input--error")
  } else if (YearInput == 0) {
    YearCount.classList.add("form__input--error")
    DescrYear.classList.add("form__descr--error")
    LabelYear.classList.add("form__label--error")

    LabelDay.classList.remove("form__label--error")
    LabelMounth.classList.remove("form__label--error")
    DescrDay.classList.remove("form__descr--error")
    DayCount.classList.remove("form__input--error")
    DescrMonth.classList.remove("form__descr--error")
    MounthCount.classList.remove("form__input--error")


  } else {
    DescrDay.classList.remove("form__descr--error")
    DayCount.classList.remove("form__input--error")
    DescrMonth.classList.remove("form__descr--error")
    MounthCount.classList.remove("form__input--error")
    DescrYear.classList.remove("form__descr--error")
    YearCount.classList.remove("form__input--error")
    LabelDay.classList.remove("form__label--error")
    LabelMounth.classList.remove("form__label--error")
    LabelYear.classList.remove("form__label--error")

    if (month == MounthInput) {
      if (day == DayInput) {
        YearTotal += 1;
        MounthTotal = 0
      }
    }


    if (DayTotal == 30) {
      MounthTotal += 1;
      DayTotal -= 30
    }



    if (DayTotal > 30) {
      DayTotal = 3 + DayInput - day


    }

    if (MounthTotal == 12) {
      MounthTotal -= 12
      YearTotal += 1;
    }

    if ((MounthInput) < month) {
      MounthTotal = MounthTotal - 12;
    }




    document.getElementById("years").innerHTML = YearTotal
    document.getElementById("months").innerHTML = MounthTotal
    document.getElementById("days").innerHTML = DayTotal
  }



})