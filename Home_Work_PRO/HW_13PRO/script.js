// const url = "https://dummyjson.com/products";

// // Функция для получения данных от сервера
// async function fetchData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// // Функция для рендеринга данных на странице
// function renderData(data) {
//   const container = document.getElementById("container");

// data.forEach((item) => {
//     const div = document.createElement("div");
//     div.classList.add("product");

// // Изображение товара
// const img = document.createElement("img");
// img.src = item.image;
// div.appendChild(img);

// // Имя продукта
// const name = document.createElement("p");
// name.textContent = item.name;
// div.appendChild(name);

// // Стоимость продукта
// const price = document.createElement("p");
// price.textContent = `Price: $${item.price}`;
// div.appendChild(price);

// // Рейтинг продукта
// const rating = document.createElement("div");
// rating.classList.add("rating");
// rating.innerHTML = generateRating(item.rating);
// div.appendChild(rating);

// container.appendChild(div);
// });
// }

// // Функция для генерации разметки рейтинга
// function generateRating(rating) {
//   const roundedRating = Math.round(rating);

// let markup = "";
//   for (let i = 0; i < 5; i++) {
//     if (i < roundedRating) {
//       markup += '<span class="fa fa-star active"></span>';
//     } else {
//       markup += '<span class="fa fa-star"></span>';
//     }
//   }

// return markup;
// }

// // Вызов функций
// fetchData(url)
//   .then((data) => renderData(data))
//   .catch((error) => console.log(error));




  // -------------------------

  async function fetchProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      render(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  function render(products) {
    const container = document.querySelector(".container");
  
  for (const product of products) {
      const div = document.createElement("div");
      div.classList.add("product");
  
  const image = document.createElement("img");
  image.src = product.image;
  div.appendChild(image);
  
  const name = document.createElement("p");
  name.textContent = product.name;
  div.appendChild(name);
  
  const price = document.createElement("p");
  price.textContent = "Price: $" + product.price;
  div.appendChild(price);
  
  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("rating");
  ratingDiv.innerHTML = getRatingHTML(Math.round(product.rating));
  div.appendChild(ratingDiv);
  
  container.appendChild(div);
  }
  }
  
  function getRatingHTML(rating) {
    let starsHTML = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starsHTML += '<span class="fa fa-star active"></span>';
      } else {
        starsHTML += '<span class="fa fa-star"></span>';
      }
    }
    return starsHTML;
  }
  
  fetchProducts();