const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display mobile menu

const mobileMenu = () => {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// show active menu based on the current page

const highlightMenu = () => {
	const elem = document.querySelector('.highlight')
	const homeMenu = document.querySelector('#home-page')
	const aboutMenu = document.querySelector('#about-page')
	const productMenu = document.querySelector('#product-page')
	
	var path = window.location.pathname;
	var page = path.split("/").pop();

	if (page === 'index.html') {
		homeMenu.classList.add('highlight')
	}

	if (page === 'product.html') {
		productMenu.classList.add('highlight')
		console.log(page)
	}

	else if (page === 'aboutus.html') {
		aboutMenu.classList.add('highlight')
	}



	
	/*


	

	//adds 'highlight' class to menu items
	if(window.innerWidth > 960 && scrollPos < 600) {
		homeMenu.classList.add('highlight')
		aboutMenu.classList.remove('highlight')
		return
	}
	else if (window.innerWidth > 960 && scrollPos < 1200) {
		aboutMenu.classList.add('highlight')
		homeMenu.classList.remove('highlight')
		productMenu.classList.remove('highlight')
		return
	}
	else if (window.innerWidth > 960 && scrollPos < 2000) {
		productMenu.classList.add('highlight')
		aboutMenu.classList.remove('highlight')
		teamMenu.classList.remove('highlight')
		return
	}
	else if (window.innerWidth > 960 && scrollPos < 3000) {
		productMenu.classList.remove('highlight')
		teamMenu.classList.add('highlight')
		return
	}


	if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
		elem.classList.remove('highlight')
	} */
	
}





window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// close mobile menu when clickimg on a menu item
const hideMobileMenu = () => {
	const menuBars = document.querySelector('.is-active')
	if (window.innerWidth <= 768 && menuBars) {
		menu.classList.toggle('is-active')
		menuLinks.classList.remove('active')
	}
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)



// link to typeform page on clicking button
document.getElementById("early-access").onclick = function () {
        location.href = "https://k86woi8fkbf.typeform.com/to/ypEuXmKH";
    };

document.getElementById("early-access2").onclick = function () {
        location.href = "https://k86woi8fkbf.typeform.com/to/ypEuXmKH";
};


document.getElementById("early-access-footer").onclick = function () {
        location.href = "https://k86woi8fkbf.typeform.com/to/ypEuXmKH";
};



