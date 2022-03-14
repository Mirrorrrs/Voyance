
const slidesToShow = window.innerWidth <= 1025 ? window.innerWidth <= 414 ? 2 : 4 : 6

$(".profilesSlider").each((num,el)=>{
    let element = $(el)
    element.slick({
        infinite: false,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        showButtons:false,
        appendArrows:$(element.parent()).children(".header").children(".controls")
    })
})

if (slidesToShow <=4){
    $(".ads").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
}



