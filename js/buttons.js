const textDescription = $("#textDescription")[0]
const searchModal = $('.searchModal')[0]
const commentModal = $('.commentModal')[0]
const filterDropDown = $("#filterDropDown")[0]
const trierDropDown = $("#trierDropDown")[0]

function toggleTextDescription(){
    textDescription.classList.toggle("opened")
}

function openCommentModal(){
    commentModal.classList.add("visible")
    document.body.classList.add("wrap")
}

function closeCommentModal(){
    commentModal.classList.remove("visible")
    document.body.classList.remove("wrap")
}

function toggleFilterDropdown(){
    trierDropDown.classList.remove("visible")
    filterDropDown.classList.toggle("visible")
}

function toggleTrierDropdown(){
    filterDropDown.classList.remove("visible")

    trierDropDown.classList.toggle("visible")
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