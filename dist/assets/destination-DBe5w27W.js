import{t as e}from"./axios-ByMrdxRv.js";import"./home-DUZErO4J.js";console.log(`hi`);var t=document.querySelector(`#destination-content`),n=[];async function r(){try{n=(await e.get(`http://localhost:3000/destinations`)).data,console.log(n),i(n[0])}catch(e){console.error(`Failed to fetch:`,e.message)}}function i(e){t.innerHTML=a(e)}function a(e){return`
    <div id="destination-image">
      <img class="size-50 md:size-75 lg:size-120"
        src="${e.images.webp.replace(`./`,`/`)}"
        alt="${e.name}"
      >
    </div>

    <div class="flex flex-col items-center " >

      <nav class="flex items-start gap-8 pb-3">

        <button
          data-name="Moon"
          type="button"
          class="tracking-[2px] pb-3 text-base uppercase ${e.name===`Moon`?`text-white active-link`:`text-white/50`}"
        >
          MOON
        </button>

        <button
          data-name="Mars"
          type="button"
          class="tracking-[2px] pb-3 text-base ${e.name===`Mars`?`text-white active-link`:`text-white/50`}"
        >
          MARS
        </button>

        <button
          data-name="Europa"
          type="button"
          class="tracking-[2px] pb-3 text-base ${e.name===`Europa`?`text-white active-link`:`text-white/50`}"
        >
          EUROPA
        </button>

        <button
          data-name="Titan"
          type="button"
          class="tracking-[2px] pb-3 text-base ${e.name===`Titan`?`text-white active-link`:`text-white/50`}"
        >
          TITAN
        </button>

      </nav>

      <h2 class="mt-10 font-Bellefair text-6xl md:text-[80px] lg:text-8xl text-white mb-4 uppercase">
        ${e.name}
      </h2>

      <p class="font-barlow text-lg leading-[180%] w-78 md:w-lg lg:w-95 text-center lg:text-justify text-blue-300 mb-10">
        ${e.description}
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
            ${e.distance}
          </span>
        </div>

        <div class="flex flex-col gap-3">
          <span class="text-blue-300 text-sm tracking-[2px]">
            Est. travel time
          </span>

          <span class="font-Bellefair text-2xl text-white">
            ${e.travel}
          </span>
        </div>

      </div>

    </div>
  `}t.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let r=t.dataset.name;i(n.find(e=>e.name===r))}),r();