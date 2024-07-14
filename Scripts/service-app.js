import { service } from "./Data/service-data.js";

export let link = JSON.stringify(localStorage.getItem('link')) || 'iopugsbjvbx';

export function saveLink() {
  localStorage.setItem('link', JSON.stringify(link))
}


document.querySelector('.services-cont').innerHTML = service.map(({name, id, detail})=> {
  return `<div class="service" data-name="${name}">
    <div class="service-content-cont">
      <div class="service-content">
        <h1>${name}</h1>
        <div class="service-description">
        ${detail}
        </div>
        <div class="service-options">
          <span>SEE ARTICLE</span>
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
  `
}).join('')

document.querySelectorAll('.service')
  .forEach(elem => {
    elem.addEventListener('click', () => {
      const id = elem.dataset.name
      window.location.href = 'service-link.html'
      link = name
      saveLink()

      console.log(link);
    })
  })