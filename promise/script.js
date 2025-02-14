document.getElementById("messageState").addEventListener("change", function () {
    const message = document.querySelector(".message");
    const heart = document.querySelector(".heart");
    const container = document.querySelector(".container");
  
    message.classList.remove("openNor", "closeNor");
  
    if (this.checked) {
      message.classList.remove("closed", "no-anim");
      message.classList.add("openNor");
      heart.classList.remove("closeHer", "openedHer");
      heart.classList.add("openHer");
      container.style.transition = "background-color 2s";
      container.style.backgroundColor = "#f48fb1";
      console.log("Abrindo");
    } else {
      message.classList.remove("no-anim");
      message.classList.add("closeNor");
      heart.classList.remove("openHer", "openedHer");
      heart.classList.add("closeHer");
      container.style.transition = "background-color 2s";
      container.style.backgroundColor = "#fce4ec";
      console.log("fechando");
    }
  });
  
  document.querySelector(".message").addEventListener("animationend", function () {
    console.log("Animation End");
    if (this.classList.contains("closeNor")) this.classList.add("closed");
    this.classList.remove("openNor", "closeNor");
    this.classList.add("no-anim");
  });
  
  document.querySelector(".heart").addEventListener("animationend", function () {
    console.log("Animation End");
    if (!this.classList.contains("closeHer")) {
      this.classList.add("openedHer", "beating");
    } else {
      this.classList.add("no-anim");
      this.classList.remove("beating");
    }
    this.classList.remove("openHer", "closeHer");
  });
  