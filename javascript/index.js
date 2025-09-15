function updateTime() {
  // Los Angeles Timezone
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss:SS [<small>]A[</small>]"
    );
  }
 
  //Paris Timezone
   let parisElement = document.querySelector("#paris");
if (parisElement) {
    
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss:SS [<small>]A[</small>]"
    );
}
let tokyoElement = document.querySelector("#tokyo");
if (parisElement) {
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss:SS [<small>]A[</small>]"
  );
}
 
}
updateTime();
setInterval(updateTime, 1);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("hh:mm:ss:SS")}
          <small>${cityTime.format("A")}</small></div>
        </div> 
          <a href="/">All cities</a>
          `;

      
}

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
