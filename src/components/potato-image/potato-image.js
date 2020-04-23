import Patata from '../../static/images/patata.jpg';
import './potato-image.scss';

class PotatoImage {
  render() {
    const img = document.createElement('img');
    img.src = Patata;
    img.alt = 'Patata';
    img.classList.add('potato-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default PotatoImage;