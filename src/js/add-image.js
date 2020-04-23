import Patata from '../static/images/patata.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'patata';
  img.width = '300';
  img.src = Patata;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;