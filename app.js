
const menu = [
  {
    id: 1,
    title: "crust Hamburger",
    category: "breakfast",
    price: 13.99,
    img: "./images/Dish-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },

  {
    id: 2,
    title: "Prawn Pasta",
    category: "breakfast",
    price: 15.99,
    img: "./images/Dish-2-Prawn-Pasta.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 3,
    title: "bowl ice-cream",
    category: "specials",
    price: 18.99,
    img: "./images/Dish-3-Bowl-Ice-Cream.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 4,
    title: "BlueBerry Pancake",
    category: "breakfast",
    price: 13.99,
    img: "./images/Dish-4-Blueberries-Pancake.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 5,
    title: "Egg lavana",
    category: "breakfast",
    price: 19.99,
    img: "./images/Dish-6-Egg-lavana.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 6,
    title: "Pork pizza",
    category: "lunch",
    price: 24.99,
    img: "./images/Dish-7-Pork-Pizza-Lunch.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 7,
    title: "Pumpkin Soup",
    category: "lunch",
    price: 19.99,
    img: "./images/Dish-8-Pumpkin-soup-Lunch.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 8,
    title: "Curry Food",
    category: "lunch",
    price: 21.99,
    img: "./images/Dish-9-Curry-Food-Lunch.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 9,
    title: "Ramen Soup",
    category: "lunch",
    price: 24.99,
    img: "./images/Dish-10-Ramen-Soup-Lunch.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 10,
    title: "Roasted Steak",
    category: "lunch",
    price: 34.99,
    img: "./images/Dish-11-Roasted-Steak-Lunch.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 11,
    title: "Gellato Pineaple",
    category: "specials",
    price: 17.99,
    img: "./images/Dish-12-Gellato-Pineaple-specials.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 12,
    title: "Mango Nature",
    category: "specials",
    price: 15.99,
    img: "./images/Dish-13-Mango-Nature-specials.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 13,
    title: "le Tropicales",
    category: "specials",
    price: 25.99,
    img: "./images/Dish-14-Le-Tropicales-specials.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 14,
    title: "Kagyana Strapatsada",
    category: "dinner",
    price: 25.99,
    img: "./images/Dish-15-Kagyana-Strapatsada-dinner.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 15,
    title: "Salad",
    category: "dinner",
    price: 9.99,
    img: "./images/dish-16-Salad-dinner.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 16,
    title: "crust Hamburger",
    category: "breakfast",
    price: 13.99,
    img: "./images/Dish-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
];


const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");




// load Items
window.addEventListener("DOMContentLoaded", function (item) {
  showMenuItems(menu);
showMenuBtns()
 
});








function showMenuBtns(){
  // selecting our unique categories
  const categories = menu.reduce(
    function (acc, currItem) {
      if (!acc.includes(currItem.category)) {
        acc.push(currItem.category);
      }
      return acc;
    },
    ["all"]
  );
  console.log(categories);

  // returning our unique categories as buttons
  const categoryBtns = categories.map(function (category) {
    return ` <button type="button" class="btn filter-btn four" data-id="${category}">${category}</button>`;
  });

  // placing our buttons inside our button container
  btnContainer.innerHTML = categoryBtns.join("");
  const btns = document.querySelectorAll(".filter-btn");

  // filter items
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (evt) {
      const category = evt.currentTarget.dataset.id;

      const menuCategory = menu.filter(function (menuItem) {
        // so here we want to say that if the category (whether breakfast, lunch, dinner etc ) is contained in our menuItem category then we will return that menuItem
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        return showMenuItems(menu);
      } else {
        // here we are calling this function on our filtered array that has a condition in the logic body
        return showMenuItems(menuCategory);
      }
    });
  });
}


// General function
function showMenuItems(menuItems) {
  let showMenu = menuItems.map(function (item) {
    return `      <!-- item 1-->
<article class="menu-item">
<div class="menu-img">
  <img src=" ${item.img} " class="img photo" alt=" ${item.title} ">
</div>
<!-- item info -->
<div class="item-info">
  <header >
<h5> ${item.title} </h5>
<span class="price"> ${item.price} </span>
  </header>
  <p class="item-text">${item.text} </p>
</div>
</article>
          <!-- end of item 1 -->`;
  });

  sectionCenter.innerHTML = showMenu.join("");
}

