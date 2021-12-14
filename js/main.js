document.addEventListener("DOMContentLoaded", function() {
    /* mobile navigation */
    let mobileToggle = document.querySelector('#mobile__menu_toggle');
    let mobileWrap = document.querySelector('.mobile__wrap');

    mobileToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(mobileWrap.parentElement);
        if (mobileWrap.parentElement.classList.contains('active')) {
            setTimeout(function(e) {
                mobileWrap.parentElement.classList.toggle('active');
            }, 200);
        } else {
            mobileWrap.parentElement.classList.toggle('active');
        }
        /* mobileWrap.parentElement.classList.toggle('active'); */
        mobileWrap.classList.toggle('active');
    });
    /* mobile navigation */

    /* header dropdown code */
    let industryToggle = document.querySelector('#industry');
    let degreeToggle = document.querySelector('#degree');
    let availableDegrees = document.querySelectorAll('#degree > option');

    industryToggle.addEventListener('click', function(e) {
        if (industryToggle.value === 'industry') {
            degreeToggle.setAttribute("disabled", "true");
        } else {
            degreeToggle.removeAttribute("disabled");
            availableDegrees.forEach((degree) => {
                degree.classList.remove('hidden');
                if (industryToggle.value != degree.getAttribute('data-industry')) {
                    degree.classList.add('hidden');
                }
            });
        }
    });
    /* header dropdown code */

    /* expandable industry list */
    document.querySelectorAll(".toggle__open").forEach((toggle) => {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            if (document.querySelector('.active__toggle')) {
                /* let activeToggle = document.querySelector('.active__toggle'); */
                document.querySelector('.active__toggle').classList.remove('active__toggle');

            }

            toggle.parentElement.classList.add('active__toggle');
        });
    });
    document.querySelectorAll(".toggle__close").forEach((toggleClose) => {
        toggleClose.addEventListener("click", function(e) {
            e.preventDefault();

            toggleClose.parentElement.classList.remove('active__toggle');
        });
    });
    /* expandable industry list */


    /* achievement counter */

    let allCounters = document.querySelectorAll('.achievement__counter');

    //animate counters, variable count speed if the final value is > 750
    function animateCounter(element) {
        let finalValue = element.innerHTML;
        let initialValue = 0;
        setInterval(function(e) {
            if (initialValue == finalValue) { return; }
            initialValue = initialValue + 1;
            element.innerHTML = initialValue;
        }, finalValue > 750 ? 5 : 75);
    }

    //No idea how the intersection observer works just that it does tbh 
    const countUp = (target) => {
        const intersectObserver = new IntersectionObserver((counters, observer) => {
            counters.forEach(counter => {
                if (counter.isIntersecting) {
                    animateCounter(counter.target);
                    observer.disconnect();
                }
            })
        }, { threshold: [1] });
        intersectObserver.observe(target);
    }

    allCounters.forEach(countUp);
    /* achievement counter */
});