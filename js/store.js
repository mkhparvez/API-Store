function handleSearch(){
    const SearchInputElement = document.getElementById("search-input-field");
    const SearchInputValue = SearchInputElement.value;
    console.log(SearchInputValue);

    loadPhone(SearchInputValue);
}

const loadPhone = async(searchText) => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=samsung");

console.log("Server Response : ", res);
    const data = await res.json();

console.log(data);
}

