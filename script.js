let movies = [
    {
        name:"Falcon and the Winter soldier",
        des:
            "The story takes place after the events of Avengers: Endgame and follows Sam Wilson, also known as Falcon, and Bucky Barnes, also known as the Winter Soldier, as they navigate their lives in a post-Captain America world",
        image: "images/slider 2.PNG",  
    },
    {
        name:"Loki",
        des:
            "Loki's charm, wit, and morally ambiguous nature have made him a fan-favorite, as audiences are drawn to his multidimensional personality. ",
        image: "images/slider 1.PNG",  
    },
    {
        name:"Wanda Vision",
        des:
            "WandaVision explores the couple's idyllic suburban life in the town of Westview, which seems to be influenced by various sitcom eras. ",
        image: "images/slider 3.PNG",   
    },
    {
        name:"Raya and the last Dragon ",
        des:
            "Raya and the Last Dragon is a captivating animated film set in the fictional world of Kumandra. ",
        image: "images/slider 4.PNG",   
    },
    {
        name:"Luca",
        des: 
             "Luca is a 2021 animated film produced by Pixar Animation Studios and released by Walt Disney Pictures. ",
        image: "images/slider 5.PNG",   
    },
];

// app
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => { 
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }

    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    //attaching  all elements 

    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames

    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = ` calc(-${100* (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px) `;
    }
};

for (let i = 0 ; i < 3 ; i++) {
    createSlide();
}
setInterval(() => {
   createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover",()=> {
        let video = item.children[1];
        video.play();
    });

    item.addEventListener("mouseleave",() => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers =[...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items,i) => {
   let containerDimensions = items.getBoundingClientRect();
   let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth -200;
  });

  preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});