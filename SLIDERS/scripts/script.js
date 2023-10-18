const root = document.querySelector("#root");

const images = [
    "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
    "https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
    "https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg",
  ];

  const frame = document.createElement("div");
  const cards = document.createElement("div");
  const triggers = document.createElement("div");

  const left_btn = document.createElement("button");
  const right_btn = document.createElement("button");

  root.append(frame);
  frame.append(triggers, cards);
  triggers.append(left_btn, right_btn);
  
  left_btn.innerText = "<";
  right_btn.innerText = ">";

frame.classList.add("frame");
cards.classList.add("cards");

images.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url("${el}")`;
    cards.append(card);
  });

  