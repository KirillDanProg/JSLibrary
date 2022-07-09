const reviews = [
  {
    name: "Kirill",
    job: "Web Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis alias libero nam repudiandae tenetur et ut doloremque sit voluptates!",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX///8AAADtoHYsLCwBdOkWFhaOAADVAQDWkWr/uwD//wCyAACECAgAdOz+AACRAADvqoXRBQUAasLxwyrYmngTdt4aFxj/u4CnCgr4/zTuDg7/xpHIDAyYAAAabdbgAAD//B7/uxoAasX0xp6+AAB8DQ3vspHNCQmnCgv/xCMZbtcRZbWjAADly0750K7fGhnZo4X9xDr/0aKbEhQjd9QAYKEAarX0y0X//1S5Fhgqb80AYKoxZMHm3m5MAAAEFklEQVR4nO3b61baQBRAYbGA2kJBEGq9UE29FVHrtRV9/+eqa2Uy1DkzMQTMTOLeP+MQ8pXLSRbpygoRERERERER0X/V3Pk+tCWFsPwhLH8Iyx/C0qYZDXflNiNEGH4IEYYfwtIKU2CfRKU0I0SI0H8IESL0nxRK2FwFZ0aIECFChAiLEzaGw8bw5dHDqgobJ924k6H7VS23sLsa10WIECFChB9COFSzuzFsqCFuAZlralpYE48KTVhLZrdODvGGWJMAX4jiUcEJZwfrfOM1xBpZFyFChAgRVlCok0IxxMsp/L2lshysOcTLKdxaV2U4aIQIESJEiNB90DXzir5qwlV5RV814TwhRIgQIcKPIcwy/dxrSiDs6j+5iSlrZqd4+id+P9QChF2xGCFChAgRIkz+JH/iD0y44DmN/FN4wmWHECFChAgrLRQ3sVluZ0uThXoFbPm3l2X5AcMPDCFChAgRIkQ4n3DBc5oyCBcLIUKECBFWSJhyJ3tOmd9LeymUL+b6Qq+q5UwIIUKECBEiLI9Qj35dyhWwu5NQhDJ5ZPk6bhkdh0JdlrDVab6q06qcsGmEECFChMsXdqou1POw2YnzLdRPf7v9uklzOnA1bU62Hd3qHe5txp16Hv36Wbe/GO2P23V77fG+uVi3PROuxW12/I5+/axnQjhyAOv1UR6hrw8kQoQIAxLavktVsy9RVa7vUu/CZB6e7ata5724aDyKG0dqy3lr3+xMzMPHPVXHy+jXT3anhvid3jKNQePzi37cdVMpmtdqy8V5gk7s05Qd+hn9+jkG8XuwPRBbev2NuMOJegdODtWWfs84GbA8fLbFz+ifHZA6xoG5ZS6hfHjdLSzmA4kQIUKEQQgjPQ87k7iOnodRFYT1ujqDie6vD+Ou75NNdbNyCpOz0Ch5u/YjcaZabmEC1R9I+fFDiBAhwkxC9e24PKHYoWdhpK5hI7dQj3456C1CucOZsMiLff0clz/jLp1CPfotg94ilDtMhGubRV7s613vfovbTRG2nYPeIpQ71MI14+36ri/mXMIM5RK+6wcSIUKEYQvbOQpYeLMbd6O3PPRy9JCyQ4vQy+jX/embfX+7v3I/+ncLE+hr9Ot+bZh9frsDuR+LzPV2LWb0+xQW84FEiBDhxxYW/F0q5+GBKMs8TH7cTsnT797inOZpcmQ0eXKf04h7E1Nq1URFCMV56ejIfHcdjdznpeL+0pR8Cc3rBpvQfW0h7hFGiBAhQovQvN/J+l1qrMn1XeprWkxHRs/6Wjbp8dlcM7uvTfzftZSO/Qj3fhhdyeO4MtecyjVZekdPinDnq9GOPLIsaxAiRIgQYZWFVztGtnmYYU24wizHEcpBzxXC/ItDCWH+xaGEMP/iUEKYfzERERHRm/0D4iil0SlqK+UAAAAASUVORK5CYII=",
  },

  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9h4yPaBCBZyWbfZ96nuFulsrScuxajEbGyA&usqp=CAU",
    name: "Inga",
    job: "Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis alias libero nam repudiandae tenetur et ut doloremque sit voluptates!",
  },

  {
    id: 2,
    img: "http://piq.codeus.net/static/media/userpics/piq_297739_400x400.png",
    name: "Alex",
    job: "Artist",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis alias libero nam repudiandae tenetur et ut doloremque sit voluptates!",
  },

  {
    id: 3,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a28582b6-7528-4b01-89ba-2d8ce7b89abb/d5hkwsd-6920c58e-e408-473b-98f5-3cebbefc4744.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyODU4MmI2LTc1MjgtNGIwMS04OWJhLTJkOGNlN2I4OWFiYlwvZDVoa3dzZC02OTIwYzU4ZS1lNDA4LTQ3M2ItOThmNS0zY2ViYmVmYzQ3NDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0E6RBM0e_7Og7S1gHm0eZqDMakgn7hz9dY6EkZwGOHw",
    name: "Sergey",
    job: "Freelancer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis alias libero nam repudiandae tenetur et ut doloremque sit voluptates!",
  },

  {
    id: 4,
    img: "https://i.pinimg.com/originals/d2/4b/be/d24bbe79387549086d159aa4462bf4c9.png",
    name: "John",
    job: "entrepreneur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis alias libero nam repudiandae tenetur et ut doloremque sit voluptates!",
  },
];

const pers = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const img = document.querySelector(".img");
const rndBtn = document.querySelector(".rndBtn");
// const arrow = document.querySelectorAll("svg");
const btnBfr = document.querySelector(".svgA");
const btnAft = document.querySelector(".svgB");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  let item = reviews[currentItem];
  pers.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
  img.src = item.img;
}

btnAft.addEventListener("click", function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson();
});

btnBfr.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

rndBtn.addEventListener("click", () => {
  currentItem = getRnd();
  showPerson();
});

const getRnd = () => Math.floor(Math.random() * reviews.length);

const mdlBtn = document.querySelector(".modal-btn");
const mdlWindow = document.querySelector(".modal-window");
const clsBtn = document.querySelector(".svg-modal");

mdlBtn.addEventListener("click", () => {
  mdlWindow.style.display = "block";
});
clsBtn.addEventListener("click", () => {
  mdlWindow.style.display = "none";
});

const btns = document.querySelectorAll(".btns");

const qstns = document.querySelector(".question-text");

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const qstn = e.currentTarget.parentElement.parentElement;
    qstn.classList.toggle("show");
  });
});


// OPEN.CLOSE
const btn = document.querySelector(".btn");
const para = document.querySelector(".block-text");

btn.addEventListener("click", () => {
  // para.style.display = 'none'
  para.classList.toggle("show");
  if (!para.classList.contains("show")) {
    btn.textContent = "Close";
  } else {
    btn.textContent = "Open";
  }
});


// SHOW / HIDE

const action = document.querySelector('.collapse-block');
const cont = document.querySelector('.collapse-content');

action.addEventListener('click', () => {
  cont.classList.toggle('hide-content');


})