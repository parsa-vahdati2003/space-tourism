import axios from "axios";

// selecting

const tecFetch = document.querySelector("#technology-fetch");

console.log("hi");

let all = [];

async function getTec() {
  try {
    const res = await axios.get("http://localhost:3000/technology");

    all = res.data;

    console.log(all);
    // Show  by default
    showTecnology(all[0]);
  } catch (error) {
    console.error("Failed to fetch:", error.message);
  }
}
// getTec();

// ========================================
// SHOW which tecnology
// ========================================

function showTecnology(tecnology) {
  tecFetch.innerHTML = tecTemplate(tecnology);
}

function tecTemplate(tec) {
  return `
    <div class="flex gap-16 py-10  lg:py-50 lg:flex-row flex-col-reverse">

     
      <div class="hidden lg:flex flex-col gap-8">

        <button
          data-name="Launch vehicle"
          class="size-20 rounded-full border-2 font-Bellefair text-[32px] transition-all
          ${
            tec.name === "Launch vehicle"
              ? "bg-white text-blue-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }"
        >
          1
        </button>



        <button
          data-name="Spaceport"
          class="size-20 rounded-full border-2 font-Bellefair text-[32px] transition-all
          ${
            tec.name === "Spaceport"
              ? "bg-white text-blue-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }"
        >
          2
        </button>


  
        <button
          data-name="Space capsule"
          class="size-20 rounded-full border-2 font-Bellefair text-[32px] transition-all
          ${
            tec.name === "Space capsule"
              ? "bg-white text-blue-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }"
        >
          3
        </button>

      </div>


      <!-- TECHNOLOGY TEXT -->
      <div class="flex flex-col gap-4 md:gap-6 items-center">

        <h3 class="text-white opacity-25 font-Bellefair text-2xl lg:text-3xl">
          THE TERMINOLOGY…
        </h3>

        <h2 class="mb-2 text-white text-2xl md:text-5xl lg:text-6xl font-Bellefair">
          ${tec.name}
        </h2>

        <p class=" p-6 md:p-0 leading-[180%] text-lg text-blue-300 w-80  md:w-125 lg:w-100 text-justify">
          ${tec.description}
        </p>

      </div>


            <div class="lg:hidden flex flex-row gap-8 justify-center">

        <button
          data-name="Launch vehicle"
          class="md:size-15 size-12 grid place-items-center  rounded-full border-2 font-Bellefair md:text-2xl  text-lg transition-all
          ${
            tec.name === "Launch vehicle"
              ? "bg-white text-blue-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }"
        >
          1
        </button>



        <button
          data-name="Spaceport"
          class="md:size-15 size-12  grid place-items-center rounded-full border-2 font-Bellefair md:text-2xl  text-lg transition-all
          ${
            tec.name === "Spaceport"
              ? "bg-white text-blue-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }"
        >
          2
        </button>


  
        <button
          data-name="Space capsule"
          class="md:size-15 size-12  grid place-items-center rounded-full border-2 font-Bellefair md:text-2xl  text-lg transition-all
          ${
            tec.name === "Space capsule"
              ? "bg-white text-blue-900 border-white"
              : "bg-transparent text-white border-white/25 hover:border-white"
          }"
        >
          3
        </button>

      </div>

      <div>

        <picture>

          <!-- Tablet + Desktop -->
          <source
            media="(min-width: 1024px)"
            srcset="${tec.images.portrait.replace("./", "/")}"
          >

          <!-- Mobile -->
          <img
            src="${tec.images.landscape.replace("./", "/")}"
            alt="${tec.name}"
          >

        </picture>

      </div>




    </div>
  `;
}

// ========================================
// btn CLICK
// ========================================

// add EventListener
tecFetch.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  const name = button.dataset.name;

  const tecnology = all.find((item) => {
    return item.name === name;
  });

  showTecnology(tecnology);
});

// ========================================
// START
// ========================================

getTec();
