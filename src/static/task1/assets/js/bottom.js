/*!
 * Copyright 2021 Esteban Garviso
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
document.addEventListener('DOMContentLoaded', function (e){
    "use strict"; // Start of use strict
    //  Form Floating Labels JS
    document.querySelectorAll('.floating-label-form-group').forEach(el => {
        el.addEventListener('keyup', (ev) => {
            let cT = ev.currentTarget,
                t = ev.target;
            if(t.value || t.value.length > 0)
                cT.classList.add('floating-label-form-group-with-value');
            if(!t.value || t.value.length === 0)
                cT.classList.remove('floating-label-form-group-with-value');
        });
        el.addEventListener('focus', (ev) => {
            let cT = ev.currentTarget;
            cT.classList.add('floating-label-form-group-with-focus');
        }, true);
        el.addEventListener('blur', (ev) => {
            let cT = ev.currentTarget;
            cT.classList.remove('floating-label-form-group-with-focus');
        }, true);
    });
    //  Show/Hide Password JS
    document.querySelectorAll('input[type=password]').forEach((el, i, nl) => {
        let n = nl[i],
            input = n.parentElement.querySelector('.js-visible-password'),
            btn = n.parentElement.querySelector('.js-show-password');
        btn.addEventListener('click', (ev) => {
            let cT = ev.currentTarget;
            if (input.type == 'password') {
                input.setAttribute('type', 'text');
                cT.querySelector('i').classList.remove('fa-eye');
                cT.querySelector('i').classList.add('fa-eye-slash');
            } else {
                cT.querySelector('i').classList.add('fa-eye');
                cT.querySelector('i').classList.remove('fa-eye-slash');
                input.setAttribute('type', 'password');
            }
        });
    });

});
//Please enter your firstname.
//Please enter your lastname.
//Please enter your email address.
//Please enter your password.
//Please confirm your password.
//Please accept the privacy terms before register