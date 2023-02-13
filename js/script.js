{
    const welcome = () => {
        console.log("Cześć!");
    }

    welcome();

    const hidePicture = () => {
        const left = document.querySelector(".left");

        left.remove();
    };

    const init = () => {
        const pushbutton = document.querySelector(".pushbutton");
        pushbutton.addEventListener("click", hidePicture);
    }
    
    init();
}
