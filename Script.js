const product = {
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
  };
  function DisPrice(price,dis){
    return price-(price *(dis/100));
  }

  const Size =product.sizes[0]
  const Price=Size.price
  const Discounted = DisPrice(Price,product.discount)
  const Options =document.getElementById('option')
  const Firstimg =document.getElementById('firstimg')
const changeimage=document.querySelectorAll('.imgchange')
const buttons = Options.getElementsByTagName('button');

document.getElementById('brand').textContent=product.brand
document.getElementById('title').textContent=product.title
document.getElementById('description').textContent=product.description
document.getElementById('dis').textContent=`${Discounted} Rs`
document.getElementById('org').textContent= `${Price} Rs`



changeimage.forEach((imgchange,index) =>{
    imgchange.src =product.images[index];
    imgchange.addEventListener('click',()=>{
       Firstimg.src=product.images[index];
       changeimage.forEach(img => img.classList.remove('active'));
       imgchange.classList.add('active');
       
    })
});

product.sizes.forEach((sizeobj,index)=>{

  const button = document.createElement('button')
  button.textContent=sizeobj.size

  if(index===0){
    button.classList.add('active')
  }
  button.onclick=function(){
    const selectedsize=sizeobj.price
    const seletedDisPrice=DisPrice(selectedsize,product.discount)

    document.getElementById('dis').textContent = `${seletedDisPrice} Rs`;
    document.getElementById('org').textContent = `${selectedsize} Rs`;

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    this.classList.add('active');
  }
  Options.appendChild(button);
});



