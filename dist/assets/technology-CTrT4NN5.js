import{t as e}from"./axios-ByMrdxRv.js";import"./home-CFiebqkH.js";var t=document.querySelector(`#technology-fetch`),n=[];async function r(){try{n=(await e.get(`http://localhost:3000/technology`)).data,i(0)}catch(e){console.error(`Failed to fetch:`,e.message)}}function i(e){let r=n[e];r&&(t.innerHTML=a(r))}function a(e){return`
    <div class="flex gap-16 py-10 lg:py-50 lg:flex-row flex-col-reverse">

      <!-- DESKTOP BUTTONS -->
      <div class="hidden lg:flex flex-col gap-8">

        ${n.map((t,n)=>`
          <button
            type="button"
            data-index="${n}"
            class="size-20 rounded-full border-2 font-Bellefair text-[32px] transition-all
            ${e.name===t.name?`bg-white text-blue-900 border-white`:`bg-transparent text-white border-white/25 hover:border-white`}"
          >
            ${n+1}
          </button>
        `).join(``)}

      </div>

      <!-- TECHNOLOGY TEXT -->
      <div class="flex flex-col gap-4 md:gap-6 items-center">

        <h3 class="text-white opacity-25 font-Bellefair text-2xl lg:text-3xl">
          THE TERMINOLOGY…
        </h3>

        <h2 class="mb-2 text-white text-2xl md:text-5xl lg:text-6xl font-Bellefair">
          ${e.name}
        </h2>

        <p class="p-6 md:p-0 leading-[180%] text-lg text-blue-300 w-80 md:w-125 lg:w-100 text-justify">
          ${e.description}
        </p>

      </div>

      <!-- MOBILE + TABLET BUTTONS -->
      <div class="lg:hidden flex flex-row gap-8 justify-center">

        ${n.map((t,n)=>`
          <button
            type="button"
            data-index="${n}"
            class="md:size-15 size-12 grid place-items-center rounded-full border-2 font-Bellefair md:text-2xl text-lg transition-all
            ${e.name===t.name?`bg-white text-blue-900 border-white`:`bg-transparent text-white border-white/25 hover:border-white`}"
          >
            ${n+1}
          </button>
        `).join(``)}

      </div>

      <!-- TECHNOLOGY IMAGE -->
      <div>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset="${e.images.portrait}"
          >

          <img
            src="${e.images.landscape}"
            alt="${e.name}"
          >
        </picture>
      </div>

    </div>
  `}t.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-index]`);t&&i(Number(t.dataset.index))}),r();