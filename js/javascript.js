    const buttons = document.querySelectorAll(".sectionFourButtons");
    const contents = document.querySelectorAll(".sectionFourButtonContent")
    let previousID = "";

    buttons.forEach(button => button.addEventListener("click", selectButton));

    function selectButton(e){
        closeButtonContent();
      
        if(previousID !== this.id){

            const buttonContent = document.querySelector(`#${this.id}Content`);
            buttonContent.classList.add("show");
            previousID = this.id;

            document.querySelector(`#${this.id}img`).src="img/close.png";
        }
        else{
            closeButtonContent();
            previousID = "";
            
            document.querySelector(`#${this.id}img`).src="img/plus.png";
        }
    }

    function closeButtonContent(){
        contents.forEach(content => content.classList.remove("show"))
    }

