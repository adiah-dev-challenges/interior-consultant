const nav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('nav-toggle');
const navIcon = document.getElementById('toggle-icon');

navToggle.onclick = () => {
	const visibility = nav.dataset.visible

	if (visibility === 'false') {
		nav.dataset.visible = 'true';
		navToggle.setAttribute('aria-expanded', true);
		navIcon.innerHTML = 'close';
	} else {
		nav.dataset.visible = 'false';
		navToggle.setAttribute('aria-expanded', false);
		navIcon.innerHTML = 'menu';
	}
}