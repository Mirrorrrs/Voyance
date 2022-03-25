
const searchMobileInput = $(".searchModal .inputWrapper input")[0]
const searchModal = $('.searchModal')[0]
const commentModal = $('.commentModal')[0]

function openSearchModal(){
    searchModal.classList.add("visible")
}

function openCommentModal(){
    commentModal.classList.add("visible")
    document.body.classList.add("wrap")
}

function closeCommentModal(){
    commentModal.classList.remove("visible")
    document.body.classList.remove("wrap")
}

function closeSearchModal(){
    searchModal.classList.remove("visible")

}

searchMobileInput.oninput = (ev)=>{
    const val = ev.target.value
    if (val.trim().length >0){
        searchModal.classList.add("resultsVisible")
    }else{
        searchModal.classList.remove("resultsVisible")

    }
}
