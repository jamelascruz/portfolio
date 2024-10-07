
// animation
AOS.init();
// scroldown
$('#scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);  // The duration in milliseconds (1000 = 1 second)
});
$('.hireMe').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);  // The duration in milliseconds (1000 = 1 second)
});
$('.navbar-nav a').on('click', function(e) {
    e.preventDefault();
    
    // Get the target section's ID
    var target = $(this).attr('href');
    
    // Animate the scroll to the target section
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);  // The duration of the scroll animation (1000 = 1 second)
});
//CAN ANIMATION START
const canElement = document.querySelector('.can');
            const bodyElement = document.querySelector('.canAnimation');
    
            canElement.addEventListener('mouseenter', () => {
                bodyElement.style.background = "linear-gradient(90deg, rgba(251,172,80,1) 0%, rgba(208,59,7,1) 48%, rgba(251,172,80,1) 100%)";
            });
    
            canElement.addEventListener('mouseleave', () => {
                bodyElement.style.background = ""; // Reset the background when not hovering
            });

// const $root = $(document.documentElement);
// const marqueeElementsDisplayed = getComputedStyle($root[0]).getPropertyValue("--marquee-elements-displayed");
// const $marqueeContent = $("ul.marquee-content");

// $root.css("--marquee-elements", $marqueeContent.children().length);

// for (let i = 0; i < marqueeElementsDisplayed; i++) {
//   $marqueeContent.append($marqueeContent.children().eq(i).clone(true));
// }
// ===============================shuffleElement  START =============================
// var velocity = 30;
// var shuffleElement = $('.jobTitle');

// shuffleElement.each(function() {
//   $(this).attr('data-text', $(this).text());
// });

// var shuffle = function(o) {
//   for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//   return o;
// };

// var shuffleText = function(element, originalText) {
//   var elementTextArray = [];
//   var randomText = [];

//   for (var i = 0; i < originalText.length; i++) {
//     elementTextArray.push(originalText.charAt(i));
//   }

//   var repeatShuffle = function(times, index) {
//     if (index === times) {
//       element.text(originalText);
//       return;
//     }

//     setTimeout(function() {
//       randomText = shuffle(elementTextArray.slice());
//       for (var i = 0; i < index; i++) {
//         randomText[i] = originalText.charAt(i);
//       }
//       element.text(randomText.join(''));
//       index++;
//       repeatShuffle(times, index);
//     }, velocity);
//   }

//   repeatShuffle(originalText.length, 0);
// }

// shuffleElement.mouseenter(function() {
//   shuffleText($(this), $(this).data('text'));
// });

// ===============================shuffleElement END =============================
// theme
$('.theme').click(function() {
    let currentTheme = $('html').attr('data-bs-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    $('html').attr('data-bs-theme', newTheme);
    
    // Change icon and shape-fill colors based on theme
    $('#theme-icon').attr('class', newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon');
    $('.custom-shape-divider-top-1679572685 .shape-fill').css('fill', newTheme === 'dark' ? '#212529' : '#ffff');
    
    // Update hamburger menu background
    $('.humberger, .humberger1, .humberger2').toggleClass('bg-light bg-dark');

    // Apply specific styles to #btnGradient based on theme
    if (newTheme === 'dark') {
        $('#btnGradient').css({
            'position': 'relative',
            'z-index': '1',
            'color': 'white'
        }).addClass('dark-gradient').removeClass('light-gradient');
    } else {
        $('#btnGradient').css({
            'background': 'linear-gradient(to right, var(--primary), var(--secondary))'
        }).removeClass('dark-gradient').addClass('light-gradient');
    }
    $('.navbar-brand img').attr('src', newTheme === 'light' ? 'images/desdevjamlogoBLACK.png' : 'images/desdevjamlogo.png');
    
});

//hammenu

$(".flex-column").click(function(){
    $(".humberger").toggleClass("rotate");
    $(".humberger2").toggleClass("rotate");
    $(".humberger1").toggleClass("fade-right");
  }); 


//typewriter
var typed = new Typed("#typewriter", {
    strings: ["I'm Jamela Cruz"],
    typeSpeed: 50,
    loop: true
})

// contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbyUggNqPo1y4odqme3pVgpqdGkprsJV0A2EqoYwlq9aGooEtoSjlSMsR2mgQL9Bp0Xn/exec'
const form = document.forms['submit-to-google-sheet']
const resmessages = document.getElementById("resmessages")


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            resmessages.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                resmessages.innerHTML = ""
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
//end contact

// Select the centeredDiv element
const centeredDiv = document.getElementById("loader-wrapper");

// Function to update the position of the centeredDiv
function updateCenteredDivPosition() {
    const windowHeight = window.innerHeight;
    const divHeight = centeredDiv.offsetHeight;
    const scrollY = window.scrollY;

    // Calculate the new top position to center the div
    const newTopPosition = Math.max((windowHeight - divHeight) / 2 + scrollY, scrollY);

    centeredDiv.style.top = newTopPosition + "px";
}

// Initial centering
updateCenteredDivPosition();

// Update the position whenever the window is scrolled
window.addEventListener("scroll", updateCenteredDivPosition);
//end centered div

//fade-out loader
var element = document.querySelector('.loader-wrapper');
function fadeOut(el) {
    var opacity = 1; // Initial opacity
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 1;
            el.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 0
            el.style.display = 'none'; // Hide the element
        }
    }, 2000);
}
fadeOut(element);
//end fade-out loader

//back to top page
window.onbeforeunload = function () {
    // Scroll to the top before the page is unloaded
    window.scrollTo(0, 0);
};
//end back to top page

