import axios from "axios";

// ========================================
// SELECTING ELEMENTS
// ========================================

const crewFetch = document.querySelector("#crew-fetch");

const buttons = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4");

let all = [];

// ========================================
// GET CREW
// ========================================

async function getUrlCerew() {
  try {
    const res = await axios.get("http://localhost:3000/crew");

    all = res.data;

    // Show Douglas by default
    showCrew(0);
  } catch (error) {
    console.error("Failed to fetch:", error.message);
  }
}

// ========================================
// CREW TEMPLATE
// ========================================

function crewTemplate(crew) {
  return `
    <div class="flex flex-col gap-6 items-center lg:items-start">
      <h1 class="flex items-center gap-6 tracking-[4px] text-white text-lg md:text-4xl lg:text-3xl font-barlow md:mt-10 md:mb-20 my-5">
        <span class="opacity-25 font-bold">02</span>
        MEET YOUR CREW
      </h1>
    </div>

    <div class="flex flex-col-reverse lg:flex-row gap-8 justify-between items-center">

      <div class="flex flex-col gap-4 md:my-10 lg:my-50 items-center">
        <h3 class="font-Bellefair text-lg lg:text-3xl md:text-5xl text-white opacity-25">
          ${crew.role}
        </h3>

        <h2 class="mb-2 font-Bellefair text-white text-2xl md:text-6xl">
          ${crew.name}
        </h2>

        <p class="leading-[180%] text-lg md:text-xl text-blue-300 md:w-lg lg:w-110 text-center lg:text-justify">
          ${crew.bio}
        </p>
      </div>

      <div>
        <img
          class="md:size-140 size-70"
          src="${crew.images.webp}"
          alt="${crew.name}"
        >
      </div>

    </div>
  `;
}

// ========================================
// SHOW CREW
// ========================================

function showCrew(index) {
  const crew = all[index];

  if (!crew) return;

  crewFetch.innerHTML = crewTemplate(crew);

  buttons.forEach((button, i) => {
    button.classList.toggle("bg-white", i === index);
    button.classList.toggle("bg-white/17", i !== index);
  });
}

// ========================================
// BUTTON EVENTS
// ========================================

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showCrew(index);
  });
});

// ========================================
// START
// ========================================

getUrlCerew();
