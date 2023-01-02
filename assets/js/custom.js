/**
  
* Template Name: Jhon Smith | One Page HTML Portfolio Template
* Version: 1.0.0
* Author: Bashir Rased
* Author URL: www.bashir-rased.com
* Email: info@bashir-rased.com

**/

/*============================
Table of JS Content Start Here
==============================
	01.	Preloader
	02. Nice Scrollbar
	03. Theme Color Section
		3.1. Theme Color Change
		3.2. Theme Color Option Box Hide/Show
	04. Header Menu Section
		4.1. Header Fixed Menu
		4.2. Active Menu Click Highlight
		4.3. Active Menu Scroll Highlight
		4.4. Mobile Menu Toggle
		4.5. Menu Resize Open/Close
	05. Skill Bar Animation
	06. CountTo Section
	07. Portfolio Section
		7.1. Isotope Masonry
		7.2. Isotope Filtering
		7.3. Active Filter Menu Highlight
		7.4. FancyApps 3 Plugin Active
	08. Testimonials Section
	09. Scroll to Top
		9.1. Scroll To Top Button Hide/Show
		9.2. Scroll To Top Button Click 
	10. Link Smooth Effect
============================
Table of JS Content End Here
==========================*/

(function(jQuery){
	'use strict';
	
	/*=============================
	01. Preloader jQuery Start Here
	=============================*/
	jQuery(window).on("load",function (){
		jQuery(".sk-cube-grid").delay(100).fadeOut(),
		setTimeout(function(){jQuery(".pre-loader").addClass("loading-end"),
		setTimeout(function(){jQuery(".pre-loader").hide()},1500)},800)
	});
	/*===========================
	01. Preloader jQuery End Here
	===========================*/

	jQuery(document).ready(function(){
		
		/*==================================
		02. Nice Scrollbar jQuery Start Here
		==================================*/
		jQuery("body").niceScroll({
			cursorwidth:8,
			cursorcolor:'#0d65ed',
			cursorborder: "none",
			cursorborderradius:15,
			zindex: 9999,
			autohidemode: false,
			cursorminheight:200,
		});
		/*================================
		02. Nice Scrollbar jQuery End Here
		================================*/
		
		/*=======================================
		03. Theme Color Section jQuery Start Here
		=======================================*/
		/*===== 3.1. Theme Color Change Start Here =====*/
		jQuery(".rb-color-1" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/colors/blue-deep.css" );
			return false;
		});
			
		jQuery(".rb-color-2" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/colors/blue-light.css" );
			return false;
		});
		
		jQuery(".rb-color-3" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/colors/purple.css" );
			return false;
		});
		
		jQuery(".rb-color-4" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/colors/green.css" );
			return false;
		});
			
		jQuery(".rb-color-5" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/colors/yellow.css" );
			return false;
		});
		
		jQuery(".rb-color-6" ).click(function(){
			jQuery("#colors" ).attr("href", "assets/css/colors/orange.css" );
			return false;
		});
		/*===== 3.1. Theme Color Change End Here =====*/
		
		/*===== 3.2. Theme Color Option Box Hide/Show Start Here =====*/
		jQuery('.rb-color-btn').click(function(){
			if(jQuery('.rb-theme-colors').hasClass("rb-hide-show")){
				jQuery('.rb-theme-colors').animate({"left":"-160px"},function(){
					jQuery('.rb-theme-colors').toggleClass("rb-hide-show");
				});						
			}else{
				jQuery('.rb-theme-colors').animate({"left":"0"},
				function(){
					jQuery('.rb-theme-colors').toggleClass("rb-hide-show");
				});			
			} 
		});
		/*===== 3.2. Theme Color Option Box Hide/Show End Here =====*/
		/*=====================================
		03. Theme Color Section jQuery End Here
		=====================================*/
		
		/*=======================================
		04. Header Menu Section jQuery Start Here
		=======================================*/
		/*===== 4.1. Header Fixed Menu Start Here =====*/
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop() >= 50) {
				jQuery('.rb-header-top').addClass('rb-header-fixed');
			}
			else {
				jQuery('.rb-header-top').removeClass('rb-header-fixed');
			}
		});
		/*===== 4.1. Header Fixed Menu End Here =====*/
		
		/*===== 4.2. Active Menu Click Highlight jQuery Start Here =====*/
		var sidenav = jQuery('.rb-desktop-menu a');
		jQuery(sidenav).on('click', '.rb-desktop-menu a', function() {
			jQuery(this).addClass('rb-header-active-menu').siblings().removeClass('rb-header-active-menu');		
		});
		/*===== 4.2. Active Menu Click Highlight jQuery End Here =====*/
		
		/*===== 4.3. Active Menu Scroll Highlight jQuery Start Here =====*/
		jQuery(window).on('scroll', function() {
			jQuery('.rb-scroll-menu').each(function() {
				if (jQuery(window).scrollTop() >= jQuery(this).position().top - 50) {
					var id = jQuery(this).attr('id');
					jQuery('.rb-desktop-menu a').removeClass('rb-header-active-menu');
					jQuery('.rb-desktop-menu a[href*=\\#' + id + ']').addClass('rb-header-active-menu');
				}
			});
		});
		/*===== 4.3. Active Menu Scroll Highlight jQuery End Here =====*/
		
		/*===== 4.4. Mobile Menu Toggle jQuery Start Here =====*/
		jQuery(".rb-mobile-menu-icon").click(function(){
			jQuery(".rb-desktop-menu").slideToggle();
		});
		/*===== 4.4. Mobile Menu Toggle jQuery End Here =====*/
		
		/*===== 4.5. Menu Resize Open/Close jQuery Start Here =====*/
		jQuery(window).resize(function(){
			var RBMenu = jQuery(window).width();
			if(RBMenu > 991){
				jQuery(".rb-desktop-menu").show();				
			}
			else{
				jQuery(".rb-desktop-menu").hide();			
			}
		});
		/*===== 4.5. Menu Resize Open/Close jQuery End Here =====*/
		/*=====================================
		04. Header Menu Section jQuery End Here
		=====================================*/
		
		/*=======================================
		05. Skill Bar Animation jQuery Start Here
		=======================================*/
		jQuery('.rb-skill-bar').each(function() {
			jQuery(this).find('.rb-skill-animation').animate({ width: jQuery(this).attr('data-percent') }, 3000);
		});
		/*=====================================
		05. Skill Bar Animation jQuery End Here
		=====================================*/
		
		/*===================================
		06. CountTo Section jQuery Start Here
		===================================*/
		jQuery(".rb-countup").appear(function() {
			jQuery(".rb-countup-number").countTo();
		}, {
			accX: 0,
			accY: -350
		});
		/*=================================
		06. CountTo Section jQuery End Here
		=================================*/
		
		/*=====================================
		07. Portfolio Section jQuery Start Here
		=====================================*/
		jQuery('#container').imagesLoaded( function() {
			/*===== 7.1. Isotope Masonry Start Here =====*/
			var jQuerygrid = jQuery('.rb-portfolio-grid').isotope({
			  itemSelector: '.rb-portfolio-item',
			  percentPosition: true,
			  masonry: {
				columnWidth: 1
			  }
			});
			/*===== 7.1. Isotope Masonry End Here =====*/
		
			/*===== 7.2. Isotope Filtering Start Here =====*/
			jQuery('.rb-portfolio-menu ul').on( 'click', 'li', function() {
			  var filterValue = jQuery(this).attr('data-filter');
			  jQuerygrid.isotope({ filter: filterValue });
			});	
			/*===== 7.2. Isotope Filtering End Here =====*/
		
			/*===== 7.3. Active Filter Menu Highlight Start Here =====*/
			jQuery('.rb-portfolio-menu li').on('click', function(event){
				jQuery(this).siblings('.rb-active-portfolio').removeClass('rb-active-portfolio');
				jQuery(this).addClass('rb-active-portfolio');
				event.preventDefault();
			});		
			/*===== 7.3. Active Filter Menu Highlight End Here =====*/
		
			/*===== 7.4. FancyApps 3 Plugin Active Start Here =====*/
			jQuery('[data-fancybox]').fancybox({
				protect: true,
				loop: true,			  
				buttons: [
					'zoom',
					'close'
				],
				transitionDuration: 1500,
			});
			/*===== 7.4. FancyApps 3 Plugin Active End Here =====*/
		});		
		/*===================================
		07. Portfolio Section jQuery End Here
		===================================*/
		
		/*========================================
		08. Testimonials Section jQuery Start Here
		========================================*/
		jQuery(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
		});
		/*======================================
		08. Testimonials Section jQuery End Here
		======================================*/
		
		/*========================================
		09. Scroll To Top Button jQuery Start Here
		========================================*/		
		/*===== 9.1. Scroll To Top Button Hide/Show Start Here =====*/
		jQuery(window).scroll(function(){		  
		  var RBScroll = jQuery(window).scrollTop();		  
		  if( RBScroll > 100 ){
			  jQuery(".rb-scroll-to-top").fadeIn();
		  }else {
			  jQuery(".rb-scroll-to-top").fadeOut();
		  }
		});
		/*===== 9.1. Scroll To Top Button Hide/Show End Here =====*/
		
		/*===== 9.2. Scroll To Top Button Click Effect Start Here =====*/
		jQuery(".rb-scroll-to-top").on('click', function(){
			jQuery("html, body").animate({'scrollTop' : 0}, 3000);
			return false;
		});
		/*===== 9.2. Scroll To Top Button Click Effect End Here =====*/
		/*======================================
		09. Scroll To Top Button jQuery End Here
		======================================*/
		
		/*======================================
		10. Link Smooth Effect jQuery Start Here
		======================================*/
		jQuery('a').on("click", function(e) {
			var anchor = jQuery(this);
			jQuery('html, body').stop().animate({
				scrollTop: jQuery(anchor.attr('href')).offset().top
			}, 3000);
			e.preventDefault();
		});
		/*====================================
		10. Link Smooth Effect jQuery End Here
		====================================*/
		
	});

}(jQuery));