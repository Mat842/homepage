{
    const welcome = () => {
        console.log("Cześć!");
    }

    welcome();

    const hidePicture = () => {
        const pushbutton = document.querySelector(".pushbutton");
        const left = document.querySelector(".left");

        pushbutton.addEventListener("click", () => {
            left.remove();
        })
    };

    const init = () => {
        hidePicture();
    }

    init();
}
