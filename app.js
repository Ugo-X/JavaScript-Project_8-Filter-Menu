
// normally you would get this data by setting up an ajax request(getting it from an external API), so you wont have to hard-code all these values
// menu items
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
    category: "Lunch",
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


// we select the section center because the section center is the parent div for all our items that we are going to dynamically access from our above menu array and fill up our page. So basically, after accessing our array anc getting this object we want to place them somewher, that is where our section center div comes in.
const sectionCenter = document.querySelector(".section-center");

const btns = document.querySelectorAll(".filter-btn");

// when our page loads we will want to access all our items and use them to populate our page
// # Map Function >>> always returns an array, always depends on the parent or original array and cannot change the array length like the filter method.
// so yeah you can modify the content of the original array.
// also with the map it effects changes to all members of the array.

// load Items
window.addEventListener("DOMContentLoaded", function (item) {
  showMenuItems(menu);

  // here we want to return buttons for each category created and we want to only return the unique categories such as breakfast, lunch, dinner etc. Also if you notice we start with an initial value of an array and all string since it is not part of our categories but we want to be able to access all our menuitems
const categories = menu.reduce(function(){},[])

});

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
} // up above in the map method we returned the changed structure of the individual item, then we accessed each item data from our array and joined it, placing each menu item inside the section center

// the logic is that when we click a certain button we want to diplay a certain category, whether all of them, breakfast, lunch, dinner or our special category.






















