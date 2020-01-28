const basic = document.querySelector('#basic');

document.querySelector('#bottom-menu').addEventListener('click', () => {
	basic.classList.toggle('active');
});

const controlWindow = () => {
	if(window.innerWidth <= 768){
		basic.classList.remove('active');
	} else {
		basic.classList.add('active');
	}
}

controlWindow();

window.addEventListener('resize', () => {
	controlWindow();
});