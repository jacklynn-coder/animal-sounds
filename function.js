let imgs = document.querySelectorAll("img");
let numsOfImg = imgs.length;

let animalNames = ["bee", "birds", "dog", "horse", "lion"];


for (let i = 0; i < numsOfImg; i++) {
    imgs[i].addEventListener("click", () => {
        let gg = new Audio("./sounds/"+animalNames[i]+".wav");
        gg.play();

    });
}


document.addEventListener("keypress", (event) => {
    let key = event.key.toLowerCase();
    switch (key) {
        case "b":
            playSound(0);
            break;

        case "i":
            playSound(1);
            break;

        case "d":
            playSound(2);
            break;

        case "h":
            playSound(3);
            break;

        case "l":
            playSound(4);
            break;
        default:
            break;
    }
});

function playSound(index) {
    let audio = new Audio("./sounds/" + animalNames[index] + ".wav");
    audio.play();
}