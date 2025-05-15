function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  document.getElementById(
    "current-time"
  ).textContent = ` ${hours} : ${minutes} `;
}
setInterval(updateTime, 1000);
console.log(updateTime());

//battary
navigator.getBattery().then(function (battery) {
  function updateBatteryStatus() {
    const percent = Math.round(battery.level * 100);
    document.getElementById("battery").textContent = ` ${percent}% 
   `;
  }

  battery.addEventListener("chargingchange", function () {
    if (battery.charging) {
      alert("Batareya zaryadga ulandi!");
    } else {
      alert("Batareya zaryadga ulinmadi!");
    }
    updateBatteryStatus();
  });

  battery.addEventListener("levelchange", updateBatteryStatus);

  updateBatteryStatus();
});

//alarm

function updateFullTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "live-time"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  // Alarm tekshirish
  const alarmValue = document.getElementById("alarm-time").value;
  const alarmAudio = document.getElementById("alarm-audio");
  const stopButton = document.getElementById("stop-alarm");

  if (alarmValue) {
    const [setHour, setMinute] = alarmValue.split(":");
    if (
      parseInt(setHour) === now.getHours() &&
      parseInt(setMinute) === now.getMinutes() &&
      now.getSeconds() === 0
    ) {
      if (alarmAudio.paused) {
        alarmAudio.play();
        alert("⏰ Alarm vaqti keldi!");
        stopButton.classList.remove("hidden"); // Stop tugmasini ko‘rsatish
      }
    }
  }
}

setInterval(updateFullTime, 1000);

document.getElementById("clock-bg").addEventListener("click", function () {
  document.getElementById("alarm-modal").classList.remove("hidden");
});

document.getElementById("close-alarm").addEventListener("click", function () {
  document.getElementById("alarm-modal").classList.add("hidden");
});

document.getElementById("set-alarm").addEventListener("click", function () {
  const alarmTime = document.getElementById("alarm-time").value;
  if (alarmTime) {
    alert(`Alarm ${alarmTime} ga o‘rnatildi.`);
  } else {
    alert("Iltimos, vaqtni tanlang.");
  }
});

// Alarmni to‘xtatish
document.getElementById("stop-alarm").addEventListener("click", function () {
  const alarmAudio = document.getElementById("alarm-audio");
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
  this.classList.add("hidden");
});
