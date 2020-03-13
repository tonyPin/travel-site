import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

new ClientArea()
let stickyHeader = new StickyHeader()
 new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
 new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

let mobileMenu = new MobileMenu();
let modal

//loads in the code at the right moment i.e the Modal overlay

document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    if(typeof modal == 'undefined'){
      import(/*webpackChunkName: "modal"*/'./modules/Modal').then(x => {
        modal =  new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log('there was a problem.'))
    }else {
      modal.openTheModal()
    }
  })
})

if (module.hot){
  module.hot.accept()
}
