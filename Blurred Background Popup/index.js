const containerEl = document.querySelector
(".container")

const btnEl = document.querySelector(".btn")

const popupElcontainerEl = document.querySelector(".popup-container")

const closeIconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active")
    popupElcontainerEl.classList.remove("active")
})
closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active")
    popupElcontainerEl.classList.add("active")
})
