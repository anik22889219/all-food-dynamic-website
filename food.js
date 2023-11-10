const searchFood = () =>{
 const searchField = document.getElementById('inputField');
 const searchText = searchField.value;
// console.log(searchText);
searchField.value ='';
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
// console.log(url);
fetch(url)
.then(res => res.json())
.then(data => showfood(data.meals));

};

const showfood = foods =>{
const searchResult = document.getElementById('search-result');
searchResult.innerHTML= ``
foods.forEach(foods =>{
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
             <div class="card h-100">
                <img src="${foods.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${foods.strMeal}</h5>
                    <p class="card-text">${foods.strInstructions.slice(0,200)}</p>
                </div>
              </div>
    `
    searchResult.appendChild(div);
    // console.log(foods)
})
    
};