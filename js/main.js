var d = document;

const cartButton = d.querySelector("#cart-button");
const modal = d.querySelector(".modal");
const close = d.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

function st() { 
    var c = 0;
    if ((d.form1.elements[0]).checked)
        c = (Number(d.form1.elements[0].value) * d.form1.itemcount.value).toString();
    if ((d.form1.elements[1]).checked)
        c = (Number(d.form1.elements[1].value) * d.form1.itemcount.value).toString();
    if ((d.form1.elements[2]).checked)
        c = (Number(d.form1.elements[2].value) * d.form1.itemcount.value).toString();
    if ((d.form1.elements[3]).checked)
        c = (Number(d.form1.elements[3].value) * d.form1.itemcount.value).toString();
    form1.cc.value = c +" руб."
}

var i=0;
var image=document.getElementById("image");
        // Добавте свои картинки через запятую
var imgs=new Array("img/слайд1.jpg","img/слайд2.jpg","img/слайд3.jpg", "img/слайд4.jpg");
function imgv() {   
    if (i<3) {
        i++;
        image.src=imgs[i];
    }
}
function imgn() {   
    if (i>0) {
        i--;
        image.src=imgs[i];
    }
}

