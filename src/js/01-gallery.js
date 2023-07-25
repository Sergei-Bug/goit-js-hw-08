import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  wrapper: document.querySelector('.gallery'),
};

const gellaryItemsEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a></li>`;
  })
  .join('');

refs.wrapper.insertAdjacentHTML('beforeend', gellaryItemsEl);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.wrapper.addEventListener('click', onClickGellaryItem);

function onClickGellaryItem(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}
