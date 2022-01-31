const d = document;

export default function countdown(id,limitDate,finalMessage){
    const $contdownT = d.getElementById(id);
    const $countDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime();
        limitDate = $countDate -now;

        let segundos = 1000;
        let minutos = segundos * 60;
        let hyras = minutos *60;
        let day = hyras * 24;

        let textDay = ("0" + Math.floor(limitDate / day)).slice(-3);
        let textHour = ("0" + Math.floor((limitDate % day) / hyras)).slice(-2);
        let textMinute = ("0" + Math.floor((limitDate % hyras) / minutos)).slice(-2);
        let textSecond = ("0" + Math.floor((limitDate % minutos) / segundos)).slice(-2);


        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;

        if (limitDate < 0){
            clearInterval(countdownTempo);
            document.querySelector(".countdown").innerHTML = `<h3>${finalMessage}</h3>`
               
        
        }

    }, 1000);
    
}

/*export function countdown(){

    const countDate = new Date ("January 4, 2022 18:03:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // how the fuck does time work?

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate this shit

    const textDay = ("0" + Math.floor(gap / day)).slice(-3);
    const textHour = ("0" + Math.floor((gap % day) / hour)).slice(-2);
    const textMinute = ("0" + Math.floor((gap % hour) / minute)).slice(-2);
    const textSecond = ("0" + Math.floor((gap % minute) / second)).slice(-2);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    
    
};

//countdown();
//setInterval(countdown, 1000)*/

