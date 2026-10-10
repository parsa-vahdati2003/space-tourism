// import axios from "axios";
// import data from "../data/data.json";
// console.log("hi");

// // ========================================
// // SELECTING ELEMENTS
// // ========================================

// // des-con
// const desContent = document.querySelector("#destination-content");

// // let all = []; // [Moon, Mars, Europa, Titan]
// const all = data.destinations;

// // ========================================
// // GET API DATA
// // ========================================

// async function getDestinations() {
//   try {
//     const res = await axios.get("http://localhost:3000/destinations");

//     all = res.data;

//     console.log(all);

//     // Show Moon by default
//     showDestination(all[0]);
//   } catch (error) {
//     console.error("Failed to fetch:", error.message);
//   }
// }

// // ========================================
// // SHOW DESTINATION
// // ========================================

// function showDestination(destination) {
//   desContent.innerHTML = destinationTemplate(destination);
// }

// // ========================================
// // DESTINATION TEMPLATE
// // ========================================

// function destinationTemplate(destination) {
//   return `
//     <div id="destination-image">
//       <img class="size-50 md:size-75 lg:size-120"
//         src="${destination.images.webp.replace("./", "/")}"
//         alt="${destination.name}"
//       >
//     </div>

//     <div class="flex flex-col items-center " >

//       <nav class="flex items-start gap-8 pb-3">

//         <button
//           data-name="Moon"
//           type="button"
//           class="tracking-[2px] pb-3 text-base uppercase ${
//             destination.name === "Moon"
//               ? "text-white active-link"
//               : "text-white/50"
//           }"
//         >
//           MOON
//         </button>

//         <button
//           data-name="Mars"
//           type="button"
//           class="tracking-[2px] pb-3 text-base ${
//             destination.name === "Mars"
//               ? "text-white active-link"
//               : "text-white/50"
//           }"
//         >
//           MARS
//         </button>

//         <button
//           data-name="Europa"
//           type="button"
//           class="tracking-[2px] pb-3 text-base ${
//             destination.name === "Europa"
//               ? "text-white active-link"
//               : "text-white/50"
//           }"
//         >
//           EUROPA
//         </button>

//         <button
//           data-name="Titan"
//           type="button"
//           class="tracking-[2px] pb-3 text-base ${
//             destination.name === "Titan"
//               ? "text-white active-link"
//               : "text-white/50"
//           }"
//         >
//           TITAN
//         </button>

//       </nav>

//       <h2 class="mt-10 font-Bellefair text-6xl md:text-[80px] lg:text-8xl text-white mb-4 uppercase">
//         ${destination.name}
//       </h2>

//       <p class="font-barlow text-lg leading-[180%] w-78 md:w-lg lg:w-95 text-center lg:text-justify text-blue-300 mb-10">
//         ${destination.description}
//       </p>

//       <div
//         class="w-full h-px bg-[#383b4b] mb-10"
//         aria-label="under line"
//       ></div>

//       <div class="flex  items-center gap-6">

//         <div class="flex flex-col gap-3">
//           <span class="text-blue-300 text-sm tracking-[2px]">
//             AVG. DISTANCE
//           </span>

//           <span class="font-Bellefair text-2xl text-white">
//             ${destination.distance}
//           </span>
//         </div>

//         <div class="flex flex-col gap-3">
//           <span class="text-blue-300 text-sm tracking-[2px]">
//             Est. travel time
//           </span>

//           <span class="font-Bellefair text-2xl text-white">
//             ${destination.travel}
//           </span>
//         </div>

//       </div>

//     </div>
//   `;
// }

// // ========================================
// // NAV CLICK
// // ========================================

// desContent.addEventListener("click", (event) => {
//   const button = event.target.closest("button");

//   if (!button) return;

//   const name = button.dataset.name;

//   const destination = all.find((item) => {
//     return item.name === name;
//   });

//   showDestination(destination);
// });

// // ========================================
// // START
// // ========================================

// getDestinations();

import data from "../data/data.json";

// ========================================
// SELECTING ELEMENTS
// ========================================

// des-con
const desContent = document.querySelector("#destination-content");

// [Moon, Mars, Europa, Titan]
const all = data.destinations;

// ========================================
// SHOW DESTINATION
// ========================================

function showDestination(destination) {
  desContent.innerHTML = destinationTemplate(destination);
}

// ========================================
// DESTINATION TEMPLATE
// ========================================

function destinationTemplate(destination) {
  return `
    <div id="destination-image">
      <img class="size-50 md:size-75 lg:size-120"
        src="${destination.images.webp}"
        alt="${destination.name}"
      >
    </div>

    <div class="flex flex-col items-center " >

      <nav class="flex items-start gap-8 pb-3">

        <button
          data-name="Moon"
          type="button"
          class="tracking-[2px] pb-3 text-base uppercase ${
            destination.name === "Moon"
              ? "text-white active-link"
              : "text-white/50"
          }"
        >
          MOON
        </button>

        <button
          data-name="Mars"
          type="button"
          class="tracking-[2px] pb-3 text-base ${
            destination.name === "Mars"
              ? "text-white active-link"
              : "text-white/50"
          }"
        >
          MARS
        </button>

        <button
          data-name="Europa"
          type="button"
          class="tracking-[2px] pb-3 text-base ${
            destination.name === "Europa"
              ? "text-white active-link"
              : "text-white/50"
          }"
        >
          EUROPA
        </button>

        <button
          data-name="Titan"
          type="button"
          class="tracking-[2px] pb-3 text-base ${
            destination.name === "Titan"
              ? "text-white active-link"
              : "text-white/50"
          }"
        >
          TITAN
        </button>

      </nav>

      <h2 class="mt-10 font-Bellefair text-6xl md:text-[80px] lg:text-8xl text-white mb-4 uppercase">
        ${destination.name}
      </h2>

      <p class="font-barlow text-lg leading-[180%] w-78 md:w-lg lg:w-95 text-center lg:text-justify text-blue-300 mb-10">
        ${destination.description}
      </p>

      <div
        class="w-full h-px bg-[#383b4b] mb-10"
        aria-label="under line"
      ></div>

      <div class="flex  items-center gap-6">

        <div class="flex flex-col gap-3">
          <span class="text-blue-300 text-sm tracking-[2px]">
            AVG. DISTANCE
          </span>

          <span class="font-Bellefair text-2xl text-white">
            ${destination.distance}
          </span>
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-blue-300 text-sm tracking-[2px]">
            Est. travel time
          </span>

          <span class="font-Bellefair text-2xl text-white">
            ${destination.travel}
          </span>
        </div>

      </div>

    </div>
  `;
}

// ========================================
// NAV CLICK
// ========================================

desContent.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  const name = button.dataset.name;

  const destination = all.find((item) => {
    return item.name === name;
  });

  showDestination(destination);
});

// ========================================
// START
// ========================================

showDestination(all[0]);
