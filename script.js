const footer = document.querySelector("footer");
const header = document.querySelector("header");

const id = footer.id;

var urls = '';

if( id =="index"){
    urls = ""
}else{
    urls = "../../"
}

footer.innerHTML= `
    <link rel="stylesheet" href="${urls}style.css">
    <link rel="stylesheet" href="${urls}style-mobile.css">

    <div id="footer_todo">
        <link rel="stylesheet" href="<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
        <div id="footer_esquerda">
            <div id="footer_logo">
                <img src="${urls}./assets/logo-full-azul.svg" />
            </div>
        </div>
        <div id="footer_direita">
            <h1>Contatos</h1>
            <a href="https://www.instagram.com/tutoriadiscenteitec/" target="_blank" class="footer_link" id="instagram">
                <i class="ri-instagram-line"></i>
            </a>
            <a href="mailto:tutoriadiscente.itec@gmail.com" target="_blank" class="footer_link" id="email">
                <i class="ri-mail-line"></i>
            </a>
        </div>
    </div>
`;

header.innerHTML = `
    <link rel="stylesheet" href="${urls}style.css">
    <link rel="stylesheet" href="${urls}style-mobile.css">

    <a href="${urls}index.html">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="32.5658mm" height="36.7981mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 258.76 292.39"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
            <defs>
                <style type="text/css">
                    <![CDATA[
                    .fil0 {fill:#FFFFFF;fill-rule:nonzero}
                    ]]>
                </style>
            </defs>
            <g id="Camada_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"/>
                <path class="fil0" d="M239.34 185.33c0,10.27 -1.44,20.19 -4.14,29.58 -0.18,0.04 -0.44,0.02 -0.76,-0.02 -11.38,-2.6 -22.93,-5.38 -34.05,-8.96 -3.31,-1.05 -23.48,-8.09 -26.99,-10.4 0.06,-0.57 0.11,-1.13 0.11,-1.72 0,-7.78 -6.3,-14.06 -14.06,-14.06 -1.42,0 -2.77,0.2 -4.05,0.59 -0.28,-0.11 -32.05,-65.53 -39.52,-100.78 5.34,-0.83 10.84,-1.26 16.41,-1.26 12.88,0 25.24,2.29 36.69,6.45 0.76,0.26 1.5,0.55 2.27,0.85 0.96,0.37 1.92,0.76 2.86,1.18 6.1,2.62 11.93,5.73 17.4,9.37 0.76,0.52 1.55,1.05 2.31,1.59 0.63,0.44 1.24,0.87 1.85,1.31 0.48,0.35 0.96,0.7 1.42,1.07 0.46,0.33 0.89,0.65 1.31,1 0.68,0.52 1.35,1.07 2,1.61 0.81,0.65 1.61,1.33 2.4,2.05 0.65,0.57 1.31,1.15 1.96,1.74 21.26,19.58 34.59,47.63 34.59,78.8l0.01 0z"/>
                <path class="fil0" d="M207.44 261.53c-9.7,9.56 -21.22,17.28 -33.98,22.6 -3.33,-1.26 -8.58,-3.74 -10.49,-4.59 -15.87,-6.95 -31.7,-16.76 -46.62,-25.46 0,0 0,-0.02 -0.02,-0.02 0.61,-1.55 0.94,-3.23 0.94,-4.97 0,-7.8 -6.32,-14.13 -14.1,-14.13 -1.16,0 -2.29,0.13 -3.38,0.41l-0.02 0c-12.29,-29.95 -22.97,-60.89 -26.55,-93.32 0.48,-0.2 12.26,9.03 15.94,12.12 13.02,10.9 27.65,21.23 42.18,29.99 3.14,1.9 15.13,8.22 15.22,8.37 -0.2,0.9 -0.28,1.81 -0.28,2.77 0,7.76 6.3,14.06 14.08,14.06 1.74,0 3.4,-0.33 4.95,-0.91 0.04,0.02 26.22,33.89 39.81,50.44 0.76,0.95 0.12,0.15 2.35,2.63l0 0z"/>
                <path class="fil0" d="M123.68 291.97c-55.05,-4.4 -98.36,-50.48 -98.36,-106.66 0,-1.41 0.03,-2.81 0.08,-4.21 18.76,23.26 40.02,44.29 63.62,62.52 -0.13,0.37 -0.23,0.74 -0.35,1.11 -0.32,1.2 -0.5,2.44 -0.5,3.75 0,7.78 6.3,14.1 14.11,14.1 1.04,0 2.07,-0.11 3.05,-0.35l18.36 29.73 0 0z"/>
                <path class="fil0" d="M148.73 184.28c-1.11,-0.59 -35.64,-19.53 -54.39,-35.23 -2.03,-1.68 -10.38,-8.94 -14.06,-13.1 1.37,-2.27 2.16,-4.9 2.16,-7.74 0,-7.43 -5.43,-13.62 -12.53,-14.78l0 -0.02c0,0 0.5,-15.61 1.18,-16.07 1.83,-1.26 3.71,-2.48 5.62,-3.66 7.85,-4.75 16.37,-8.5 25.37,-11.12 0.37,-0.11 0.74,-0.22 1.11,-0.31 1.77,-0.46 3.53,-0.89 5.32,-1.31 8.5,35.75 39.74,102.24 40.22,103.33l0 0z"/>
                <path class="fil0" d="M93.1 237.76c-19.19,-14.89 -37.7,-31 -53.08,-49.9 -2.27,-2.79 -12.69,-16.87 -13.38,-19.01 -0.01,-0.03 -0.02,-0.08 -0.03,-0.12l0 -0c3.15,-20.26 11.98,-38.63 24.81,-53.44 0.8,0.64 3.92,3.29 4.17,3.76 -1.61,2.38 -3.25,6.06 -3.25,9.18 0,7.57 5.63,13.84 12.9,14.85 3.99,32.88 15.11,64.42 27.86,94.69l-0 0z"/>
                <path class="fil0" d="M165.32 287.11c-10.31,3.36 -21.3,5.21 -32.72,5.28l-20.86 -33.44 53.58 28.16 0 0z"/>
                <path class="fil0" d="M62.87 103.9c-1.02,10.19 0.02,-0.2 -1.05,10.4l-5.04 -4.78c1.96,-1.95 3.99,-3.83 6.09,-5.62z"/>
                <path class="fil0" d="M232.83 222.14c-4.62,12.61 -11.56,24.11 -20.27,33.97l-0.2 -0.22c-8.7,-8.98 -16.96,-18.53 -24.72,-28.33 -4.89,-6.22 -16.92,-23.89 -17.55,-24.85 1.26,0.44 41.42,14.63 62.52,19.41l0.22 0.03 -0 -0z"/>
                <path class="fil0" d="M258.76 26.7l-58.26 31.56 0 33.99 -0.3 0c-18.47,-15.17 -42.11,-24.28 -67.87,-24.28 -25.77,0 -49.32,9.07 -67.77,24.19l0 -33.9 -58.26 -12.14 126.24 -46.12 126.24 26.7z"/>
                <circle class="fil0" transform="matrix(0.020558 -0.126649 0.126649 0.020558 6.28641 46.1313)" r="21.02"/>
                <path class="fil0" d="M3.67 93.09c0.17,-2.15 1.25,-5.23 1.25,-5.23l-4.92 4c3.57,-6.13 8.63,-16.16 8.98,-23.56 0.31,-6.68 -2.68,-21.52 -2.68,-21.52 0,0 5.85,11.6 7.13,17.02 2.55,10.78 -1.77,21.9 -9.77,29.29l0 0z"/>
            </g>
        </svg>
    </a>
    <nav class="nav">
        <button class="hamburguer"></button>
        <ul class="nav-list">
            <li><a href="${urls}index.html">Página inicial</a></li>
            <li><a href="${urls}#eixosTutorados">Eixos</a></li>
            <li><a href="${urls}#tutores">Tutores</a></li>
            <li><a href="${urls}#material">Material Didático</a></li>
        </ul>
    </nav>
`;

// Criando um novo elemento filho
const novoElemento = document.createElement('div');
novoElemento.style.width = "100%";

// Obtenha a altura COMPUTADA do cabeçalho.
// offsetHeight inclui padding e borda (se houver),
// o que geralmente é o que você quer para ocupar o espaço.
const headerHeight = header.offsetHeight; 
novoElemento.style.height = `${headerHeight}px`; // Define a altura da div com base na altura real do cabeçalho

novoElemento.style.transition = "all 0.3s";
novoElemento.style.backgroundColor = "#089dd3";

// Selecionando a div body e adicionando o novo elemento como primeiro filho
const minhaDiv = document.querySelector('body');
minhaDiv.prepend(novoElemento);


const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () =>
nav.classList.toggle("active"));

// if(urls==""){
//     const main = document.querySelector('.cards');
//     const child = document.querySelectorAll('.card');
    
//     esvSlide(main, child, {
//         arrows: true,
//         asNavFor: false,
//         bullets: false,
//         auxlay: false,
//         cssEase: false,
//         bullletsAling: 'center',
//         centerPadding: 20,
//         sliderMargin: 50,
//         slidesToShow: 3,
//         infinite: true,
//         speed: 2000,
//         autoplaySpeed: 0,
//         autoplayReverse: false,
//         responsive: [{
//             point: 1000,
//             seg: {
//                 autoplayReverse: false,
//                 bullletsAling: 'left',
//                 slidesToShow: 2,
//                 infinite: true,
//                 autoPlay: false,
//                 arrows: true
//             }
//         },{
//             point: 850,
//             seg:{
//                 arrows: false,
//                 slidesToShow: 1,
//                 centerPadding: 0,
//                 infinite: true,
//                 sliderMargin: 0,
//                 bullets: true,
//                 bullletsAling: 'center',
//                 touch: true
//             }
//         }]
//     });
    
// }




// ... (código existente no seu script.js antes deste bloco if(urls=="") ) ...

if(urls==""){
    // CHAMADA PARA O SLIDER DE DÚVIDAS FREQUENTES (EXISTENTE com esvSlide)
    // Mantenha este bloco SE você ainda usa o esvSlide para as "Dúvidas Frequentes".
    // Se não, pode remover TODO este bloco 'const mainDuvidas = ...'
    const mainDuvidas = document.querySelector('.cards');
    const childDuvidas = document.querySelectorAll('.card');
    
    if (mainDuvidas && childDuvidas.length > 0) {
        esvSlide(mainDuvidas, childDuvidas, {
            arrows: true,
            asNavFor: false,
            bullets: false,
            autoPlay: false,
            cssEase: false,
            bullletsAling: 'center',
            centerPadding: 20,
            sliderMargin: 50,
            slidesToShow: 3,
            infinite: true,
            speed: 2000,
            autoplaySpeed: 0,
            autoplayReverse: false,
            responsive: [{
                point: 1000,
                seg: {
                    autoplayReverse: false,
                    bullletsAling: 'left',
                    slidesToShow: 2,
                    infinite: true,
                    autoPlay: false,
                    arrows: true
                }
            },{
                point: 850,
                seg:{
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: 0,
                    infinite: true,
                    sliderMargin: 0,
                    bullets: true,
                    bullletsAling: 'center',
                    touch: true
                }
            }]
        });
    }

    

// NOVA INICIALIZAÇÃO DO CARROSSEL DE TUTORES COM SWIPER.JS
const tutoresSwiperElement = document.querySelector('.tutores-swiper');
if (tutoresSwiperElement) {
    const swiper = new Swiper('.tutores-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // Adicione um breakpoint para telas muito pequenas
            0: { // A partir de 0px (ou seja, o padrão para o menor)
                slidesPerView: 1,
                spaceBetween: 10,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
}}
