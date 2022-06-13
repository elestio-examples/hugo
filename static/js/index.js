"use strict";

document.getElementById("host").innerHTML = window.location.hostname;

const getLocation = async () => {
  const res = await fetch("https://ipwhois.app/json/");
  let response = await res.json();
  document.getElementById("yourIP").innerHTML = response.ip;
  document.getElementById("location").innerHTML =
    response.country_code + "," + response.city;
};

const getLatency = () => {
  var started = new Date().getTime();
  var url = "/js/data.json?t=" + +new Date();
  fetch(url)
    .then(function (response) {
      var ended = new Date().getTime();
      var milliseconds = ended - started;
      document.getElementById("latency").innerHTML = milliseconds + " ms";
    })
    .catch(function (error) {
      document.getElementById("latency").innerHTML = "? ms";
    });
};

const Location = getLocation();
const Latency = window.setInterval(getLatency, 1000);
