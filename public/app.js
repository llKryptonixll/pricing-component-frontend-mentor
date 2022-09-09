const toggleBtn = document.getElementById("toggle-btn");
const circle = document.getElementById("circle");

toggleBtn.addEventListener("click", () => {
    circle.classList.toggle("circle-move")

    const basicPrice = document.getElementById("basic-price");
    const professionalPrice = document.getElementById("professional-price");
    const masterPrice = document.getElementById("master-price");

    if(circle.classList.contains("circle-move")){
        basicPrice.innerHTML = 
        `
        <h1 id="basic-price" class="text-Dark-Grayish-Blue text-7xl"><span class="text-5xl relative bottom-2">$</span> 19.99</h1>
        `;

        professionalPrice.innerHTML = 
        `
        <h1 id="professional-price" class="text-7xl"><span class="text-5xl relative bottom-2">$</span> 24.99</h1>
        `;

        masterPrice.innerHTML = 
        `
        <h1 id="professional-price" class="text-7xl"><span class="text-5xl relative bottom-2">$</span> 39.99</h1>
        `;

    }
    else{
        basicPrice.innerHTML = 
        `
        <h1 id="basic-price" class="text-Dark-Grayish-Blue text-7xl"><span class="text-5xl relative bottom-2">$</span> 199.99</h1>
        `;

        professionalPrice.innerHTML = 
        `
        <h1 id="professional-price" class="text-7xl"><span class="text-5xl relative bottom-2">$</span> 249.99</h1>
        `;

        masterPrice.innerHTML = 
        `
        <h1 id="professional-price" class="text-7xl"><span class="text-5xl relative bottom-2">$</span> 399.99</h1>
        `;
    }
});