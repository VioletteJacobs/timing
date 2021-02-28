let launchDate = new Date("April 18, 2021 00:00:00").getTime();

// Timer avançant à chaque seconde
let timer = setInterval(tick, 1000);

function tick() {
    // jour actuel
    let now = new Date().getTime();
    // temps restant avant d'atteindre 0 (disponibilité/ouverture)
    let time = launchDate - now;

    // vérification de timing
    if(time > 0){

        // algorithm pour calculer le jour
        let days = Math.floor(timer/(1000 *60*60*24));
        if (days < 10){ 
            days = "0" + days
        }
        // algorithm pour calculer l'heure
        let hours = Math.floor((time % (1000 *60 *60 *24))/(1000 *60 *60 *60));
        if (hours < 10){ 
            hours = "0" + hours
        }

        // algorithm pour calculer les minutes
        let minutes = Math.floor((time % (1000 *60 *60 *24))/ (1000 *60));
        
        if (minutes < 10){ 
            minutes = "0" + minutes
        }

        // algorithm pour calculer les secondes
        let secondes = Math.floor((time % (1000 *60 *60 *24))/ (1000));

        if (secondes < 10){ 
            secondes = "0" + secondes
        }

        // time string
        let timing = `${days} : ${hours} : ${minutes} : ${secondes}` 


        // let countdown = document.getElementsByClassName("countdow")
        // console.log(countdown[0].innerText)

        document.querySelector('.countdow').innerText = timing;

    }

}