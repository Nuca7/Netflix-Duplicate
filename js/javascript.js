const buttons = document.querySelectorAll(".sectionFourButtons");
const contents = document.querySelectorAll(".sectionFourButtonContent")
let previousID = "";

buttons.forEach(button => button.addEventListener("click", selectButton));

function selectButton(){
    closeBtn();
    
    if(previousID !== this.id){
        openBtn(this.id);
        previousID = this.id;
    }
    else{
        previousID = "";
    }
}

function openBtn(id) {
    const buttonContent = document.querySelector(`#${id}Content`);
    buttonContent.classList.add("show");

    document.querySelector(`#${id}img`).src="img/close.png";
}

function closeBtn() {
    if(previousID) {
        closeBtnContent();
        resetBtnImgSrc();
    }
}
function closeBtnContent(){
    contents.forEach(content => content.classList.remove("show"));
}
function resetBtnImgSrc() {
    let img = document.querySelector(`#${previousID}img`);
    img.src = "img/plus.png";
}