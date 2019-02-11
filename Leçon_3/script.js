'use strict';


// document.cookie = 'lang=fr';
// // Vérifiez si l'objet SessionStorage est supporté par le navigateur.
// document.cookie = 'previewSeen=true;expires='+new Date ('2019-02-12')
// // Créez une entrée posts égale à [{id: 0}, {id: 1}, {id: 2}].
// docCookies.setItem('test','test',new Date('2019-12-31'))
// // Créez une entrée userId égale au nombre 123.
// docCookies.setItem('userId',123);
// // Récupérez posts.
// console.log(docCookies.getItem('userId'),typeof docCookies.getItem('userId'));
// // Modifiez cette entrée à [{id: 321}, {id: 1}, {id: 2}].
// docCookies.setItem('userId',321);
// // Supprimez userId du SessionStorage.
// docCookies.removeItem('userId')


// const user = {
//     id: 1,
//     name:'Thibaud'
// }

// docCookies.setItem('user', JSON.stringify(user));

// const myObj = docCookies.getItem('user');
// console.log('myObj',myObj);
// console.log('myObj parsed', JSON.parse(myObj));

// if (localStorage) {
//     localStorage.setItem('greeting', 'Helloworld');
//     localStorage.setItem('greeting', 'Helloworld');
//     localStorage.setItem('greeting', 'Helloworld');
//     console.log(localStorage.getItem('greeting'));
//     localStorage.setItem('greeting','welcome');
//     localStorage.removeItem('greeting');

//     localStorage.clear();
// }

// if (navigator.geolocation){
//        const successCallback = (position) => {
//                 console.log('position', position); 
//                 const link = document.createElement('a');
                
//                 link.setAttribute('href', 'https://www.latlong.net/c/?lat=${pisition.coords.latitude}&long=${position.coords.latitude}')

//                 link.setAttribute('target', '_blank');
//                 link.innerText = 'Click in the blakc hole daddy';

//                 document.querySelector('body').appendChild(link);
//         }  
//         const errorCallBack = (error) => {
//             console.log('error', error)
//             const GEO_ERRORS = {
//             PERMISSION_DENIED: 1,
//             POSITION_UNAVAILABLE: 2,
//             TIMEOUT: 3
//         } 
//         if (error.code === GEO_ERRORS.PERMISSION_DENIED) {
//             alert('Share your position, steuplé')
//         }
//       }
//         navigator.geolocation.getCurrentPosition(successCallback,errorCallBack)
//     }

// 'use strict';

// const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
// const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
// const dropZone = document.querySelector('#js-drop-to');
// const filesList = document.querySelector('#js-file-list');

// dropZone.addEventListener('USE_CORRECT_EVENT_HERE', (e) => onDragOver(e));
// dropZone.addEventListener('USE_CORRECT_EVENT_HERE', (e) => onDrop(e));
// dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(true));
// dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(false));

// function onDragOver(event) {
//   event.stopPropagation();
//   event.preventDefault();
// }

// function onDrop(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   filesList.innerHTML = '';
//   const filesUploaded = Array.from(e.dataTransfer.files);
//   filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
//   changeDropZoneState(false);
// }

// function changeDropZoneState(isDragging) {
//   isDragging ? 
//     dropZone.classList.add('js-is-dragged-over') :
//     dropZone.classList.remove('js-is-dragged-over');
// }

// function handleUploadedFile(file, index) {
//   const error = getUploadError(file);
//   error ?
//     console.warn(`"${file.name}" Upload Error: ${error}`) :
//     filesList.appendChild(createListEl(file, index));
// }

// function createListEl(file, index) {
//   const el = document.createElement('li');
//   el.setAttribute('id', 'file-list-item-'+index);
//   el.className = 'list-group-item file-list-item';

//   // add image
//   const elPreview = document.createElement('img');
//   elPreview.classList.add('file-list-item-preview');
//   el.appendChild(elPreview);
//   renderImage(file, 'file-list-item-'+index);

//   // add name
//   const elName = document.createElement('p');
//   elName.classList.add('file-list-item-name');
//   elName.innerText = file.name;
//   el.appendChild(elName);

//   return el;
// }

// function renderImage(file, elId) {
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const img = document.querySelector(`#${elId} img`);
//     img.setAttribute('src', e.target.result);
//   }
//   reader.readAsDataURL(file);
// }

// function getUploadError(file) {
//   if (file.size > MAX_IMG_SIZE) {
//     return 'Your image is too big';
//   } else if (!ACCEPTED_FORMATS.includes(file.type)) {
//     return 'Image of this format is not accepted';
//   } else {
//     return;
//   }
// }
    
// const dropZone = document.querySelector('#js-drop-to');
// const draggable = document.querySelector('#js-draggable');

// draggable.addEventListener('dragstart',event =>{
//     event.dataTransfer.setData('text',event.target.id);
// });

// dropZone.addEventListener('dragover', event => {
//     event.preventDefault();
// })

// dropZone.addEventListener('drop', event => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData('text');
//     const el = document.getElementById(data);
//     dropZone.appendChild(el);
// })

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(126, 131, 145, 30);
ctx.fillRect(155, 52, 90, 100);

// EYES
ctx.beginPath();
ctx.arc(176, 176, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(216, 176, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(172, 170, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(212, 170, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//ARM
ctx.lineWidth = 8;
ctx.beginPath();
ctx.moveTo(130,309);
ctx.lineTo(41,225);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(266,310);
ctx.lineTo(359,225);
ctx.stroke();

//NOSE
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(198,188);
ctx.lineTo(125,207);
ctx.lineTo(197,209);
ctx.quadraticCurveTo(207,200,197,188);
ctx.fill();
ctx.stroke();

//scarf
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(126, 231, 145, 40);
ctx.fillRect(210, 251, 25, 100);

//smoke
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(124, 222, 50, 8);