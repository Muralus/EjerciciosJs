const d = document;

export function relojDigital(clock,btnPlay,btnStop){
    let clockTempo;


    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
           clockTempo = setInterval(() => {
            var relojM = new Date();
            var hora = relojM.getHours();
            var minuto = relojM.getMinutes();
            var segundo = relojM.getSeconds();
       
            var meridiano = "AM"
       
            if(hora === 0){
                hora = 12;
            }
       
            if (hora > 12){
                hora = hora -12;
                meridiano = "PM"
            }
       
            hora = (hora < 10) ? "0" + hora : hora;
            minuto = (minuto < 10) ? "0" + minuto : minuto;
            segundo = (segundo < 10) ? "0" + segundo : segundo;
       
            var tiempo = hora + ":" + minuto + ":" + segundo + "" + meridiano;
            document.getElementById("reloj-d").innerText = tiempo;
            document.getElementById("reloj-d").textContent = tiempo; 
            }, 1000);
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}



/* Reloj 24 horas*/

/* let clockHour = new Date().toLocaleTimeString();*/

export function alarm(sound,btnAlamr,btnAlamrS) {
     let alarmaTempo;
     const $alamr = d.createElement("audio");
     $alamr.src = sound;

     d.addEventListener("click", (e) =>{
         if(e.target.matches(btnAlamr)){
             alarmaTempo = setTimeout(() =>{
                 $alamr.play();
             },2000);

             e.target.disabled = true;

         }
         if(e.target.matches(btnAlamrS)){
            clearTimeout(alarmaTempo);
            $alamr.pause();
            $alamr.currentTime = 0;
            d.querySelector(btnAlamr).disabled = false;
             
        }
     })


}
     
