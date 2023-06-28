
async function getAll() {
    return fetch('https://fakestoreapi.com/products?id=5')
        .then(res => res.json())
        .then(data => console.log(data));
}

async function fetchdata() {
    const loaddata = await getAll();

    console.log(loaddata);
    const products = document.getElementById("loaddata")
    loaddata.forEach(element => {
        products.innerHTML +=
            `
        <div class="im">
            <h3>${element.title}</h3>
            <img src="${element.image}" alt="">
            <p>${element.rating.count} cái</p>
            <p>${element.rating.rate}<i class="fa-solid fa-star"></i></p>
            <p>${element.price}$</p>
            <p>${element.description}</p>
            <p onclick="details(${element.id})">detail</p>
        </div>
        `
    });
}

function details(id) {
    window.location.assign(`details.html?id=${id}`)
}