const textDescription = $("#textDescription")[0]
const searchModal = $('.searchModal')[0]
const commentModal = $('.commentModal')[0]
const filterDropDown = $("#filterDropDown")[0]
const trierDropDown = $("#trierDropDown")[0]

function toggleTextDescription(){
    textDescription.classList.toggle("opened")
    if (!textDescription.classList.contains("opened")){
        textDescription.scrollIntoView({
            behavior:"smooth"
        })
    }
}

function openCommentModal(){
    commentModal.classList.add("visible")
    document.body.classList.add("wrap")
}

function closeCommentModal(){
    commentModal.classList.remove("visible")
    document.body.classList.remove("wrap")
}

function toggleFilterDropdown(bool){
    if (bool){
        trierDropDown.classList.remove("visible")
        filterDropDown.classList.add("visible")
    }else{
        filterDropDown.classList.remove("visible")
    }

}

function toggleTrierDropdown(bool){
    if (bool){
        filterDropDown.classList.remove("visible")

        trierDropDown.classList.add("visible")
    }else{
        trierDropDown.classList.remove("visible")

    }

}


function expandBtnOnclick(el,openText,callback){
    if (!el.classList.contains("active")){
        el.querySelector(".text").textContent = "Rouler"
    }else{
        el.querySelector(".text").textContent = openText
    }
    el.classList.toggle("active")
    callback()
}