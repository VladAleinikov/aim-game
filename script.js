const screens = [...document.getElementsByClassName("screen")];
const startBtn = document.getElementById("start-game");
const timeBtns = [...document.getElementsByClassName("choose-time")];
const backBtns = [...document.getElementsByClassName("back__btn")];
const timer = document.getElementById("timer");
const field = document.getElementById("scren__field");
const colors = ['#b3c561', '#c56161', '#9561c5', '#d81515', '#86c561'];
let time = 10;
let count = 0;

backBtns.map((btn, id) => btn.addEventListener("click", e => {
      screens[id + 1].classList.remove("active");   
}))
startBtn.addEventListener("click", e => {
      screens[1].classList.add("active");
})
timeBtns.map(btn => btn.addEventListener("click", e =>{
      time = btn.getAttribute("time");
      timer.innerText = time + " сек";
      screens[2].classList.add("active");
      field.innerHTML = '';
      count = 0;
      startGame()
}))
const startGame = () => {
      let inetrval = setInterval(() => {
            time -= 1;
            timer.innerText = time + " сек";
            if (time <= 0) {
                  field.innerHTML = '';
                  finishGame();
                  clearInterval(inetrval);
            }
      }, 1000);
      createMark();
}
const createMark = () => {
      const mark = document.createElement('div');
      const radius = Math.floor(Math.random() * (15 - 7)) + 7;
      const top = Math.floor(Math.random() * 470);
      const left = Math.floor(Math.random() * 470);
      const color = colors[Math.floor(Math.random() * colors.length)];
      mark.classList.add("mark")
      mark.style.width = radius + "px";
      mark.style.height = radius + "px";
      mark.style.top = top + "px";
      mark.style.left = left + "px";
      mark.style.background = color;
      mark.addEventListener("click", e => {
            e.target.remove()
            count += 1; 
            createMark();
      })
      field.append(mark);

}
const finishGame = () => {
      const finish = document.createElement('div');
      finish.classList.add("field__finish");
      finish.innerHTML = `<h3>Игра окончена</h3> <h4>Счет: ${count}</h4>`;
      field.append(finish);
      
}