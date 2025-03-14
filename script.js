
const categories = ['Lunch', 'Dinner', 'Sushi', 'Appetizers', 'Desserts'];

document.getElementById('specialsTile').addEventListener('click', function(event) {
    event.preventDefault(); 
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    alert(`You are being redirected to the "${randomCategory}" category!`);


});
