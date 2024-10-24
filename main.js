let daqiqa = document.getElementById("daqiqa");
let sekund = document.getElementById("sekund");
let milsekund = document.getElementById("milsekund");

// buttonlar
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let start = document.getElementById("start");

///////////////////
let interId;
let daqiqaSoni = 0;
let sekundSoni = 0;
let milsekundSoni = 0;
///////////////////
clickStart = 0;
clickStop = 0;
start.addEventListener("click", () => {
  clickStart++;
  clickStop = 0;
  if (clickStart === 1) {
    interId = setInterval(() => {
      milsekundSoni++;
      milsekund.innerText++;
      if (milsekundSoni === 100) {
        sekundSoni++;
        sekund.innerText++;
        milsekundSoni = 0;
        milsekund.innerText = 0;
      }
      if (sekundSoni === 60) {
        daqiqaSoni++;
        daqiqa.innerText++;
        sekundSoni = 0;
        sekund.innerText = 0;
      }
    }, 10);
  }
});

stop.addEventListener("click", () => {
  clickStop++;
  clickStart = 0;
  reset.addEventListener("click", () => {
    if (clickStop === 1) {
      clearInterval(interId);
      daqiqa.innerText = "00";
      daqiqaSoni = 0;
      sekund.innerText = "00";
      sekundSoni = 0;
      milsekundSoni = 0;
      milsekund.innerText = "00";
    }
  });
  clearInterval(interId);
  clickStart = 0;
});
