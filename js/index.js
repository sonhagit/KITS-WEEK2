async function getAll() {
    return fetch('https://fakestoreapi.com/products?limit=3')
        .then(res => res.json());
}
async function fetchData() {
    const products = await getAll();
    console.log(products);

    const productsDiv = document.getElementById("products")
    for (let item of products) {
        productsDiv.innerHTML += `
      <div class="im">

      <h3>${item.title}</h3>
      <img src = "${item.image} " </br></br>
      <b>Price: ${item.price}</b>
      

      <p onclick = "details(${item.id})">Xem thêm</p>

      </div>
      `;

    }
}

function details(id) {
    window.location.assign(`product-details.html?id=${id}`)
}

async function getDetail() {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
}