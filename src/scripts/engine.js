const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
  ];
  let openCards = [];
  
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }
  
  function handleClick() {
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
  
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  
    console.log(openCards);
  }
  
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
      Toastify({
        text: "Parabens tu achou um par, bora encontrar os outros.",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
      Toastify({
        text: "Poxa nao acertou, mas esta quase lá.",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu !");
    }
  }