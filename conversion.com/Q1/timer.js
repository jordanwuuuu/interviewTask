function countdownTimer() {
  let time = 120;
  let count = setInterval(countdown, 1000);
  
  function countdown() {
    let min = Math.floor(time / 60);
    let sec = time % 60;count
    sec = sec < 10 ? "0" + sec : sec;
    console.log(`${min}:${sec}`);
    document.getElementById("timer").textContent = `${min}:${sec}`;
    time--;
    min == 0 && sec == 0 ? clearInterval(count) : count;
  }
}
countdownTimer();
