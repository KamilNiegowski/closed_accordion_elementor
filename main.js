window.addEventListener('load', function() {
let accordionsElems = document.querySelectorAll('.elementor-widget-accordion')
accordionsElems.forEach(e => {
let activeTitle = e.querySelector('.elementor-tab-title.elementor-active');
let activeContent = e.querySelector('.elementor-tab-content.elementor-active')
jQuery(activeContent).slideUp();
activeTitle.classList.remove('elementor-active');
activeContent.classList.remove('elementor-active');
activeContent.setAttribute('hidden','hidden');
activeTitle.setAttribute('aria-expanded',false);
activeTitle.setAttribute('aria-selected',false);
activeTitle.setAttribute('tabindex',-1);
});
});
