const slidesToShow = window.innerWidth <= 768 ? 4 : 6

$(".profilesSlider").each((num,el)=>{
    let element = $(el)
    element.slick({
        infinite: false,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
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

