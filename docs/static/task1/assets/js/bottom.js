/*!
 * Copyright 2021 Esteban Garviso
 * Licensed under MIT (https://github.com/estebangarviso/JavascriptMaster/blob/main/LICENSE.md)
 */
document.addEventListener('DOMContentLoaded', function (e){
    "use strict"; // Force variables to be declarated
    //  Form Floating Labels JS
    document.querySelectorAll('.floating-label-form-group').forEach(el => {
        el.addEventListener('input', (ev) => {
            let cT = ev.currentTarget,
                t = ev.target;
            if(t.value && t.value.length > 0)
                cT.classList.add('floating-label-form-group-with-value');
        });
        el.addEventListener('change', (ev) => {
            let cT = ev.currentTarget,
                t = ev.target,
                v = t.tagName === 'SELECT' ? t.options[t.selectedIndex].getAttribute('value') : t.value;
            if(!v || v.length === 0)
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
    document.querySelectorAll('.js-visible-password').forEach((el, i, nl) => {
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
    //  Dynamic Register Form Validation Settings
    if(Validate.isLoadedObject(RegisterForm)){
        let registerForm = document.getElementById(RegisterForm.id),
            inputs = registerForm.querySelectorAll('input');
        //console.log(inputs);
    }
});
//Please enter your firstname.
//Please enter your lastname.
//Please enter your email address.
//Please enter your password.
//Please confirm your password.
//Please accept the privacy terms before register.