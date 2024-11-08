const carousel = document.getElementById("carousel");
const customContainer = document.getElementById("custom-container");

const cardData = [
  { name: "Eva Gray", title: "HR Manager", company: "FutureWorks", image: "./images/img2.jpeg" },
  { name: "John Doe", title: "Chief Marketing Officer", company: "Acme Corp", image: "./images/IMG1.jpeg" },
  { name: "Jane Smith", title: "Lead Developer", company: "Tech Innovators", image: "./images/IMG1.jpeg" },
  { name: "Sam Brown", title: "Product Manager", company: "Innovate Ltd.", image: "./images/img2.jpeg" },
  { name: "Lily Green", title: "CTO", company: "GreenTech", image: "./images/img3.jpeg" },
  { name: "Alice Black", title: "CEO", company: "Black Industries", image: "./images/img4.jpeg" },
  { name: "Bob White", title: "Software Engineer", company: "Dev Studios", image: "./images/img3.jpeg" },
  { name: "Eva Gray", title: "HR Manager", company: "FutureWorks", image: "./images/img2.jpeg" }
];

const generateCards =() =>{
  cardData.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${data.image}" alt="photo" />
      <p class="card__title">${data.name}</p>
      <p class="card__subtitle">${data.title}</p>
      <p class="card__ext">${data.company}</p>
    `;
    card.addEventListener("click", () => openCustomContainer(data));
    carousel.appendChild(card);
  });
}

const handleCarouselMove =(positive = true) =>{
  const slideWidth = carousel.querySelector(".card").clientWidth + 16;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}

const openCustomContainer=(data)=> {
  const customImg = document.getElementById("custom-img");
  const customName = document.getElementById("custom-name");
  const customTitle = document.getElementById("custom-title");
  const customCompany = document.getElementById("custom-company");

  customImg.src = data.image;
  customName.textContent = data.name;
  customTitle.textContent = data.title;
  customCompany.textContent = data.company;

  customContainer.style.display = "block";
}

const closeCustomContainer=()=> {
  customContainer.style.display = "none";
}

generateCards();
