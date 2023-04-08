// JavaScript Document

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionIcon = header.querySelector('.accordion-icon');
    const accordionContent = header.nextElementSibling;
    
    accordionIcon.classList.toggle('active');
    accordionContent.classList.toggle('active');
  });
});
