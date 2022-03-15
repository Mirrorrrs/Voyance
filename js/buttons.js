const openSearchModal = $(".openSearchModal")
const closeSearchModal = $(".closeSearchModal")
const openCommentModal = $(".openCommentModal")
const closeCommentModal = $(".closeCommentModal")
const searchMobileInput = $(".searchModal .inputWrapper input")[0]
const searchModal = $('.searchModal')[0]
const commentModal = $('.commentModal')[0]

openSearchModal.each((num,el)=>{
    el.onclick = ()=>{
        searchModal.classList.add("visible")
        document.body.classList.add("wrap")
    }
})

openCommentModal.each((num,el)=>{
    el.onclick = ()=>{
        commentModal.classList.add("visible")
        document.body.classList.add("wrap")
    }
})

closeCommentModal.each((num,el)=>{
    el.onclick = ()=>{
        console.log("odkosa");
        commentModal.classList.remove("visible")
        document.body.classList.remove("wrap")
    }
})

closeSearchModal.each((num,el)=>{
    el.onclick = ()=>{
        searchModal.classList.remove("visible")
        document.body.classList.remove("wrap")
    }
})

searchMobileInput.oninput = (ev)=>{
    const val = ev.target.value
    if (val.trim().length >0){
        searchModal.classList.add("resultsVisible")
    }else{
        searchModal.classList.remove("resultsVisible")

    }
}
