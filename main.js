const basic = document.querySelector('#basic');

document.querySelector('#bottom-menu').addEventListener('click', () => {
	basic.classList.toggle('active');
});

const controlWindow = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

controlWindow();

window.addEventListener('resize', () => {
	controlWindow();
});