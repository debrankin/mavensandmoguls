var scrollEffects = {"revealFX1":{"effect":"zoom","parameters":{"start":0,"opacity":"0.10"},"over":"2000ms","defaultDelay":"100ms","easing":"quick-in","viewportFactor":"0.30","preset":"2","init":false},"revealFX2":{"effect":"slide","parameters":{"from":"bottom","distance":"200px","opacity":0},"over":"1000ms","defaultDelay":"0ms","easing":"ease-out-circ","viewportFactor":"0.30","preset":"8","init":false}};







(function($) {



    $(document).ready(function(){



		$('.revealFX').each(function() { 

			for(var prop in scrollEffects){

				if($(this).hasClass(prop)){

					$(this).attr('data-scrollReveal' , prop);

				}

			}

		});



		setTimeout(function() { 

			if(!window.isMobileDevice && !window.isTabletDevice){

				window.extendScrollReveal.init();

			}

		}, 1);



    });





}(menus_jQuery));