// Get top rated product

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        const topRated = [...data]
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 3);

        const topRateContainer = document.getElementById('top-product-container');
        console.log(topRateContainer);
        topRated.forEach(product => {
            const card = document.createElement('div');
            card.className = `
             bg-white rounded-xl shadow-md
            hover:shadow-xl transition duration-300
        `;
         
            card.innerHTML = `
      <div class=" bg-slate-300 w-full">
        <img src="${product.image}" 
             class="h-52 mx-auto object-contain p-5 mb-5 " />
     </div>

    <div class="p-5">

       <div class=" flex justify-between mb-2">
         <span class="rounded-full text-indigo-400 text-sm bg-indigo-100 p-1">${product.category}</span>
         <p class="text-gray-500 text-sm mb-3">
          ⭐ ${product.rating.rate} 
          (${product.rating.count} reviews)
        </p>
       </div>

         <h3 class="font-semibold text-lg mb-2 line-clamp-2">
          ${product.title}
        </h3>

          <span class="text-xl font-bold ">
            $${product.price}
          </span>

        <div class="flex justify-between items-center">
        
        <button class="border px-10 py-2 rounded-lg mt-2">
          <i class="fa-regular fa-eye"></i>
            Details
          </button>

          <button class="bg-indigo-600 text-white px-10 py-2 rounded-lg ">
            <i class="fa-solid fa-cart-shopping"></i>
            Add
          </button>
        </div>
    </div>
      `;

            topRateContainer.appendChild(card);
        })

    })


// Show product category

const loadCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => displyCategory(data))
}

loadCategory();


//show all product
const loadAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => displayProducts(data))
}

loadAllProducts();

// show category wise product
const loadProductsbyC = (category) => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => displayProducts(data))

}

//set active class on products category
const setActiveButton = (clickedBtn) => {
    document.querySelectorAll("#category-container button")
        .forEach(btn => btn.classList.remove("btn-primary"));

    clickedBtn.classList.add("btn-primary");
}

const displyCategory = (pCategories) => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";

    //  Create All Button
    const allBtn = document.createElement('button');
    allBtn.innerText = "All";
    allBtn.className = "btn rounded-full btn-primary"; // default active

    allBtn.addEventListener("click", () => {
        loadAllProducts();
        setActiveButton(allBtn);
    });

    categoryContainer.appendChild(allBtn);

    //  Dynamic Category Buttons
    pCategories.forEach(category => {

        const button = document.createElement('button');
        button.innerText = category;
        button.className = "btn btn-soft rounded-full";

        button.addEventListener("click", () => {
            loadProductsbyC(category);
            setActiveButton(button);
        });

        categoryContainer.appendChild(button);
    });
}


//Moda open....

const loadSingleProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => showModal(data))
}




const displayProducts = (products) => {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement('div');
        div.classList = "card bg-base-100 shadow-xl p-4";

        div.innerHTML =  `
      <div class=" bg-slate-300 w-full">
        <img src="${product.image}" 
             class="h-52 mx-auto object-contain p-5 mb-5 " />
     </div>

    <div class="p-5">

       <div class=" flex justify-between mb-2">
         <span class="rounded-full text-indigo-400 text-sm bg-indigo-100 p-1">${product.category}</span>
         <p class="text-gray-500 text-sm mb-3">
          ⭐ ${product.rating.rate} 
          (${product.rating.count} reviews)
        </p>
       </div>

         <h3 class="font-semibold text-lg mb-2 line-clamp-2">
          ${product.title}
        </h3>

          <span class="text-xl font-bold ">
            $${product.price}
          </span>

        <div class="flex justify-between items-center">
        
        <button  onclick="loadSingleProduct(${product.id})" class="border px-10 py-2 rounded-lg mt-2">
          <i class="fa-regular fa-eye"></i>
            Details
          </button>

          <button class="bg-indigo-600 text-white px-10 py-2 rounded-lg ">
            <i class="fa-solid fa-cart-shopping"></i>
            Add
          </button>
        </div>
    </div>
      `;

        productContainer.appendChild(div);
    })
}


const showModal = (product) => {

    console.log(product)

    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = `

        <h2 class="text-2xl font-bold mb-3">${product.title}</h2>

        <p class="mb-4 text-gray-600">
            ${product.description}
        </p>

        <p class="text-lg font-semibold mb-2">
            Price: $${product.price}
        </p>

        <p class="mb-4">
            ⭐ ${product.rating.rate} (${product.rating.count} reviews)
        </p>

        <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg">
            Add to Cart
        </button>
    `;

    document.getElementById("productModal").showModal();
}


