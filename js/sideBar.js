const dropdownItems = $(".dropdownMenu")
const viewWrapper = $(".viewWrapper")[0]
const searchResults = $(".searchBar .searchResults")[0]
const sideBar = $(".sideBar")[0]
const menuButton = $(".burgerMenu")
const backButton = $(".backButton")
Array.from(dropdownItems).forEach(item => {
    item.onclick = (ev) => {
        item.classList.toggle("active")
    }
})

menuButton.each((num, el) => {
    el.onclick = () => {
        sideBar.classList.toggle("visible")
        document.body.classList.toggle("wrap")
    }
})

function blurOnSelect(el, ...args){

    const removeFunc = ()=>{
        el.parentNode.classList.remove("poped")
        el.classList.remove("active")
        viewWrapper.classList.remove("blured")
        searchResults.classList.remove("visible")
        if (args[0]){
            args[0]()
        }
        window.removeEventListener("click",handler)

        enableScroll()
    }

    const handler = (ev)=>{
        if(!el.parentNode.contains(ev.target)){
            removeFunc()
        }
    }

    if (!el.parentNode.classList.contains("poped")){
        el.parentNode.classList.add("poped")
        el.classList.add("active")
        viewWrapper.classList.add("blured")

        window.addEventListener("click",handler)
    }else{
        window.removeEventListener("click",handler)
        removeFunc()
        enableScroll()
    }

    disableScroll()
}

function searchInput(el){
    const val = el.value
    if (val.trim().length > 3) {
        searchResults.classList.add("visible")
    } else {
        searchResults.classList.remove("visible")

    }
}

function searchMobileInput(el){
    const val = el.value
    if (val.trim().length >0){
        searchModal.classList.add("resultsVisible")
    }else{
        searchModal.classList.remove("resultsVisible")

    }
}

function openSearchModal(){
    searchModal.classList.add("visible")
}


function closeSearchModal() {
    searchModal.classList.remove("visible")

}


