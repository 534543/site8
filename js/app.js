function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
document.querySelector('.header_burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.menu_mobile').classList.toggle('active');
})


window.onload = () => {
    setTimeout(() =>{
        document.querySelector('.menu_line').style.width = 100 + '%';
        document.querySelector('.menu_line2').style.width = 100 + '%';
    },200)
}



/*

const gallery = document.querySelector('.gallery');
const galleryResize = document.querySelector('.gallery__resize');
const galleryBefore = document.querySelector('#before');
const galleryAfter = document.querySelector('#after');


gallery.addEventListener('mousemove',(event) => {
    let x = event.offsetX;
    galleryResize.style.width = x + 'px';
})

gallery.addEventListener('mouseleave',(event) => {
    galleryResize.style.width = 50 + '%';
})*/
/*let wrapper = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page',{
  
    wrapperClass: 'page__wrapper',
    slideClass: 'page_screen',

    direction: 'vertical',

    slidesPerView:1,

    parallax:true,

    keyboard:{
        enabled:true,

        onlyInViewport:true,

        pageUpDown:true,
    },

    mousewheel:{
        sensitivity:1,
        releaseOnEdges: false,
    },

    watchOverflow:true,

    speed:800,
    observer:true,

    observerParents:true,
    observeSlideChildren:true,
    pagination:{
        el:'.page__pagination',
        type:'bullets',
        bulletClass:"page__bullet",
        bulletActiveClass:"page__bullet_active",
        clickable: true,
    },
    scrollbar:{
        el:'.page__scroll',
        dragClass:"page__drag-scroll",
        draggable:true
    },
    init:false,
    
    on:{
        init:function(){
            wrapper.classList.add('_loaded');
            setScrollType();
            
        },
        resize:function(){
            setScrollType();
        }
    },
    
});


function setScrollType(){
    if(wrapper.classList.contains('_free')){
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
        pageSlider.params.parallax = true;
       

    }

    let widthWindow = window.innerWidth;
   
    
    if(widthWindow < 770){
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        
        pageSlider.params.parallax = false;
    }
    /*for(let index = 0; index < pageSlider.slider.length; index ++){
        const pageSlide = pageSlider.slider[index];
        const pageSlideContent = pageSlide.querySelector('.screen_content');
        if(pageSlideContent){
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if(pageSlideContentHeight < window.innerHeight){
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;

                break;
            }
        }
    }*/
//}
//pageSlider.init();







const animItems = document.querySelectorAll('._anim-items');

if( animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animHeight / animStart;

            if(animHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if( (pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animHeight)){
                animItem.classList.add('_active');
            }else{
                //animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    
    
    setTimeout(() =>{
        animOnScroll();
    },500)
}

const windowWidth = window.innerWidth;

if(windowWidth < 768){
    
   let removeClassItems = document.querySelector('.page');
   console.log(removeClassItems.querySelectorAll('._anim-items'));
   //removeClassItems.forEach(el => {
    //el.classList.remove("_active");
    
   //})
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	
	pagination: {
        el: '.swiper-pagination',
		clickable: true,
    },
	 
 //slidesPerColumnFill: "row",
 breakpoints: {
	320: {
		
	},
	768: {
		slidesPerView: 1,
	
	
	},
	767: {
		slidesPerView: 1,
		
	},
	320: {
		slidesPerView: 1,
		
		
	},
	1268: {
		
	},
},


  });


  let swiper2 = new Swiper('.slider2', {
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 3,
			
		
		},
		320: {
			slidesPerView: 1,
		},
		
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });
