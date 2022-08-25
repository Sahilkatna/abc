/*// (function ($, Drupal) {
//     Drupal.behaviors.talawa = {
//         attach: function (context, settings) {
//
// /*
//             $('.gallery-upload .image-widget .preview .remove-image-btn', context).once('click', function () {
//                 alert("Yes");
//                 $(this).parent().find("button").trigger("click");
//             });
// */
//
//             $(function(){
//
//                 $('.gallery-upload-items .tb-column button').html('X');
//                 $(".gallery-upload .image-widget .preview").hover(function(){
//                         /*$((this).parent().attr('class'));
//                         $(this).find('td.tb-column button').show();*/
//                     }
//                     ,function(){
//                         /*$(this).find(".remove-image-btn").hide();
//                         $(this).closest('.gallery-upload-items table td.tb-column button').hide();*/
//                     }
//
//                 );
//             });
//
//            /* jQuery('.gallery-upload-items .tb-column button').onclick(function(){
//
//                 $($this).html('');
//                 $($this).css('backgorund-color','transparent');
//             });
//             jQuery(".gallery-upload .image-widget .preview button").on("click", function(){
//                 $(this).closest('td').attr('class');
//                 alert("Remove it "+$(this).closest('td').attr('class'));
//                 alert($(this).parent().find("button").html());
//
//             });*/
//             /*jQuery('.gallery-upload .image-widget .preview').mouseover(function() {
//
//                 jQuery(this).find("remove-image-btn").toggleClass('remove-btn-visible');
//
//                 *//*jQuery(sel_elemt+" .preview").on("click",function(){
//                         alert("remove button selected");
//                     }
//                 );*//*
//             });*/
//             jQuery('.image-widget .preview .remove-image').on('click', function(){
//                     alert("remove it");
//                     jQuery(this).trigger("click");
//                 }
//             );
//         }
//     };
// })(jQuery, Drupal);
//
//
// jQuery(document).ready(function() {
//  /*   alert(jQuery('.navbar-fixed-top').height());*/
//     if(jQuery( window ).width() < 767) {
//       /*  jQuery('section.slider').attr('style', 'margin-top:' + jQuery('.navbar-fixed-top').height() + 'px');*/
//     }
//     jQuery('.preview').on('click', function(){
//         }
//     );
//
//     jQuery('button.navbar__open-search-block').on('click', function(){
//         jQuery('.navbar-search').toggleClass('navbar-search-open');
//     });
//    /* jQuery('.owl-carousel').owlCarousel({
//         margin: 10,
//         autoWidth: true,
//         nav: true,
//         autoplay: false,
//         autoplayTimeout: 4000,
//         autoplayHoverPause: true,
//         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
//     })
//
// */
//     var max_height = 0;
//     max_height += jQuery('.nst-1 .row-0').height();
//     max_height += jQuery('.nst-1 .row-1').height();
//     max_height += jQuery('.nst-1 .row-2').height();
//     max_height += 100;
//
//
//
//     /*$elems = jQuery('.view-id-read_next .article.grid');
//
//     $elems.each(function(idx, elem) {
//         max_height = Math.max(max_height, jQuery(elem).height());
//     });
//     $elems.height(max_height);*/
//
//     jQuery('.nst-1 #section-comments h5.c-heading').on('click', function(){
//         jQuery('.nst-1 #section-comments h5.c-heading').toggleClass('active');
//         jQuery('.nst-1 #section-comments .card').toggleClass('visible');
//     });
//
//
//     jQuery('.close span').on('click', function(){
//         if(jQuery( window ).width() > 767) {
//             if(jQuery('.page-node-type-event .region--sidebar-second').length) {
//                 jQuery('.page-node-type-event .region--sidebar-second').css('margin-top', jQuery('.venue-time').position().top - 20);
//             }
//         }
//     });
//     jQuery( window ).resize(function() {
//         if(jQuery( window ).width() > 767) {
//             if(jQuery('.page-node-type-event .region--sidebar-second').length) {
//                 jQuery('.page-node-type-event .region--sidebar-second').css('margin-top', jQuery('.venue-time').position().top - 20);
//             }
//         }
//     });
//     //alert(jQuery('.venue-time').position().top - 20);
//     if(jQuery( window ).width() > 767) {
//         if(jQuery('.page-node-type-event .region--sidebar-second').length) {
//             jQuery('.page-node-type-event .region--sidebar-second').css('margin-top', jQuery('.venue-time').position().top - 20);
//         }
//     }
//
//     jQuery('.owl-carousel').owlCarousel({
//         margin: 10,
//         autoWidth: true,
//         nav: true,
//         autoplay: false,
//         autoplayTimeout: 4000,
//         autoplayHoverPause: true,
//         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
//     })
// });
//
// jQuery(window).resize(function() {
//     /*$elems = jQuery('.view-id-read_next .article.grid');
//     var max_height = 0;
//     $elems.each(function(idx, elem) {
//         max_height = Math.max(max_height, jQuery(elem).height());
//     });
//     $elems.height(max_height);*/
// }); */

(function ($, Drupal) {
    Drupal.behaviors.talawa = {
        attach: function (context, settings) {
            /*$('.gallery-upload .image-widget .preview .remove-image-btn', context).once('click', function () {
                alert("Yes");
                $(this).parent().find("button").trigger("click");
            });*/
            $(function(){
                $('.gallery-upload-items .tb-column button').html('X');
                $(".gallery-upload .image-widget .preview").hover(function(){
                        /*$((this).parent().attr('class'));
                        $(this).find('td.tb-column button').show();*/
                    }
                    ,function(){
                        /*$(this).find(".remove-image-btn").hide();
                        $(this).closest('.gallery-upload-items table td.tb-column button').hide();*/
                    }

                );
            });
           /* jQuery('.gallery-upload-items .tb-column button').onclick(function(){

                $($this).html('');
                $($this).css('backgorund-color','transparent');
            });
            jQuery(".gallery-upload .image-widget .preview button").on("click", function(){
                $(this).closest('td').attr('class');
                alert("Remove it "+$(this).closest('td').attr('class'));
                alert($(this).parent().find("button").html());

            });*/
            /*jQuery('.gallery-upload .image-widget .preview').mouseover(function() {

                jQuery(this).find("remove-image-btn").toggleClass('remove-btn-visible');

                *//*jQuery(sel_elemt+" .preview").on("click",function(){
                        alert("remove button selected");
                    }
                );*//*
            });*/
            jQuery('.image-widget .preview .remove-image').on('click', function(){
                    //alert("remove it");
                    jQuery(this).trigger("click");
                }
            );

            if(jQuery('#views-exposed-form-tags-grid-listing-block-1 .form-submit', context).length) {
                jQuery('#views-exposed-form-tags-grid-listing-block-1 .form-submit', context).removeClass('btn-default');
                jQuery('#views-exposed-form-tags-grid-listing-block-1 .form-submit', context).addClass('btn-primary');
            }
        }
    };
})(jQuery, Drupal);


jQuery(document).ready(function() {
	/* jQuery('select[multiple="multiple"]').select2({
        minimumResultsForSearch: 1
    }); */
    jQuery('.node-form #edit-delete').removeClass('btn-flat');
    jQuery('.node-form #edit-delete').addClass('btn-black');
	
	jQuery('.user-form .edit-user-form #edit-delete').removeClass('pull-right');

    /* alert(jQuery('.navbar-fixed-top').height());*/
    if(jQuery( window ).width() < 767) {
        jQuery('section.slider').attr('style', 'margin-top:' + jQuery('.navbar-fixed-top').height() + 'px');
    }
    jQuery('.preview').on('click', function(){
        }
    );

    jQuery('button.navbar__open-search-block').on('click', function(){
        jQuery('.navbar-search').toggleClass('navbar-search-open');
    });
   /* jQuery('.owl-carousel').owlCarousel({
        margin: 10,
        autoWidth: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    })*/

    var max_height = 0;
    max_height += jQuery('.nst-1 .row-0').height();
    max_height += jQuery('.nst-1 .row-1').height();
    max_height += jQuery('.nst-1 .row-2').height();
    max_height += 100;
    /*$elems = jQuery('.view-id-read_next .article.grid');
    $elems.each(function(idx, elem) {
        max_height = Math.max(max_height, jQuery(elem).height());
    });
    $elems.height(max_height);*/
    jQuery('.nst-1 #section-comments h5.c-heading').on('click', function(){
        jQuery('.nst-1 #section-comments h5.c-heading').toggleClass('active');
        jQuery('.nst-1 #section-comments .card').toggleClass('visible');
    });
    jQuery('.close span').on('click', function(){
        if(jQuery( window ).width() > 767) {
            if(jQuery('.region--sidebar-second').length) {
                jQuery('.region--sidebar-second').css('margin-top', parseInt(jQuery('.article-author').position().top) + parseInt(58));
            }
        }
    });
    jQuery( window ).resize(function() {
        if(jQuery( window ).width() > 767) {
            if(jQuery('.region--sidebar-second').length) {
                jQuery('.region--sidebar-second').css('margin-top', parseInt(jQuery('.article-author').position().top) + parseInt(58));
            }
        }
    });
    if(jQuery( window ).width() > 767) {
        if(jQuery('.region--sidebar-second').length) {
            jQuery('.region--sidebar-second').css('margin-top', parseInt(jQuery('.article-author').position().top) + parseInt(58));
        }
    }
	
	if(jQuery(".owl-carousel").length == 1) {
		    jQuery('.owl-carousel').owlCarousel({
				margin: 3,
				autoWidth: true,
				nav: true,
				autoplay: false,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				onInitialized: fixOwl,
				onRefreshed: fixOwl
			})
	}
	
});

var fixOwl = function(){
        var stage = jQuery('.owl-stage'),
            stageW = stage.width(),
            el = jQuery('.owl-item'),
            elW = 0;
        el.each(function() {
            elW += jQuery(this).width()+ +(jQuery(this).css("margin-right").slice(0, -2))
        });
        if ( elW > stageW ) {
            stage.width( elW );
        };
    }

jQuery(window).resize(function() {
    /*$elems = jQuery('.view-id-read_next .article.grid');
    var max_height = 0;
    $elems.each(function(idx, elem) {
        max_height = Math.max(max_height, jQuery(elem).height());
    });
    $elems.height(max_height);*/
});


jQuery(document).ready(function() {
	
	jQuery('#edit-profile-privacy').removeClass('card');
	jQuery('#edit-profile-privacy').removeClass('form-wrapper');
	jQuery("#edit-profile-privacy h4").replaceWith(function() { 
    return "<label>" + this.innerHTML + "</label>"; 	
});
	jQuery("#edit-profile-privacy label").addClass("control-label");
	
	jQuery("#edit-profile-privacy .control-label div").replaceWith(function() { 
    return "<span>" + this.innerHTML + "</span>"; 	
});


	jQuery("#edit-profile-privacy .card__block").contents().unwrap();
	  
	jQuery(".edit-user-form #edit-profile-privacy .form-disabled div").replaceWith(function() { 
    return "<p>" + this.innerHTML + "</p>"; 	
});	

	jQuery('.user-form .edit-user-form #edit-delete').removeClass('pull-right');
	
    jQuery('#edit-profile-privacy').removeClass('card');
	jQuery('#edit-profile-privacy').removeClass('form-wrapper');
	
	
	jQuery("#edit-profile-privacy h4").replaceWith(function() { 
		return "<label>" + this.innerHTML + "</label>"; 	
	});
	
	jQuery("#edit-profile-privacy label").addClass("control-label");
	
	jQuery("#edit-profile-privacy .control-label div").replaceWith(function() { 
		return "<span>" + this.innerHTML + "</span>"; 	
	});
	
	jQuery("#edit-profile-privacy .card__block").contents().unwrap();
	  
	jQuery("#edit-profile-privacy .form-disabled div").replaceWith(function() { 
		return "<p>" + this.innerHTML + "</p>"; 	
	});	


	jQuery('.jobs-form-btn #edit-actions').removeClass('form-wrapper');
	jQuery('.jobs-form-btn #edit-actions').removeClass('form-group');

	jQuery('.jobs-form-btn #edit-preview').removeClass('btn-flat');
	jQuery('.jobs-form-btn #edit-preview').addClass('btn-black');

	jQuery('.jobs-form-btn #edit-delete').removeClass('btn-flat');
	jQuery('.jobs-form-btn #edit-delete').addClass('btn-black');

	jQuery('#edit-field-profile-banner-image-wrapper .image-widget .button').removeClass('btn-block');
});

jQuery(document).ready(function() {
	
	jQuery('#social-group-add #edit-group-type--wrapper').removeClass('form-group');
	
	
	jQuery("#social-group-add .help-block").replaceWith(function() { 
		return "<p>" + this.innerHTML + "</p>"; 	
	});	
	
	jQuery("#social-group-add .fieldset-wrapper p").addClass("help-block");
	
	jQuery("#edit-profile-privacy .form-disabled .switch").removeClass("control-label");	
	jQuery("#edit-profile-privacy .form-disabled p").addClass("help-block");
	
	
	jQuery("#edit-private-messages").removeClass("card");
	jQuery("#edit-private-messages").removeClass("form-wrapper");	
	jQuery("#edit-private-messages h4").replaceWith(function() { 
		return "<label>" + this.innerHTML + "</label>"; 	
	});	
	jQuery("#edit-private-messages label").addClass("control-label");
	jQuery("#edit-private-messages label div").replaceWith(function() { 
		return "<span>" + this.innerHTML + "</span>"; 	
	});	
	jQuery("#edit-private-messages .card__block").contents().unwrap();
	
});	

jQuery(document).ready(function() {
	jQuery(".path-user .user-topics .region--complementary-top").addClass("clearfix");
	jQuery(".register-step-your-profile .image-widget .button").removeClass("btn-flat");
	jQuery(".register-step-your-profile .image-widget .button").addClass("btn-white");	
	jQuery(".group-title .form-type-textfield").addClass("field--name-title");
	
	jQuery(".taxo-tags .views-infinite-scroll-content-wrapper").addClass("row");
});	

jQuery(document).ready(function() {
    jQuery(".hero-header.search-header .container--hightlights").addClass("hero-wrap-bottom");
    jQuery(".hero-header.search-header .container--hightlights").addClass("sub-title-header");
    jQuery(".hero-header.search-header .container--hightlights").removeClass("container--hightlights");
    jQuery(".search-hero-form .form-item-search-input").removeClass("form-group");
    jQuery(".search-page-content .btn--offcanvas-trigger a").removeClass("btn-default");
    jQuery(".search-page-content .btn--offcanvas-trigger a").addClass("btn-yellow");

    jQuery("#social-user-password-form #edit-forgot").removeClass("card");
	jQuery("#edit-forgot .card__block").addClass("form-group");
	jQuery("#edit-forgot .form-group").removeClass("card__block");
	jQuery("#edit-forgot h4").addClass("form-group");
	jQuery("#edit-forgot h4").removeClass("card__title");
	jQuery("#edit-forgot h4").removeClass("card__title--underline");

	jQuery(".path-group .profile-mhs .form-actions .button").removeClass("btn-primary");
	jQuery(".path-group .profile-mhs .form-actions .button").addClass("btn-white");
	
	jQuery(".path-group .group-confirm-form .white-text .clearfix").addClass("form-group");
	jQuery(".path-group .group-confirm-form .white-text .form-group").removeClass("clearfix");
	
	jQuery("#webform-submission-job-apply-form-add-form").addClass("row");
	
	jQuery("#webform-submission-job-apply-form-add-form .form-item-address-address").addClass("col-md-6");
	jQuery("#webform-submission-job-apply-form-add-form .form-item-address-address-2").addClass("col-md-6");
	jQuery("#webform-submission-job-apply-form-add-form .form-item-address-city").addClass("col-md-6");
	jQuery("#webform-submission-job-apply-form-add-form #edit-address-state-province").addClass("col-md-6");
	jQuery("#webform-submission-job-apply-form-add-form .form-item-address-postal-code").addClass("col-md-6");
	jQuery("#webform-submission-job-apply-form-add-form #edit-address-country").addClass("col-md-6");
	
	jQuery("#webform-submission-job-apply-form-add-form #edit-address--wrapper .fieldset-wrapper").addClass("row");
	
	
});		
	

