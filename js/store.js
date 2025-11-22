function handleSearch(){
    const SearchInputElement = document.getElementById("search-input-field");
    const SearchInputValue = SearchInputElement.value;
    // console.log(SearchInputValue);

    loadPhone(SearchInputValue);
}

const loadPhone = async(searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

console.log("Server Response : ", res);
    const serverData = await res.json();

displayPhone(serverData.data);
};


const displayPhone = (data) => {
    
console.log(data);
const cardContainer = document.getElementById("card-container-section");

data.forEach(phone => {
    const productCard = document.createElement('div');
    productCard.classList.add("card");

    productCard.innerHTML = `<div class="card-image">
            <img src=${phone.image} alt="card-image" />
          </div>

          <h3 class="card-title">${phone.phone_name}</h3>

          <p class="card-description">
            There are many variations of passages of available, but the majority
            have suffered
          </p>

          <div class="card-price">
            <span>$</span>
            <span id="item-price">999</span>
          </div>

          <div class="card-button">
            <button class="btn">Show Details</button>
          </div>`;

          cardContainer.appendChild(productCard);
});
};

