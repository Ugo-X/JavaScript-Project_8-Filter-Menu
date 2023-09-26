
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
    img: "./images/dish-16-Salad-dinner.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
  {
    id: 1,
    title: "crust Hamburger",
    category: "breakfast",
    img: "./images/Dish-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora eveniet, rem asperiores eligendi magnam recusandae autem unde a suscipit.",
  },
];


// we select the secction center because the section center is the parent div for all our items that we are going to dynamically access from our above menu array and fill up our page.
const sectionCenter = document.querySelector('.section-center')

// when our page loads we will want to access all our items and use them to populate our page
window.addEventListener('DOMContentLoaded', function ()  {})