const filterBtn = $(".filters > .customButton")[0]
const filterModal = $(".filters > .filterModal")[0]
const filterTypes = $(".filterTypeSelect span")
let offsetFirst = {}
let offsetSecond = {}
let rectsFirst = {}
let rectsSecond = {}
const closeModal = $(".filterModal .controls")[0]
const typeSlider = $(".filterTypeSelect > .selectSlider")
let selectedFilter = 1

filterBtn.onclick = ()=>{
    filterModal.classList.add("visible")
    viewWrapper.classList.add("blured")
    offsetFirst = getChildPosition(filterTypes[0])
    offsetSecond = getChildPosition(filterTypes[1])
    rectsFirst = filterTypes[0].getBoundingClientRect()
    rectsSecond = filterTypes[1].getBoundingClientRect()
    disableScroll()
    renderSlider()
}

closeModal.onclick = ()=>{
    filterModal.classList.remove("visible")
    viewWrapper.classList.remove("blured")
    enableScroll()
}

filterTypes[0].onclick = ()=>{
    selectedFilter = 1
    renderSlider()
}

filterTypes[1].onclick = ()=>{
    selectedFilter = 2
    renderSlider()
}

function renderSlider(){
    switch (selectedFilter){
        case 1:
            typeSlider.css({
                left:offsetFirst.left + "px",
                width:rectsFirst.width + "px"
            })
            break
        case 2:
            typeSlider.css({
                left:offsetSecond.left + "px",
                width:rectsSecond.width + "px"
            })
            break
        default:
            typeSlider.css({
                left:offsetFirst.left + "px",
                width:rectsFirst.width + "px"
            })
            break
    }
}

