// Billi's Shawarma menu (prices from billisshawarma.shop/menu)
window.MENU = [
  { name: "Sandwiches", items: [
    ["Chicken Shawarma Sandwich", 9.50], ["Meat Shawarma Sandwich", 10.99], ["Gyro Sandwich", 9.99],
    ["Taouk Sandwich", 9.99], ["Shish Kebab Sandwich", 9.99], ["Kofta Sandwich", 8.99],
    ["Falafel Sandwich", 7.99], ["Ghallaba Sandwich", 7.99], ["Veggie Ghallaba Sandwich", 7.99],
    ["Taouk, Hummus & Tabouli Sandwich", 7.99], ["Sujuk Sandwich", 6.99], ["Super Deluxe Sandwich", 6.66],
    ["Chicken Burger Sandwich", 10.99], ["Hamburger", 13.99], ["8\" Chicken Sub", 11.99], ["8\" Philly Steak & Cheese Sub", 11.99] ] },
  { name: "Entrées", items: [
    ["Mix Shawarma", 19.99], ["Chicken Shawarma", 17.99], ["Meat Shawarma", 18.99], ["Shish Taouk", 19.99],
    ["Kofta", 19.99], ["Ghallaba", 19.99], ["Veggie Ghallaba", 16.99], ["Shish Kebab", 17.99],
    ["Mix Grill", 18.99], ["Half Boneless Chicken", 16.99], ["Gyro", 15.99] ] },
  { name: "Appetizers", items: [
    ["Hummus", 5.49], ["Falafel", 8.49], ["Vegetarian Grape Leaves", 8.99], ["Veggie Combo", 12.99],
    ["Chicken Wings", 9.99], ["Mozzarella Cheese Sticks", 6.99] ] },
  { name: "Salads", items: [
    ["Fattoush Salad", 10.99], ["Tabouli Salad", 10.99], ["Lebanese Salad", 10.99], ["Greek Salad", 10.99], ["Rice Almond Salad", 10.99] ] },
  { name: "Sides", items: [
    ["Garlic Cup 8 oz", 4.49], ["Tzatziki Sauce", 4.49], ["French Fries", 4.99], ["Rice", 4.99], ["Roasted Veggies", 4.99],
    ["Soup Cup", 4.49], ["Pickles", 3.99], ["Chicken Tender", 11.99], ["Spinach Pie", 2.00], ["Fresh Pita", 2.00] ] }
];
window.renderMenu = function (el, tpl) {
  el.innerHTML = window.MENU.map(function (c) { return tpl(c, c.items.map(function (i) { return [i[0], "$" + i[1].toFixed(2)]; })); }).join("");
};
