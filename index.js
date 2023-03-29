const imageSources = ["CSS - My Site Images/html.png", "CSS - My Site Images/css.webp","CSS - My Site Images/reacticon.png"];
let currentIndex = 0;
const imageElement1 = document.getElementById("my-image1");

if (imageElement1) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    const newImageSource = imageSources[currentIndex];
    imageElement1.classList.add("hidden");
    setTimeout(() => {
      imageElement1.src = newImageSource;
      imageElement1.classList.remove("hidden");
    }, 1000);
  }, 2000);
} else {
  console.error("Could not find image element with ID 'my-image1'");
}

const imageSources2 = ["CSS - My Site Images/sql.png", "CSS - My Site Images/mongodb.png","CSS - My Site Images/nodejs.png"];
let currentIndex2 = 0;
const imageElement2=document.getElementById("my-image2");
if (imageElement2) {
  setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % imageSources2.length;
    const newImageSource = imageSources2[currentIndex2];
    imageElement2.classList.add("hidden");
    setTimeout(() => {
      imageElement2.src = newImageSource;
      imageElement2.classList.remove("hidden");
    }, 1000);
  }, 2000);
} else {
  console.error("Could not find image element with ID 'my-image2'");
}

const imageSources3 = ["CSS - My Site Images/c-programming.png", "CSS - My Site Images/javaicon.png","CSS - My Site Images/267_Python-512.webp"];
let currentIndex3 = 0;
const imageElement3=document.getElementById("my-image3");
if (imageElement3) {
  setInterval(() => {
    currentIndex3 = (currentIndex3 + 1) % imageSources3.length;
    const newImageSource = imageSources3[currentIndex3];
    imageElement3.classList.add("hidden");
    setTimeout(() => {
      imageElement3.src = newImageSource;
      imageElement3.classList.remove("hidden");
    }, 1000);
  }, 2000);
} else {
  console.error("Could not find image element with ID 'my-image3'");
}



