const imgs=document.querySelectorAll('.img a');
let imgId =1;

const ImgDiv = document.querySelectorAll('.img');
imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgId=img.dataset.id;

        ImgDiv.forEach((img)=>{
            img.classList.remove('active');
        });
        img.parentElement.classList.add('active');
        moveImg();
    });
});

function moveImg(){

    const imgWidth = document.querySelector('.main-img img:first-child').clientWidth;
    let Width = (imgId-1)*imgWidth;
    const imgFrame =document.querySelector('.main-img');
    imgFrame.style.transform=`translateX(${-Width}px)`;
}

const minusBtn = document.querySelector('.sub');
const plusBtn =document.querySelector('.add');
const qtyTxt =document.querySelector('.qty');


minusBtn.addEventListener('click',()=>{
    let qty= parseInt(qtyTxt.value);
    if(qty>0){
        qty--;
        qtyTxt.value=qty;
    }
});
plusBtn.addEventListener('click',()=>{
    let qty = parseInt(qtyTxt.value);
    if(qty>=0 && qty<5){
        qty++;
        qtyTxt.value=qty;
    }
});