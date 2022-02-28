const dropdownItems = document.querySelectorAll(".dropdownMenu")
$("#profilesSlider").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    appendArrows: $(".specialistsSlider .controls")
})
Array.from(dropdownItems).forEach(item=>{
    item.onclick = (ev)=>{
        item.classList.toggle("active")
    }
})
