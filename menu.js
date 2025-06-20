
const categories = {
  Starters: [
    { item: "Crispy Calamari Rings", price: "₹320" },
    { item: "Stuffed Mushroom Bites", price: "₹280" },
    { item: "Spicy Chicken Lollipops", price: "₹340" },
    { item: "Paneer Tikka Skewers", price: "₹300" },
    { item: "Garlic Butter Prawns", price: "₹420" },
    { item: "Veggie Spring Rolls", price: "₹260" },
  ],
  Soups: [
    { item: "Creamy Tomato Basil Soup", price: "₹220" },
    { item: "Hot & Sour Chicken Soup", price: "₹200" },
    { item: "Garden Fresh Caesar Salad", price: "₹240" },
    { item: "Thai Papaya Salad", price: "₹260" },
    { item: "Broccoli Almond Soup", price: "₹180" },
  ],
  Mains: [
    { item: "Butter Chicken", price: "₹200" },
    { item: "Paneer Lababdar", price: "₹220" },
    { item: "Chicken Biryani", price: "₹180" },
    { item: "Mutton Rogan Josh", price: "₹200" },
    { item: "Veg Dum Biryani", price: "₹160" },
    { item: "Dal Makhani", price: "₹180" },
    { item: "Malai Kofta", price: "₹220" },
    { item: "Fish Curry", price: "₹240" },
  ],
  Continental: [
    { item: "Grilled Lemon Herb Chicken", price: "₹220" },
    { item: "Spaghetti Aglio e Olio", price: "₹200" },
    { item: "Chicken Stroganoff", price: "₹240" },
    { item: "Thai Green Curry with Jasmine Rice", price: "₹260" },
    { item: "Veg Lasagna", price: "₹180" },
    { item: "Fish & Chips", price: "₹400" },
  ],
  Breads: [
    { item: "Garlic Naan", price: "₹80" },
    { item: "Butter Roti", price: "₹60" },
    { item: "Plain Paratha", price: "₹70" },
    { item: "Stuffed Kulcha", price: "₹90" },
    { item: "Tandoori Missi Roti", price: "₹80" },
    { item: "Lachha Paratha", price: "₹100" },
  ],
  Desserts: [
    { item: "Chocolate Lava Cake", price: "₹180" },
    { item: "Gulab Jamun with Ice Cream", price: "₹160" },
    { item: "Tiramisu", price: "₹200" },
    { item: "Fruit Tart", price: "₹150" },
    { item: "Cheesecake", price: "₹220" },
    { item: "Mango Mousse", price: "₹180" },
  ],
  Beverages: [
    { item: "Fresh Lime Soda", price: "₹80" },
    { item: "Iced Coffee", price: "₹100" },
    { item: "Masala Chai", price: "₹50" },
    { item: "Mango Lassi", price: "₹120" },
    { item: "Virgin Mojito", price: "₹150" },
    { item: "Soft Drinks", price: "₹60" },
  ]
};

function displayMenu(categoryKey, buttonText) {
  const table = document.querySelector("#show-menu table");
  const items = categories[categoryKey];

  if (!items) {
    table.innerHTML = "<tr><td colspan='2'>No items found</td></tr>";
    return;
  }

  table.innerHTML = `
    <tr>
      <th colspan="2" style="text-align:center; font-size: 1.5em;">
        ${buttonText}
      </th>
    </tr>
  `;

  items.forEach(dish => {
    const row = document.createElement("tr");
    row.innerHTML = `<td><span>${dish.item}</span><span>${dish.price}</span></td>`;
    table.appendChild(row);
  });
}

// Button event listeners
document.querySelectorAll("#menu-button button").forEach(button => {
  button.addEventListener("click", () => {
    const categoryKey = button.id;        // Use ID for lookup in object
    const buttonText = button.textContent; // Use text for display

    document.querySelectorAll("#menu-button button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    displayMenu(categoryKey, buttonText);
  });
});

// Auto-select first button
window.addEventListener("DOMContentLoaded", () => {
  const defaultButton = document.querySelector("#menu-button button");
  if (defaultButton) defaultButton.click();
});




// Add event listeners to buttons
document.getElementById("starters").addEventListener("click", () => displayMenu("Starters"));
document.getElementById("soups").addEventListener("click", () => displayMenu("Soups"));
document.getElementById("mains").addEventListener("click", () => displayMenu("Mains"));
document.getElementById("continental").addEventListener("click", () => displayMenu("Continental"));
document.getElementById("breads").addEventListener("click", () => displayMenu("Breads"));
document.getElementById("desserts").addEventListener("click", () => displayMenu("Desserts"));
document.getElementById("beverages").addEventListener("click", () => displayMenu("Beverages"));

