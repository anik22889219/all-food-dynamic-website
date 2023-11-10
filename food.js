const allFoods = ()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => showfood(data.meals))
};
allFoods();

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
    // console.log(foods);
const searchResult = document.getElementById('search-result');
searchResult.textContent= ``
if( foods== null){
    const p = document.createElement('p')
    p.innerHTML =`<p class="text-uppercase text-danger">##There Is No food of this name##</p>`
    searchResult.appendChild(p);
}
else{
    foods.forEach(foods =>{
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
                 <div onclick="carddetails(${foods.idMeal})" class="card h-100">
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
}
    
};

const carddetails = id =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCard(data.meals[0]))
    // console.log('clocked',id);
}

const showCard = card =>{
    const cardContener = document.getElementById('cardDeaitels')
    cardContener.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <img src="${card.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.strMeal}</h5>
          <p class="card-text">${card.strInstructions.slice(0,300)}</p>
          <a href="${card.strSource}" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    cardContener.appendChild(div);
    // console.log(card);
}

