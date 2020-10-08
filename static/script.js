function hideCurtain() {
  const curtain = document.getElementById("curtain");
  let time = 100;
  setInterval(() => {
    const height = curtain.style.height;
    if (height !== "0vh") {
      time--;
      curtain.style.height = time + "vh";
    }
  }, 5);
}

document.addEventListener("DOMContentLoaded", hideCurtain());
