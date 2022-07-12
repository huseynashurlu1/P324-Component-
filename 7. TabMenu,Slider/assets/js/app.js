/*
let buttons = document.querySelectorAll('.buttons button');
let divs = document.querySelectorAll('.tab-content div');

for(let btn of buttons) {
    btn.addEventListener('click', function() {
        let active = document.querySelector('.active');
        active.classList.remove('active');
        this.classList.add('active');

        let index = this.getAttribute('id');
        // console.log(index);

        for(let div of divs) {
            if(div.getAttribute('id') === index) {
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }

        }
    })
}
*/



// var mySlider = [
//     'assets/images/image1.jpg',
//     'assets/images/image2.jpg',
//     'assets/images/image3.png'
// ]

// let currentSlide = 0;
// let img = document.querySelector('.slider img');
// img.src = mySlider[currentSlide]

// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')


// next.addEventListener('click',function() {
//     currentSlide++;
//     if(currentSlide > mySlider.length - 1) {
//         currentSlide = 0
//     }
//     img.src = mySlider[currentSlide];
// })

// prev.addEventListener('click',function() {
//     currentSlide--;
//     if(currentSlide === -1) {
//         currentSlide = mySlider.length - 1;
//     }
//     img.src = mySlider[currentSlide]
// })


// function AutoPlay() {
//     currentSlide++;
//     if(currentSlide > mySlider.length - 1) {
//         currentSlide = 0
//     }
//     img.src = mySlider[currentSlide];
// }
// setInterval(() => {
//     AutoPlay();
// }, 1500);


// AOS.init();


// $('.box').tilt({
//     glare: true,
//     maxGlare: 1
// })

/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 100,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
  
  
//   /* ---- stats.js config ---- */
  
//   var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);


function Read() {
    let value = document.querySelector('#input').value;
    let Speech = new SpeechSynthesisUtterance(value);
    Speech.volume = 5
    Speech.pitch = 1.5
    Speech.rate = 0.5;
    window.speechSynthesis.speak(Speech);
}

function Generate() {
    let value = document.querySelector('#input').value;
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${value}&size=100x100`

    document.querySelector('#photo').src = url
}


const Person = {
    ad: "Xelilbey",
    yas:25
}



Person.unvan = 'Baku'
console.log(Object.entries(Person));