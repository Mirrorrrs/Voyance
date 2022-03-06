const dropdownItems = $(".dropdownMenu")
const searchInput = $(".searchBar input")[0]
const viewWrapper = $(".viewWrapper")[0]
const searchResults = $(".searchBar .searchResults")[0]
const sideBar = $(".sideBar")[0]
const menuButton = $(".burgerMenu")
Array.from(dropdownItems).forEach(item=>{
    item.onclick = (ev)=>{
        item.classList.toggle("active")
    }
})
searchInput.onfocus = ()=>{
    viewWrapper.classList.add("blured")
    disableScroll()
}

searchInput.onblur = ()=>{
    viewWrapper.classList.remove("blured")
    searchResults.classList.remove("visible")
    enableScroll()
}

searchInput.oninput = (ev)=>{
    const val = ev.target.value
    if (val.trim().length > 3){
        searchResults.classList.add("visible")
    }else{
        searchResults.classList.remove("visible")

    }
}

menuButton.each((num,el)=>{
    el.onclick = ()=>{
        sideBar.classList.toggle("visible")
    }
})



