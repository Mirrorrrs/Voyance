const table = document.querySelector("#table")
const tableWrapper = document.querySelector(".tableContainer")
const hiddenHeader = document.querySelector(".hiddenHeader")
const hiddenHeaderTh =Array.from(hiddenHeader.querySelectorAll("th"))
const expandBtn = document.querySelector(".expandTableBtn")
const headerTh = Array.from(table.querySelectorAll("th"))
const tableHeader = table.querySelector("thead")
const tableHeaderHeight = tableHeader.getBoundingClientRect().height

headerTh.forEach((el,ind)=>{
    const width = el.getBoundingClientRect().width
    hiddenHeaderTh[ind].style.width = width+"px"
})
const windowScrollHandler = (ev)=> {
    const offsetY = window.scrollY
    const tableYCords = table.getBoundingClientRect().y + pageYOffset + tableHeaderHeight
    if (offsetY > tableYCords) {
            !hiddenHeader.classList.contains("visible") && hiddenHeader.classList.add("visible")
            table.style.marginTop = -tableHeaderHeight+"px"
    }else if(offsetY < Math.abs(tableYCords-tableHeaderHeight)){
        table.style.marginTop = 0+"px"
        hiddenHeader.classList.contains("visible") && hiddenHeader.classList.remove("visible")
    }
}

tableWrapper.addEventListener("scroll", (ev)=>{
    hiddenHeader.scrollLeft = ev.target.scrollLeft
})

expandBtn.onclick = ()=>{
    if (!tableWrapper.classList.contains("opened")){
        tableWrapper.classList.add("opened")
        tableWrapper.style.height = table.getBoundingClientRect().height-tableHeaderHeight + "px"
    }else{
        tableWrapper.classList.remove("opened")
        tableWrapper.style.height = "440px"
    }
}

document.addEventListener("scroll",windowScrollHandler)
