import countdown from "./countdown.js";
import scrollTopButton from "./boton-scroll.js";
import hamburgerMenu from "./menu.js";
import {alarm, relojDigital} from "./reloj.js";
import { shortcuts } from "./teclado.js";
import { moveBall } from "./teclado.js";
import darkTheme from "./dark_mode.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatu from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busqueda.js";
import draw from "./Sorteo.js";
import slider from "./carrusel.js";
import scroolSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validacion_formularios.js";
import speechReader from "./narrador.js";




const d = document;

d.addEventListener("DOMContentLoaded",(e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a"); 
    relojDigital("#reloj-d","#iniciar-r","#detener-r");
    alarm("Asset/Yaoso.mp3","#iniciar-a","#detener-a");
    countdown("#countdown","February 18, 2022 :16:00:00","Gracias por la espera");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width: 1024px)", `<a href= "https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)",`<a href= "https://goo.gl/maps/dC1GyQvSzQTP81DP9" target="_blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440398034!2d-3.8196229676669664!3d40.438131081918584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zTWFkcmlkLCBFc3Bhw7Fh!5e0!3m2!1ses!2sco!4v1641592223035!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scroolSpy();
    smartVideo();
    contactFormValidations();
    
});


d.addEventListener("keydown", e =>{
    shortcuts(e)
    moveBall(e, ".ball", ".stage")
});

darkTheme(".dark-mode-btn","dark-mode");
networkStatu();
speechReader();















