let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('nav');

menuIcon.addEventListener('click', ()=>{
	menu.classList.toggle('oculto');
});

let menuItems = document.querySelectorAll('.menu li');

menuItems.forEach((item)=>{
	item.addEventListener('click', ()=>{

		for(i=0; i < menuItems.length; i++){
			if(menuItems[i].className === 'active'){
				menuItems[i].classList.remove('active');
			}
		}
		
		item.classList.add('active');
	});
});
