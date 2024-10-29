const products = [
  {
    title: 'Custom Fit Polo Bear Oxford Shirt',
    brand: 'POLO RALPH',
    description: 'This is a custom fit polo bear',
    discount: 50, 
    images: ['1 Shirt.jpg', '2 Shirt.jpg', '3 Shirt.png'],
    sizes: [
      { size: 'S', price: 1600 },
      { size: 'M', price: 2000 },
      { size: 'L', price: 2200 },
      { size: 'XL', price: 2700 },
    ]
  },
  {
    title: 'Classic Fit Polo T-Shirt',
    brand: 'LACOSTE',
    description: 'A classic fit with a subtle logo',
    discount: 20,
    images: ['6 shirt.jpg', '5 shirt.jpg', '4 shirt.jpg'],
    sizes: [
      { size: 'S', price: 1800 },
      { size: 'M', price: 2100 },
      { size: 'L', price: 2400 },
      { size: 'XL', price: 2800 },
    ]
  },
  {
    title: 'Casual Fit Hoodie',
    brand: 'NIKE',
    description: 'Comfortable hoodie for everyday wear',
    discount: 15,
    images: ['7 shirt.jpg', '8 shirt.jpg', '3 Shirt.png'],
    sizes: [
      { size: 'S', price: 3000 },
      { size: 'M', price: 3500 },
      { size: 'L', price: 4000 },
      { size: 'XL', price: 4500 },
    ]
  }
];



function DisPrice(price, discount) {
  return price - (price * (discount / 100));
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('maindiv');

  card.innerHTML = `
    <div class="mainimgdiv">
        <div><img class="imgchange active" src="${product.images[0]}" alt="img1"></div>
        <div><img class="imgchange" src="${product.images[1]}" alt="img2"></div>
        <div><img class="imgchange" src="${product.images[2]}" alt="img3"></div>
    </div>
    <div class="firstimgdiv">
        <img id="firstimg" src="${product.images[0]}" alt="firstimg">
    </div>
    <div class="innerdiv">
        <h1 id="brand">${product.brand}</h1>
        <h2 id="title">${product.title}</h2>
        <p id="description">${product.description}</p>
        <div class="price">
            <span id="dis" class="dis">Rs${DisPrice(product.sizes[0].price, product.discount)} (${product.discount}%)</span><br>
            <span id="org" class="org">Rs${product.sizes[0].price}</span>
        </div>
        <div class="sizes">
            <label>Choose</label>
            <div id="option"></div>
        </div>
        <button id="bag">Add to Bag</button>
    </div>
  `;

  const imgElements = card.querySelectorAll('.imgchange');
  const firstImg = card.querySelector('#firstimg');
  imgElements.forEach((img, index) => {
    img.src = `${product.images[index]}`;
    img.addEventListener('click', () => {
      firstImg.src = `${product.images[index]}`;
      imgElements.forEach(img => img.classList.remove('active'));
      img.classList.add('active');
    });
  });

  const optionContainer = card.querySelector('#option');
  product.sizes.forEach((sized, index) => {
    const sizeButton = document.createElement('button');
    sizeButton.textContent = sized.size;

    if (index === 0) {
      sizeButton.classList.add('active');
    }

    sizeButton.onclick = function() {
      const selectedSizePrice = sized.price;
      const selectedDiscountedPrice = DisPrice(selectedSizePrice, product.discount);

      card.querySelector('#dis').textContent = `Rs ${selectedDiscountedPrice.toFixed(2)} (${product.discount}%)`;
      card.querySelector('#org').textContent = `Rs ${selectedSizePrice.toFixed(2)}`;

      Array.from(optionContainer.getElementsByTagName('button')).forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    };
    optionContainer.appendChild(sizeButton);
  });

  return card;
}


function renderProducts() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach(product => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

renderProducts();

document.getElementById('add-product-btn').addEventListener('click', () => {
  document.getElementById('product-form').style.display = 'block';
});

const sizes = []; 

document.getElementById('add-size-btn').addEventListener('click', () => {
  const sizeInput = document.querySelector('#sizes-container input[type="text"]');
  const priceInput = document.querySelector('#sizes-container input[type="number"]');

  if (sizeInput.value && priceInput.value) {
    sizes.push({ size: sizeInput.value, price: parseFloat(priceInput.value) });
    
    const sizeList = document.getElementById('size-list');
    const sizeEntry = document.createElement('div');
    sizeEntry.textContent = `${sizeInput.value}: ${priceInput.value} Rs`;
    sizeList.appendChild(sizeEntry);
    sizeInput.value = '';
    priceInput.value = '';
  } 
});

document.getElementById('submit-product-btn').addEventListener('click', () => {
  const title = document.getElementById('product-title').value;
  const brand = document.getElementById('product-brand').value;
  const description = document.getElementById('product-description').value;
  const discount = parseFloat(document.getElementById('product-discount').value);
  const imagesInput = document.getElementById('product-images');
  const images = Array.from(imagesInput.files).map(file => file.name); 

  if (title && brand && description && !isNaN(discount) && sizes.length > 0) {
    const newProduct = {
      title,
      brand,
      description,
      discount,
      images,
      sizes
    };

    products.push(newProduct);
    renderProducts(); 
    document.getElementById('size-list').innerHTML = ''; 
    document.getElementById('product-form').style.display = 'none'; 
  } 
});




