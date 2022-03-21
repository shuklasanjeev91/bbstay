$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	});
});
	// toggle menu
	// $('.menu-btn').click(function(){
	// 	$('.navbar .menu').toggleClass("active");
	// 	$('.menu-btn i').toggleClass("active");
 //    });

	// login form on popup
document.querySelector("#login").addEventListener("click", function(){
    document.querySelector('.popup').classList.add("active");
});
document.querySelector("#close-btn").addEventListener("click", function(){
    document.querySelector('.popup').classList.remove("active");
});
$(document).ready(function(){
    $('#login').click(function(){
        $("#popup").show();
    });

    $("#close-btn").click(function(){
        $("#popup").hide();
    }); 
});
$(document).ready(function(){
    $(document).click(function(e){
     var popup = $("#popup");
     if (!$('#login').is(e.target) && !popup.is(e.target))
        {
            popup.hide();
        }
    });
});

    // date picker function and links javascript
$(document).ready(function(){
    // Call global the function
    $('.t-datepicker').tDatePicker({
      // options here
        });
});

// Add room function
$(document).ready(function () {

        var maxField = 6; // Total 6 product fields we add

        var addButton = $('.add_button'); // Add more button selector

        var wrapper = $('.field_wrapper'); // Input fields wrapper

        var fieldHTML =`<div class="form-elements form-less">
                        <label for="amount">Guests :-</label>
                        <input type="number" class="form-control per" placeholder="1" min="1" max="3" maxlength="2" name="amount[]">
                        <a href="javascript:void(0);" class="remove_button" title="Add field" style="color:#000;text-decoration:none;font-size:18px;;">&times;</a>
                        </div>`; //New input field html
        var x = 1; //Initial field counter is 1
        $(addButton).click(function () {
            //Check maximum number of input fields
            if (x < maxField) {
                x++; //Increment field counter
                $(wrapper).append(fieldHTML);
                document.getElementById("demo").innerHTML = x;
            }
        });

        //Once remove button is clicked
     $(wrapper).on('click', '.remove_button', function (e) {
            e.preventDefault();
            $(this).parent().closest(".form-elements").remove();
            x--; //Decrement field counter
             document.getElementById("demo").innerHTML = x;
        });
    });
        $(document).ready(function () {
            $('.form-group').on('input','.per',function(){
                var totalSum = 0;
                $('.form-group .per').each(function(){
                    var inputVal = $(this).val();
                    if($.isNumeric(inputVal)){
                        totalSum += parseFloat(inputVal);
                    }
                });
                $('#guest').text(totalSum);
            });
        });
	// add room section
document.querySelector("#rooms").addEventListener("click", function(){
    document.querySelector('.room_pop').classList.add("active");
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector('.room_pop').classList.remove("active");
});  
$(document).ready(function(){
    $('#rooms').click(function(){
        $("#room_pop").show();
    });

    $("#close").click(function(){
        $("#room_pop").hide();
    }); 
});
// $(document).ready(function(){
//     $(document).click(function(e){
//      var popup = $("#room_pop");
//      if (!$('#rooms').is(e.target) && !popup.is(e.target))
//         {
//             popup.hide();
//         }
//     });
// });

// image slider owlcarousel
	$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    autoplay:false,
    autoplayTimeout:1000,	
    rtl: false,
    stagePadding:50,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:6
        }
    }
	});
	$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    autoplay:false,
    autoplayTimeout:1000,	
    rtl: false,
    stagePadding:50,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
	});

