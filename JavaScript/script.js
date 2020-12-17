"use strict";

const texts = document.getElementById("middle-article-divs");
let lis = texts.children;
lis = [...lis];
//text.forEach(i=>i.style.display="none");

lis.forEach((lisItem, index) => {
    if (index !== 0) {
        lisItem.style.display = 'none';
    }
});
const buttons = document.getElementById("middle-article-links");
let btn = buttons.children;
btn = [...btn];
btn[0].classList.add("active");

let indexofbutton = null;
buttons.addEventListener("click", event => {
    let pressedbutton = event.target;
    indexofbutton = btn.indexOf(pressedbutton);
    for(let i=0;i<lis.length;i++)
    {
        if(indexofbutton===i) {
            lis[i].style.display="flex";
            btn[i].classList.add("active");
        }
        else {
            lis[i].style.display="none";
            btn[i].classList.remove("active");
        }
    }
});

const _CATEGORIES = Object.freeze([
    'web design',
    'graphic design',
    'landing pages',
    'wordpress'
]);
let hide=document.getElementById("hide");
let web=[],graphic=[],landing=[],wordpress=[];
let allImgs=JSON.parse(localStorage.getItem("img"))||[
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design1.jpg",
        title: "Graphic design 1",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design2.jpg",
        title: "Graphic design 2",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design3.jpg",
        title: "Graphic design 3",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design4.jpg",
        title: "Graphic design 4",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design5.jpg",
        title: "Graphic design 5",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design6.jpg",
        title: "Graphic design 6",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design7.jpg",
        title: "Graphic design 7",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design8.jpg",
        title: "Graphic design 8",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design9.jpg",
        title: "Graphic design 9",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design10.jpg",
        title: "Graphic design 10",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design11.jpg",
        title: "Graphic design 11",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/graphic-design/graphic-design12.jpg",
        title: "Graphic design 12",
        category: _CATEGORIES[1]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page1.jpg",
        title: "Landing page 1",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page2.jpg",
        title: "Landing page 2",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page3.jpg",
        title: "Landing page 3",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page4.jpg",
        title: "Landing page 4",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page5.jpg",
        title: "Landing page 5",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page6.jpg",
        title: "Landing page 6",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/landing-page/landing-page7.jpg",
        title: "Landing page 7",
        category: _CATEGORIES[2]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design1.jpg",
        title: "Web design 1",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design2.jpg",
        title: "Web design 2",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design3.jpg",
        title: "Web design 3",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design4.jpg",
        title: "Web design 4",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design5.jpg",
        title: "Web design 5",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design6.jpg",
        title: "Web design 6",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/web-design/web-design7.jpg",
        title: "Web design 7",
        category: _CATEGORIES[0]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress1.jpg",
        title: "Web design 1",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress2.jpg",
        title: "Web design 2",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress3.jpg",
        title: "Web design 3",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress4.jpg",
        title: "Web design 4",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress5.jpg",
        title: "Web design 5",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress6.jpg",
        title: "Web design 6",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress7.jpg",
        title: "Web design 7",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress8.jpg",
        title: "Web design 8",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress9.jpg",
        title: "Web design 9",
        category: _CATEGORIES[3]
    },
    {
        imgSrc: "Stylesheet/images/wordpress/wordpress10.jpg",
        title: "Web design 10",
        category: _CATEGORIES[3]
    }
];
allImgs.forEach(item=>{
    if(item.category==="web design")
        web.push(item);
    else if(item.category==="graphic design")
        graphic.push(item);
    else if(item.category==="landing pages")
        landing.push(item);
    else wordpress.push(item);
});
function getRandomImg() {
    let selectedImg=JSON.parse(localStorage.getItem("selectedImg"))||[];
    if (allImgs.length > 0) {
        selectedImg.push(
            allImgs.splice(
                Math.floor(Math.random() * allImgs.length), 1)[0]);
        return selectedImg[selectedImg.length - 1];
    }
    localStorage.setItem('selectedImg', JSON.stringify(selectedImg));
    localStorage.setItem('allImgs', JSON.stringify(allImgs));
}
let imgSource;
let imgs=document.querySelectorAll(".imgs");
imgs=[...imgs];

function Hover() {
    return {
        big:document.createElement("h2"),
        small:document.createElement("h3")
    }
}

function createElement(item){
    imgSource=getRandomImg().imgSrc;
    let imgdiv=document.createElement("div");
    imgdiv.classList.add("imgs-js");
    imgdiv.style.backgroundImage=`url(${imgSource})`;
    let img=new Hover();
    img.big.setAttribute("id","big");
    img.small.setAttribute("id","small");
    imgdiv.append(img.big);
    imgdiv.append(img.small);
    item.append(imgdiv);
}
imgs.forEach(event=>
{
    let images=event.children;
    images=[...images];
    images.forEach(item=>createElement(item));
});

let gallery=document.getElementById("bottom-gallery-links");
let galleryBtn=gallery.children;
galleryBtn=[...galleryBtn];
galleryBtn[0].classList.add("active1");

let hidden=document.getElementById("hide");
let hides=hidden.children;
hides=[...hides];

let galleryli=document.getElementById("gallery-imgs");
let gallerylis=galleryli.children;
gallerylis=[...gallerylis];
hides.forEach((gallerylisitem,index)=>{
    if(index!==0)
    {
        gallerylisitem.style.display="none";
    }
});

let isclicked=0;
const loadMore = document.getElementById('load-more');
loadMore.addEventListener('click', () => {
    if(isclicked===0)
    {
        hides[1].style.display="flex";
        isclicked++;
    }
    else if (isclicked===1)
    {
        hides[2].style.display="flex";
        isclicked++;
        loadMore.style.display="none";
    }
});
let ul1=document.createElement("ul");
ul1.classList.add("imgs");
ul1.style.display="none";

function createImgs(ul,j,arr) {
    let li=document.createElement("li");
    let div=document.createElement("div");
    div.classList.add("imgs-js");
    div.style.backgroundImage=`url(${arr[j].imgSrc})`;
    let img=new Hover();
    div.appendChild(img.big);
    div.appendChild(img.small);
    li.appendChild(div);
    ul.appendChild(li);
}
for (let j = 0; j <12 ; j++) {
    createImgs(ul1,j,graphic);
}
let ul2=document.createElement("ul");
ul2.classList.add("imgs");
ul2.style.display="none";
for (let j = 0; j <7 ; j++) {
    createImgs(ul2,j,web);
}
let ul3=document.createElement("ul");
ul3.classList.add("imgs");
ul3.style.display="none";
for (let j = 0; j <7 ; j++) {
    createImgs(ul3,j,landing);
}
let ul4=document.createElement("ul");
ul4.classList.add("imgs");
ul4.style.display="none";
for (let j = 0; j <10 ; j++) {
    createImgs(ul4,j,wordpress);
}
galleryli.appendChild(ul1);
galleryli.appendChild(ul2);
galleryli.appendChild(ul3);
galleryli.appendChild(ul4);
let indexofbtn=null;
gallery.addEventListener("click",event=>{
    let pressedbutton = event.target;
    indexofbtn = galleryBtn.indexOf(pressedbutton);
    for(let i=0;i<galleryBtn.length;i++)
    {

        if(indexofbtn===i) {
            galleryBtn[i].classList.add("active1");
            if(i===0) {
                hide.style.display = "block";
                if(isclicked<2)
                    loadMore.style.display="flex";
                ul1.style.display="none";
                ul2.style.display="none";
                ul3.style.display="none";
                ul4.style.display="none";
            }
            else {
                hide.style.display="none";
                loadMore.style.display="none";
                if(i===1){
                    ul1.style.display="flex";
                    ul2.style.display="none";
                    ul3.style.display="none";
                    ul4.style.display="none";
                }
                else if(i===2) {
                    ul2.style.display = "flex";
                    ul1.style.display = "none";
                    ul3.style.display = "none";
                    ul4.style.display = "none";
                }
                else if(i===3)
                {
                    ul3.style.display = "flex";
                    ul2.style.display = "none";
                    ul1.style.display = "none";
                    ul4.style.display = "none";
                }
                else if(i===4)
                {
                    ul4.style.display="flex";
                    ul2.style.display="none";
                    ul3.style.display="none";
                    ul1.style.display="none";
                }
            }
        }
        else {
            galleryBtn[i].classList.remove("active1");
        }
    }
});

