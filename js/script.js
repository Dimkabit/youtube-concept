const swiper = new Swiper('.chanal-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1400: {
			slidesPerView: 5
		},
		1300: {
			slidesPerView: 4
		},
		1100: {
			slidesPerView: 3
		},
		800: {
			slidesPerView: 2
		},
	},
	// Navigation arrows
	navigation: {
	  nextEl: '.channel-button-next',
	  prevEl: '.channel-button-prev',
	},
 
 });

 const recommendedSlider = new Swiper('.recommended-slider', {
	 loop: true,
	 slidesPerView: 1,
	 spaceBetween: 20,
	 breakpoints: {
		1600: {
			slidesPerView: 3
		},
		1100: {
			slidesPerView: 2
		},

	 },
	 navigation: {
		 nextEl: '.recommended-button-next',
		 prevEl: '.recommended-button-prev',
	 },
 });

 const recommendedChannalSlider = new Swiper('.recomended-channel-slider', {
	
	 loop: true,
	 slidesPerView: 1,
	 spaceBetween: 20,
	 breakpoints: {
		 1900: {
			 slidesPerView: 6
		 },
		 1400: {
			 slidesPerView: 5
		 },
		 1300: {
			 slidesPerView: 4
		 },
		 1100: {
			 slidesPerView: 3
		 },
		 800: {
			 slidesPerView: 2
		 },
	 },
	 navigation: {
		 nextEl: '.recomended-channel-button-next',
		 prevEl: '.recomended-channel-buuton-prev',
	 },
 });
 

 const searchBtn = document.querySelector('.mobile-search');
 const mobileSearch = document.querySelector('.input-group');
 searchBtn.addEventListener('click', () => {
		mobileSearch.classList.toggle("is-open");
 });

 if (document.documentElement.scrollWidth <= 640) {
	swiper.destroy();
	recommendedSlider.destroy();
	recommendedChannalSlider.destroy();
 };