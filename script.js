const root = document.getElementById("root");

let linkCalc = (starter, finisher, link) => {
    let counter = starter;

  for (let i = 1; i <= finisher; i++) {
    if (counter <= finisher) {
      const paragraph = document.createElement("p");
      root.appendChild(paragraph);
      paragraph.textContent = link + counter;
      counter += 1;
    } else {
      break;
    }
  }
};

linkCalc(20004, 20133, "https://t.me/c/2243846176/");
