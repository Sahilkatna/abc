Drupal.behaviors.myBehavior = {
	attach: function (context, settings) {
		jQuery(document).ready(function() {
			
			if(jQuery('#edit-group-settings').length) {
				jQuery('#edit-group-settings').addClass('card');
                jQuery('#edit-group-type--wrapper span.form-required').insertAfter('#edit-group-type--wrapper .control-label.js-form-required.form-required span');
				jQuery('#edit-group-type--wrapper .fieldset-wrapper').next('p').addClass('help-block');
			}
			
			//console.log(' === ' + window.location);
			/*if (window.location.href.indexOf("register/your-details") > -1) {
				jQuery('.wizard-trail').addClass('artist-step');
			}
            if (window.location.href.indexOf("register/confirmation") > -1) {
                jQuery('.wizard-trail').addClass('artist-step');
            }
			if (window.location.href.indexOf("industry/your-details") > -1) { 
				jQuery('.wizard-trail').addClass('industry-step');
			}
            if (window.location.href.indexOf("register/your-profile") > -1) {
                jQuery('.wizard-trail').addClass('industry-step');
            }*/
            /*var ur = window.location;
            if (ur.indexOf('user/register/your-details') > -1) {
                jQuery('.wizard-trail').addClass('artist-step');
            } else {
                console.log('artist-step not adding');
            }
            if (ur.indexOf('user/register/industry/your-details') > -1) {
                jQuery('.wizard-trail').addClass('industry-step');
            } else {
                console.log('industry-step not adding');
            } */
			var hash = window.location.hash;
			if (hash.indexOf("comment") >= 0) {
				jQuery('.nst-1 #section-comments h5.c-heading').addClass('active');
				jQuery('.nst-1 #section-comments .card').addClass('visible');				
			}
			
			if(jQuery('.path-webform .webform-submission-form').length) {
				jQuery( "#edit-address-country-select option" ).each(function( index ) {
				if(jQuery( this ).attr('value') != 'GB') {
					jQuery( this ).remove();
				}	
			 });
			}	
			
			if(jQuery('.form-group .input-group-addon').length) {
				jQuery('.form-group .input-group-addon').addClass('hide');
			}
			
			jQuery( ".show-comments" ).each(function( index ) {
				console.log(jQuery( this ).find('a').attr('href'));		
				jQuery( this ).find('a').attr('href', jQuery( this ).find('a').attr('href') + '#section-comments');				
			 });
			
			if(jQuery('.group-form').length) {
				jQuery('.group-image .help-block.form-group').remove();
				
				jQuery('.group-image p').each(function() {
					var $this = jQuery(this);
					if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
						$this.remove();
				});
				if(jQuery('.group-title input').length) {
					jQuery('.group-title input').attr('placeholder', 'Title..');		
				}

				if(jQuery('.locality.form-text').length) {
					jQuery('.locality.form-text').attr('placeholder', 'Post town');		
				}
				
				if(jQuery('.postal-code.form-text').length) {
					jQuery('.postal-code.form-text').attr('placeholder', 'Postal code');		
				}
				
				if(jQuery('.given-name.form-text').length) {
					jQuery('.given-name.form-text').attr('placeholder', 'First name');		
				}
				
				if(jQuery('.family-name.form-text').length) {
					jQuery('.family-name.form-text').attr('placeholder', 'Last name');		
				}
				
				if(jQuery('.organization.form-text').length) {
					jQuery('.organization.form-text').attr('placeholder', 'Company');		
				}
				
				if(jQuery('.address-line2.form-text').length) {
					jQuery('.address-line2.form-text').attr('placeholder', 'Street address line 2');					
				}
				
				if(jQuery('.field-location input').length) {
					jQuery('.field-location input').attr('placeholder', 'Location');		
				}
				
				if(jQuery('.address-line1.form-text').length) {
					jQuery('.address-line1.form-text').attr('placeholder', 'Street address');		
				}
				
				if(jQuery('.address-group .panel.panel-').length) {
					jQuery('.address-group .panel.panel-').removeClass('panel panel-');	
				}
			}
		}); 
	}
};

(function ($, Drupal, drupalSettings) {
	jQuery(document).ready(function() {
		
	

	jQuery('#filter-mobile li').click(function() {
		jQuery('#filters .' + jQuery( this ).attr('id')).trigger('click');
	});

	jQuery('#filters').on( 'click', 'a', function() {
        console.log(' working');
		jQuery('.filter-current').text(jQuery( this ).text());
    });
	
	if(jQuery('.path-group').length) {
		jQuery('h1.h4').removeClass('section-title').addClass('white-text');
		jQuery('form .card').removeClass('card').addClass('white-text');
	}
	jQuery('.path-node .media-left .avatar a').attr('href', jQuery('.path-node .author-name a').attr('href'));

	jQuery("#options .sort a").click(function() {
		jQuery("#options #sort-by ").toggle();
	});
				
	jQuery(".dropdown #sort-by  li a").click(function() {
		jQuery(".dropdown #sort-by ").hide();
	});
	
	
	jQuery("#options .mobile-menu .mobile-menu-arrow").click(function() {
        jQuery("#filter-mobile").slideToggle();
    });
    jQuery("#options .mobile-menu li").click(function() {
            jQuery("#filter-mobile").slideToggle();
    });
	
	
	
				
	jQuery(document).bind('click', function(e) {
		var $clicked = jQuery(e.target);
		if (! $clicked.parents().hasClass("dropdown"))
			jQuery("#options #sort-by ").hide();
	});
			
	 if(jQuery( "body" ).hasClass( "user-logged-in" )) {
		 jQuery( "#main-navigation li" ).each(function( index ) {
			 if(jQuery( this ).find('a').attr('href') == '/user/register' || jQuery( this ).find('a').attr('href') == '/user/register/industry/your-details' || jQuery( this ).find('a').attr('href') == '/user/login') {
				jQuery( this ).attr('style', 'display: none;');	
			} 
			
		});
	 }
	 // On Doc Ready
	 if(jQuery("input[name='field_type']:checked").val() == 1) {
		 jQuery('.opportunity_specific').removeAttr('style');
		 jQuery('.job_specific').hide();
	 } 
	 
	 if(jQuery( "input[name*='field_daily']" ).val() != '') {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.yearly_input' ).hide();
		}
		
		if(jQuery( "input[name*='field_daily']" ).val() != '') {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.yearly_input' ).hide();
		} 
		
		if(jQuery( "input[name*='field_yearly_salary']" ).val()  != '') {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.daily_input' ).hide();	
		} 
		
		if(jQuery( "input[name*='field_yearly_salary']" ).val()  != '' && jQuery( "input[name*='field_daily']" ).val() != '' && jQuery( "input[name*='field_daily']" ).val() != '') {
			jQuery( '.yearly_input' ).show();
		}
	 // End Doc ready
	 
	 // On key up
	 jQuery( "input[name*='field_daily']" ).keyup(function() {
		if(jQuery( "input[name*='field_daily']" ).val() == '') {
			jQuery( '.weekly_input' ).show();
			jQuery( '.yearly_input' ).show();
		} else {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.yearly_input' ).hide();
			jQuery( "input[name*='field_weekly']" ).val('');
			jQuery( "input[name*='field_yearly_salary']" ).val('');
		} 
	});
	
	jQuery( "input[name*='field_weekly']" ).keyup(function() {
		if(jQuery( "input[name*='field_weekly']" ).val()  == '') {
			jQuery( '.daily_input' ).show();
			jQuery( '.yearly_input' ).show();	
		} else {
			jQuery( '.daily_input' ).hide();
			jQuery( '.yearly_input' ).hide(); 
			jQuery( "input[name*='field_daily']" ).val('');
			jQuery( "input[name*='field_yearly_salary']" ).val('');
		}
	});
	
	jQuery( "input[name*='field_yearly_salary']" ).keyup(function() {
		if(jQuery( "input[name*='field_yearly_salary']" ).val()  == '') {
			jQuery( '.weekly_input' ).show();
			jQuery( '.daily_input' ).show();	
		} else {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.daily_input' ).hide();	 
			jQuery( "input[name*='field_weekly']" ).val('');
			jQuery( "input[name*='field_weekly']" ).val('');
		}
	});
	
	// End on key up
	
	// On change
	 jQuery( "input[name*='field_daily']" ).change(function() {
		if(jQuery( "input[name*='field_daily']" ).val() == '') {
			jQuery( '.weekly_input' ).show();
			jQuery( '.yearly_input' ).show();
		} else {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.yearly_input' ).hide();
			jQuery( "input[name*='field_weekly']" ).val('');
			jQuery( "input[name*='field_yearly_salary']" ).val('');
		} 
	});
	
	jQuery( "input[name*='field_weekly']" ).change(function() {
		if(jQuery( "input[name*='field_weekly']" ).val()  == '') {
			jQuery( '.daily_input' ).show();
			jQuery( '.yearly_input' ).show();	
		} else {
			jQuery( '.daily_input' ).hide();
			jQuery( '.yearly_input' ).hide(); 
			jQuery( "input[name*='field_daily']" ).val('');
			jQuery( "input[name*='field_yearly_salary']" ).val('');
		}
	});
	
	jQuery( "input[name*='field_yearly_salary']" ).change(function() {
		if(jQuery( "input[name*='field_yearly_salary']" ).val()  == '') {
			jQuery( '.weekly_input' ).show();
			jQuery( '.daily_input' ).show();	
		} else {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.daily_input' ).hide();	 
			jQuery( "input[name*='field_weekly']" ).val('');
			jQuery( "input[name*='field_weekly']" ).val('');
		}
	});
	
	// On Change
	
	// On Blur
	 jQuery( "input[name*='field_daily']" ).blur(function() {
		if(jQuery( "input[name*='field_daily']" ).val() == '') {
			jQuery( '.weekly_input' ).show();
			jQuery( '.yearly_input' ).show();
		} else {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.yearly_input' ).hide();
			jQuery( "input[name*='field_weekly']" ).val('');
			jQuery( "input[name*='field_yearly_salary']" ).val('');
		} 
	});
	
	jQuery( "input[name*='field_weekly']" ).blur(function() {
		if(jQuery( "input[name*='field_weekly']" ).val()  == '') {
			jQuery( '.daily_input' ).show();
			jQuery( '.yearly_input' ).show();	
		} else {
			jQuery( '.daily_input' ).hide();
			jQuery( '.yearly_input' ).hide(); 
			jQuery( "input[name*='field_daily']" ).val('');
			jQuery( "input[name*='field_yearly_salary']" ).val('');
		}
	});
	
	jQuery( "input[name*='field_yearly_salary']" ).blur(function() {
		if(jQuery( "input[name*='field_yearly_salary']" ).val()  == '') {
			jQuery( '.weekly_input' ).show();
			jQuery( '.daily_input' ).show();	
		} else {
			jQuery( '.weekly_input' ).hide();
			jQuery( '.daily_input' ).hide();	 
			jQuery( "input[name*='field_weekly']" ).val('');
			jQuery( "input[name*='field_weekly']" ).val('');
		}
	});
	// End On Blur
	jQuery('input[type=radio][name=field_type]').change(function() {
        if (this.value == 0) {
            jQuery('.job_specific').hide();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
        }
    });
   
   jQuery( "#lightgallery li" ).each(function( index ) {
        jQuery( this ).attr('data-src', jQuery( this ).find('img').attr('src'));
    });
	  
 	  if(jQuery('#lightgallery').length) {
		jQuery('#lightgallery').lightGallery(); 
	  } 
	
	jQuery('.owl-stage .item img').on('click', function(){
					jQuery("#lightgallery li#" +  jQuery(this).parent().attr('data-val')).trigger("click");
                }
            );
	
	if(jQuery( ".signup-video" ).length) {
		jQuery( ".signup-video" ).each(function( index ) {
			jQuery( this ).find('iframe').attr('src', jQuery( this ).find('iframe').attr('src') + '&showinfo=0');
		});	
	}

	jQuery( "#node-job-opportunities-form input[name*='field_daily']" ).focusout(function() {
		if(drupalSettings.daily > parseInt(jQuery( "input[name*='field_daily']" ).val())) {
			jQuery('.job_specific').hide();
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery("#edit-field-type-1").prop("checked", true);
			jQuery('.opportunity-msg').show();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
		} else {
			jQuery('.job_specific').show();
			jQuery("input[name='field_type']").removeAttr('readonly');
			jQuery("#edit-field-type-0").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').hide();
			jQuery('.opportunity_specific').hide().removeAttr('data-proccessed');
		}
	});
	
	jQuery( "#node-job-opportunities-form input[name*='field_weekly']" ).focusout(function() {
		if(drupalSettings.monthly > parseInt(jQuery( "input[name*='field_weekly']" ).val())) {
			jQuery('.job_specific').hide();
			jQuery("#edit-field-type-1").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').show();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
		} else {
			jQuery('.job_specific').show();
			jQuery("input[name='field_type']").removeAttr('readonly');
			jQuery("#edit-field-type-0").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').hide();
			jQuery('.opportunity_specific').hide().removeAttr('data-proccessed');
		}
	});
	jQuery( "#node-job-opportunities-form input[name*='field_yearly_salary']" ).focusout(function() {
		if(drupalSettings.yearly > parseInt(jQuery( "input[name*='field_yearly_salary']" ).val())) {
			jQuery('.job_specific').hide();
			jQuery("#edit-field-type-1").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').show();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
		} else {
			jQuery('.job_specific').show();
			jQuery("input[name='field_type']").removeAttr('readonly');
			jQuery("#edit-field-type-0").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').hide();
			jQuery('.opportunity_specific').hide().removeAttr('data-proccessed');
		}
	});
	
	jQuery( "#node-job-opportunities-edit-form input[name*='field_daily']" ).focusout(function() {
		if(drupalSettings.daily > parseInt(jQuery( "input[name*='field_daily']" ).val())) {
			jQuery('.job_specific').hide();
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery("#edit-field-type-1").prop("checked", true);
			jQuery('.opportunity-msg').show();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
		} else {
			jQuery('.job_specific').show();
			jQuery("input[name='field_type']").removeAttr('readonly');
			jQuery("#edit-field-type-0").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').hide();
			jQuery('.opportunity_specific').hide().removeAttr('data-proccessed');
		}
	});
	
	jQuery( "#node-job-opportunities-edit-form input[name*='field_weekly']" ).focusout(function() {
		if(drupalSettings.monthly > parseInt(jQuery( "input[name*='field_weekly']" ).val())) {
			jQuery('.job_specific').hide();
			jQuery("#edit-field-type-1").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').show();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
		} else {
			jQuery('.job_specific').show();
			jQuery("input[name='field_type']").removeAttr('readonly');
			jQuery("#edit-field-type-0").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').hide();
			jQuery('.opportunity_specific').hide().removeAttr('data-proccessed');
		}
	});
	jQuery( "#node-job-opportunities-edit-form input[name*='field_yearly_salary']" ).focusout(function() {
		if(drupalSettings.yearly > parseInt(jQuery( "input[name*='field_yearly_salary']" ).val())) {
			jQuery('.job_specific').hide();
			jQuery("#edit-field-type-1").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').show();
			jQuery('.opportunity_specific').show().attr('data-proccessed', true);
		} else {
			jQuery('.job_specific').show();
			jQuery("input[name='field_type']").removeAttr('readonly');
			jQuery("#edit-field-type-0").prop("checked", true);
			jQuery("input[name='field_type']").prop('readonly','readonly');
			jQuery('.opportunity-msg').hide();
			jQuery('.opportunity_specific').hide().removeAttr('data-proccessed');
		}
	});
	
	jQuery('#node-job-opportunities-edit-form .form-butns button').on('click', function(event){
		if(jQuery.trim(jQuery( "input[name*='title']" ).val()) == '') {
			jQuery( "input[name*='title']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='title']" ).offset().top - 100
			}, 2000);
			return false;
		}
		
		if(jQuery.trim(jQuery( "input[name*='field_daily']" ).val()) == '' && jQuery.trim(jQuery( "input[name*='field_weekly']" ).val()) == '' && jQuery.trim(jQuery( "input[name*='field_yearly_salary']" ).val()) == '') {
			jQuery( "input[name*='field_daily']" ).addClass('error');				
			jQuery( "input[name*='field_weekly']" ).addClass('error');				
			jQuery( "input[name*='field_yearly_salary']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_daily']" ).offset().top - 100
			}, 2000);
			return false;
		}
		
		
		if(jQuery.trim(jQuery( "input[name*='field_hirer']" ).val()) == '') {
			jQuery( "input[name*='field_hirer']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_hirer']" ).offset().top - 100
			}, 2000);
			return false;
		}


		/* if(jQuery.trim(jQuery( "input[name*='field_name']" ).val()) == '') {
			jQuery( "input[name*='field_name']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_name']" ).offset().top - 100
			}, 2000);
			return false;
		} */
		

		/* if(jQuery.trim(jQuery( "input[name*='field_email']" ).val()) == '') {
			jQuery( "input[name*='field_email']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_email']" ).offset().top - 100
			}, 2000);
			return false;
		} */


		/* if(jQuery.trim(jQuery( "input[name*='field_phone']" ).val()) == '') {
			jQuery( "input[name*='field_phone']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_phone']" ).offset().top - 100
			}, 2000);
			return false;
		} */
    

		if(jQuery.trim(jQuery( "input[name*='body']" ).val()) == '') {
			jQuery( "input[name*='body']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='body']" ).offset().top - 100
			}, 2000);
			return false;
		}
		
		if(jQuery("input[name*='field_job_application']").length == 0) {
			if(jQuery.trim(jQuery( "input[name*='field_link_to_external_site']" ).val()) == '') {
				jQuery( "input[name*='field_link_to_external_site']" ).addClass('error');				
				jQuery('html, body').animate({
					scrollTop:  jQuery( "input[name*='field_link_to_external_site']" ).offset().top - 100
				}, 2000);
				return false;
			}
		}
		if(jQuery("input[name='field_type']:checked").val() == 1) {
			jQuery("input[name^='field_release_date']").val('');
			jQuery("input[name^='field_application_deadline_date']").val('');

			if(jQuery.trim(jQuery( "input[name*='field_call_open_until']" ).val()) == '') {
				jQuery( "input[name*='field_call_open_until']" ).addClass('error');				
				jQuery('html, body').animate({
					scrollTop:  jQuery( "input[name*='field_call_open_until']" ).offset().top - 100
				}, 2000);
				return false;
			}

		} else {
			if(jQuery.trim(jQuery( "input[name*='field_release_date']" ).val()) == '') {
			jQuery( "input[name*='field_release_date']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_release_date']" ).offset().top - 100
			}, 2000);
			return false;
		}
		if(jQuery.trim(jQuery( "input[name*='field_application_deadline_date']" ).val()) == '') {
			jQuery( "input[name*='field_application_deadline_date']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_application_deadline_date']" ).offset().top - 100
			}, 2000);
			return false;
		}
			jQuery("input[name^='field_call_open_until']").val('');
		}
			 
			return true;
		
	});


	jQuery('#node-job-opportunities-form .form-butns button').on('click', function(event){

		if(jQuery.trim(jQuery( "input[name*='title']" ).val()) == '') {
			jQuery( "input[name*='title']" ).addClass('error');	
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='title']" ).offset().top - 100
			}, 2000);
			return false;
		}
		
		if(jQuery.trim(jQuery( "input[name*='field_daily']" ).val()) == '' && jQuery.trim(jQuery( "input[name*='field_weekly']" ).val()) == '' && jQuery.trim(jQuery( "input[name*='field_yearly_salary']" ).val()) == '') {
			jQuery( "input[name*='field_daily']" ).addClass('error');				
			jQuery( "input[name*='field_weekly']" ).addClass('error');				
			jQuery( "input[name*='field_yearly_salary']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_daily']" ).offset().top - 100
			}, 2000);
			return false;
		}
		
		if(jQuery.trim(jQuery( "input[name*='field_hirer']" ).val()) == '') {
			jQuery( "input[name*='field_hirer']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_hirer']" ).offset().top - 100
			}, 2000);
			return false;
		}


		/* if(jQuery.trim(jQuery( "input[name*='field_name']" ).val()) == '') {
			jQuery( "input[name*='field_name']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_name']" ).offset().top - 100
			}, 2000);
			return false;
		} */
		

		/* if(jQuery.trim(jQuery( "input[name*='field_email']" ).val()) == '') {
			jQuery( "input[name*='field_email']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_email']" ).offset().top - 100
			}, 2000);
			return false;
		} */


		/* if(jQuery.trim(jQuery( "input[name*='field_phone']" ).val()) == '') {	
			jQuery( "input[name*='field_phone']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_phone']" ).offset().top - 100
			}, 2000);
			return false;
		} */
		

		if(jQuery.trim(jQuery( "input[name*='body']" ).val()) == '') {
			jQuery( "input[name*='body']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='body']" ).offset().top - 100
			}, 2000);
			return false;
		}
		
		if(jQuery("input[name*='field_job_application']").length == 0) {
			if(jQuery.trim(jQuery( "input[name*='field_link_to_external_site']" ).val()) == '') {
				jQuery( "input[name*='field_link_to_external_site']" ).addClass('error');				
					jQuery('html, body').animate({
						scrollTop:  jQuery( "input[name*='field_link_to_external_site']" ).offset().top - 100
					}, 2000);
				return false;
			}
		} 

		
		
		if(jQuery("input[name='field_type']:checked").val() == 1) {
			jQuery("input[name^='field_release_date']").val('');
			jQuery("input[name^='field_application_deadline_date']").val('');
						
			if(jQuery.trim(jQuery( "input[name*='field_call_open_until']" ).val()) == '') {
				jQuery( "input[name*='field_call_open_until']" ).addClass('error');				
				jQuery('html, body').animate({
					scrollTop:  jQuery( "input[name*='field_call_open_until']" ).offset().top - 100
				}, 2000);
				return false;
			}
			
		} else {
			if(jQuery.trim(jQuery( "input[name*='field_release_date']" ).val()) == '') {
			jQuery( "input[name*='field_release_date']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_release_date']" ).offset().top - 100
			}, 2000);
			return false;
		}
		if(jQuery.trim(jQuery( "input[name*='field_application_deadline_date']" ).val()) == '') {
			jQuery( "input[name*='field_application_deadline_date']" ).addClass('error');				
			jQuery('html, body').animate({
				scrollTop:  jQuery( "input[name*='field_application_deadline_date']" ).offset().top - 100
			}, 2000);
			return false;
		}
			jQuery("input[name^='field_call_open_until']").val('');
		}
			return true;
		
		
    });
}); 
	
})(jQuery, Drupal, drupalSettings);
 
