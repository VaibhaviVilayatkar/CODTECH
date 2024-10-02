const recipeForm = document.getElementById('form');
const recipeList = document.getElementById('recipes');
const addRecipeButton = document.getElementById('add-recipe-btn');
const recipeFormSection = document.getElementById('recipe-form');


addRecipeButton.addEventListener('click', () => {
    recipeFormSection.classList.toggle('hidden');
});


recipeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const title = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;

    
    const recipeItem = document.createElement('li');
    recipeItem.innerHTML = `
        <strong>${title}</strong><br>
        <em>Ingredients:</em> ${ingredients}<br>
        <em>Instructions:</em> ${instructions}
    `;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    
    deleteButton.addEventListener('click', function () {
        recipeList.removeChild(recipeItem);
    });

    recipeItem.appendChild(deleteButton);
    recipeList.appendChild(recipeItem);

    
    recipeForm.reset();
    recipeFormSection.classList.add('hidden'); 
});
