// Get top raited product

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        const topRated = [...data]
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 3);

        const topRateContainer = document.getElementById('topProductContainer');

        topRated.forEach(product => {
            const card = document.createElement('div');
            card.className = `
             bg-white rounded-xl shadow-md
            hover:shadow-xl transition duration-300
        `;
            console.log(product)
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

          <span class="text-xl font-bold text-blue-600">
            $${product.price}
          </span>

        <div class="flex justify-between items-center">
        
        <button class="border px-10 py-2 rounded-lg mt-2">
          <i class="fa-regular fa-eye"></i>
            Details
          </button>

          <button class="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700">
            <i class="fa-solid fa-cart-shopping"></i>
            Add
          </button>
        </div>
    </div>
      `;

            topRateContainer.appendChild(card);
        })

    })