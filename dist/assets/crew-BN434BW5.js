import{t as e}from"./axios-ByMrdxRv.js";import"./home-PJJHuPYa.js";console.log(`hi`);var t=document.querySelector(`#crew-fetch`),n=document.querySelector(`#btn1`),r=document.querySelector(`#btn2`),i=document.querySelector(`#btn3`),a=document.querySelector(`#btn4`),o=[];async function s(){try{o=(await e.get(`http://localhost:3000/crew`)).data,console.log(o),l(o[0])}catch(e){console.error(`Failed to fetch:`,e.message)}}function c(e){return`
              <div class="flex flex-col gap-6 items-center lg:items-start ">
              <h1 class="flex items-center gap-6 tracking-[4px] text-white text-lg md:text-4xl lg:text-3xl font-barlow md:mt-10 md:mb-20 my-5 ">
            <span class="opacity-25 font-bold ">02</span>
           
            MEET YOUR CREW
          </h1>
          </div>

          <div  class="flex flex-col-reverse lg:flex-row gap-8 justify-between  items-center ">
            

            <div  class="flex flex-col gap-4 md:my-10 lg:my-50 items-center">
              <h3 class="font-Bellefair text-lg  lg:text-3xl md:text-5xl text-white opacity-25">${e.role} </h3>
              <h2 class="mb-2 font-Bellefair text-white text-2xl md:text-6xl">${e.name} </h2>
              <p class="leading-[180%] text-lg md:text-xl  text-blue-300 md:w-lg lg:w-110 text-center lg:text-justify ">${e.bio}</p>

              
            </div>

            

            <div>
              <img class="md:size-140 size-70"  src="${e.images.png.replace(`./`,`/`)}" alt="${e.name} img">
            </div>

           
              
            </div>
    
    
    
    `}function l(e){t.innerHTML=``,t.insertAdjacentHTML(`afterbegin`,c(e))}n.addEventListener(`click`,()=>{l(o[0])}),r.addEventListener(`click`,()=>{l(o[1])}),i.addEventListener(`click`,()=>{l(o[2])}),a.addEventListener(`click`,()=>{l(o[3])}),s();var u=document.querySelectorAll(`#btn1, #btn2, #btn3, #btn4`);u.forEach(e=>{e.addEventListener(`click`,()=>{u.forEach(e=>{e.classList.remove(`bg-white`),e.classList.add(`bg-white/17`)}),e.classList.remove(`bg-white/17`),e.classList.add(`bg-white`)})});