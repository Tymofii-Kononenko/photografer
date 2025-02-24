import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.ac-faq-container', {
    duration: 600,

    elementClass: 'faq-item',
    triggerClass: 'ac-title-faq',
    panelClass: 'faq-content',
    activeClass: 'is-active-faq',

    showMultiple: true,
})