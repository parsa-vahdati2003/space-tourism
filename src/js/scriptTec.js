import axios from "axios";

// ========================================
// SELECTING ELEMENTS
// ========================================

const tecFetch = document.querySelector("#technology-fetch");

let all = [];

// ========================================
// GET TECHNOLOGY
// ========================================

async function getTec() {
  try {
    const res = await axios.get(
      "https://space-tourism-lv0a.onrender.com/technology",
    );

    all = res.data;

    // Show first technology by default
    showTecnology(0);
  } catch (error) {
    console.error("Failed to fetch:", error.message);
  }
}

// ========================================
// SHOW TECHNOLOGY
// ========================================

function showTecnology(index) {
  const technology = all[index];

  if (!technology) return;

  tecFetch.innerHTML = tecTemplate(technology);
}

// ========================================
// TECHNOLOGY TEMPLATE
// ========================================

function tecTemplate(tec) {
  return `
    <div class="flex gap-16 py-10 lg:py-50 lg:flex-row flex-col-reverse">

      <!-- DESKTOP BUTTONS -->
      <div class="hidden lg:flex flex-col gap-8">

        ${all
          .map(
            (item, index) => `
          <button
            type="button"
            data-index="${index}"
            class="size-20 rounded-full border-2 font-Bellefair text-[32px] transition-all
            ${
              tec.name === item.name
                ? "bg-white text-blue-900 border-white"
                : "bg-transparent text-white border-white/25 hover:border-white"
            }"
          >
            ${index + 1}
          </button>
        `,
          )
          .join("")}

      </div>

      <!-- TECHNOLOGY TEXT -->
      <div class="flex flex-col gap-4 md:gap-6 items-center">

        <h3 class="text-white opacity-25 font-Bellefair text-2xl lg:text-3xl">
          THE TERMINOLOGY…
        </h3>

        <h2 class="mb-2 text-white text-2xl md:text-5xl lg:text-6xl font-Bellefair">
          ${tec.name}
        </h2>

        <p class="p-6 md:p-0 leading-[180%] text-lg text-blue-300 w-80 md:w-125 lg:w-100 text-justify">
          ${tec.description}
        </p>

      </div>

      <!-- MOBILE + TABLET BUTTONS -->
      <div class="lg:hidden flex flex-row gap-8 justify-center">

        ${all
          .map(
            (item, index) => `
          <button
            type="button"
            data-index="${index}"
            class="md:size-15 size-12 grid place-items-center rounded-full border-2 font-Bellefair md:text-2xl text-lg transition-all
            ${
              tec.name === item.name
                ? "bg-white text-blue-900 border-white"
                : "bg-transparent text-white border-white/25 hover:border-white"
            }"
          >
            ${index + 1}
          </button>
        `,
          )
          .join("")}

      </div>

      <!-- TECHNOLOGY IMAGE -->
      <div>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset="${tec.images.portrait}"
          >

          <img
            src="${tec.images.landscape}"
            alt="${tec.name}"
          >
        </picture>
      </div>

    </div>
  `;
}

// ========================================
// BUTTON CLICK
// ========================================

tecFetch.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");

  if (!button) return;

  showTecnology(Number(button.dataset.index));
});

// ========================================
// START
// ========================================

getTec();
