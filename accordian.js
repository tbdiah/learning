const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    console.log('Accordion header clicked!');
    console.log('this:', this);
    const accordionItem = this.parentNode;
    console.log('accordionItem:', accordionItem);
    const accordionIcon = this.querySelector('.accordion-icon');
    console.log('accordionIcon:', accordionIcon);
    const accordionContent = accordionItem.querySelector('.accordion-content');
    console.log('accordionContent:', accordionContent);
    
    accordionIcon.classList.toggle('active');
    accordionContent.classList.toggle('active');
  });
});

document.addEventListener('fullscreenchange', () => {
  const activeAccordionIcon = document.querySelector('.accordion-icon.active');
  if (activeAccordionIcon) {
    activeAccordionIcon.classList.remove('active');
  }
  const activeAccordionContent = document.querySelector('.accordion-content.active');
  if (activeAccordionContent) {
    activeAccordionContent.classList.remove('active');
  }
});
