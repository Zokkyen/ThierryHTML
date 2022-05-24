/* Variables */
let counting = 0;

/* Le COUCOU de Thierry */
function play() {
    var audio = new Audio('assets/sound/coucou.mp3');
    audio.volume = 1; // 0.5 = 50% 1 = 100%
    audio.play();
}

/* Fonction animation thierry */
let animeThierry = (thierry, pos) => {

    const refreshRate = 20;
    const maxPosition = 210;
    let speed = Math.floor((Math.random() * 15) + 1);
    let position = 80;
    let beginLoop = 0;
    let finalLoop = Math.floor((Math.random() * 3) * 2 + 2);

    play();
    let interLoop = setInterval(() => {
        position = position + speed;
        if (position > maxPosition || position < 80) {
            speed = speed * (-1);
            beginLoop++;
        }

        switch (pos) {
            case "top":
                thierry.style.top = `calc(50% + ${-position}px)`;
                break;
            case "bottom":
                thierry.style.top = `unset`;
                thierry.style.bottom = `calc(50% + ${-position-70}px)`;
                break;
            case "right":
                thierry.style.left = `unset`;
                thierry.style.right = `calc(50% + ${-position-70}px)`;
                break;
            case "left":
                thierry.style.left = `calc(50% + ${-position}px)`;
                break;
        }

        if (beginLoop == finalLoop) {
            gameBox.removeChild(thierry);
            clearInterval(interLoop);
        }
    }, refreshRate);

    /* Event quand click */
    thierry.addEventListener('click', () => {
        counting++;
        nbCount.innerHTML = `${counting}`;
        gameBox.removeChild(thierry);
    })
}

/* Fonction de l'animation */
let btn = document.getElementById('animBtn');
btn.addEventListener('click', () => {

    let hasard = Math.floor(Math.random() * 4) + 1;
    let thierry = document.createElement("img");
    thierry.id = 'thierryID';

    switch (hasard) {
        case 1:
            thierry.src = 'assets/img/thierryT.png';
            gameBox.appendChild(thierry);
            animeThierry(thierry, "top");
            break;
        case 2:
            thierry.src = 'assets/img/thierryB.png';
            gameBox.appendChild(thierry);
            animeThierry(thierry, "bottom");
            break;
        case 3:
            thierry.src = 'assets/img/thierryR.png';
            gameBox.appendChild(thierry);
            animeThierry(thierry, "right");
            break;
        case 4:
            thierry.src = 'assets/img/thierryL.png';
            gameBox.appendChild(thierry);
            animeThierry(thierry, "left");
            break;
    }
});

let nbCount = document.getElementById('nbCount');

if (counting == 1) {
    //$('#thierrySolitaire').solitaireVictory();


}