/*!
 * Copyright 2021 Esteban Garviso
 * Licensed under MIT (https://github.com/estebangarviso/JavascriptMaster/blob/main/LICENSE.md)
 */
// Variables must be reclarated
'use strict';
const Instructor = {
    langs: {
        data: ['en', 'es'],
        selected: 'es'
    },
    helpers: {
        FormField: {
            group: 'form-group',
            helper: 'helper-block',
        },
        Form: {

        }
    },
};
//  Declarating variables and classes
const Validate = {
    PASSWORD_LENGTH: 8,
    /**
     * Check for standard name validity.
     *
     * @param {string} name - Name to validate
     *
     * @return {boolean}
     */
    isGenericName(name) {
        return this.isEmpty(name) || /^[^<>={}]*$/u.test(name);
    },
    /**
     * Check for e-mail validity.
     *
     * @param {string} email - e-mail address to validate
     *
     * @return {boolean}
     */
    isEmail(email) {
        return !this.isEmpty(email) || /^[a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]+[.a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]*@[a-z\p{L}0-9]+(?:[.]?[_a-z\p{L}0-9-])*\.[a-z\p{L}0-9]+$/ui.test(email);
    },
    /**
     * Check for password validity.
     *
     * @param {string} password - Password to validate
     * 
     * @param {int} size
     *
     * @return {boolean}
     */
    isPassword(password, size = this.PASSWORD_LENGTH) {
        return password.length >= size;
    },
    /**
     * Check for boolean validity.
     *
     * @param {boolean} bool - Boolean to validate
     *
     * @return {boolean}
     */
    isBool(bool) {
        return bool === null || bool === true || bool === false || /^(0|1)$/.test(bool);
    },
    /**
     * Check if value is empty.
     *
     * @param {string} value - Value to validate
     *
     * @return {boolean}
     */
    isEmpty(value) {
        return !value || (typeof value === 'object' &&
            (JSON.stringify(value) === '{}' || JSON.stringify(value) === '[]'));
    },
    /**
     * Check for integer validity.
     * 
     * @param {string} value - Value to validate
     * 
     * @return {boolean}
     */
    isUnsignedInt(value) {
        value = value + '';
        let int = value * 1;
        return typeof value !== 'object' ? (Number.isInteger(int) &&
            int + '' === value && int < 4294967296 && int > 0) : false;
    },
    /**
     * Check object validity.
     *
     * @param {object} obj - Object to validate
     *
     * @return {boolean}
     */
    isLoadedObject(obj) {
        return (obj && typeof obj === 'object' && obj.id) ? true : false;
    },
    /** 
     * Check if HTML Element exist in Loaded DOM
     * 
     * @param {HTMLElement} element - HTML element on DOM to validate
     * 
     * @return {boolean}
     */
    isHTMLElement(element) {
        return typeof element !== undefined && element !== null &&
            element && element instanceof HTMLElement;
    },
    /** 
     * Check if HTML Colletion exist in Loaded DOM
     * 
     * @param {HTMLColletion} elements - HTML elements on DOM to validate
     * 
     * @return {boolean}
     */
    isHTMLColletion(elements) {
        return typeof elements !== undefined && elements !== null &&
            elements && elements instanceof HTMLColletion && elements.length;
    },
    /** 
     * Check if Chilean VAT Number is valid
     * 
     * @param {string} vatnumber - VAT Number to validate
     * 
     * @return {boolean}
     */
    isValidCLVatnumber(vatnumber) {
        if (vatnumber.length < 8) {
            return false;
        }
        let value = vatnumber.replace(/[-.,[\]()\s]/g, '');
        let sum = 0;
        let counter = 0;
        const chars = "1234567890kK";
        for (let i = 0; i < value.length; i++) {
            let u = value.substring(i, i + 1);
            if (chars.indexOf(u) != -1) {
                counter++;
            }
        }
        if (counter == 0) {
            return false;
        }
        const rut = value.substring(0, value.length - 1);
        const drut = value.substring(value.length - 1);
        let dvr = '0';
        let mul = 2;
        for (let i = rut.length - 1; i >= 0; i--) {
            sum = sum + rut.charAt(i) * mul;
            if (mul == 7) {
                mul = 2;
            } else {
                mul++;
            }
        }
        let res = sum % 11;
        if (res == 1) {
            dvr = 'k';
        } else if (res == 0) {
            dvr = '0';
        } else {
            let dvi = 11 - res;
            dvr = dvi + "";
        }
        if (dvr == drut.toLowerCase() && /^\d+$/.test(rut) && parseInt(rut) > 50000000) {
            return true;
        }
        return false;
    },
    /** 
     * Check if Chilean DNI is valid
     * 
     * @param {string} dni DNI to validate
     * 
     * @return {boolean}
     */
    isValidCLDni(dni) {
        if (dni.length < 8) {
            return false;
        }
        let value = dni.replace(/[-.,[\]()\s]/g, '');
        let sum = 0;
        let counter = 0;
        const chars = "1234567890kK";
        for (let i = 0; i < value.length; i++) {
            let u = value.substring(i, i + 1);
            if (chars.indexOf(u) != -1) {
                counter++;
            }
        }
        if (counter == 0) {
            return false;
        }
        const rut = value.substring(0, value.length - 1);
        const drut = value.substring(value.length - 1);
        let dvr = '0';
        let mul = 2;
        for (let i = rut.length - 1; i >= 0; i--) {
            sum = sum + rut.charAt(i) * mul;
            if (mul == 7) {
                mul = 2;
            } else {
                mul++;
            }
        }
        let res = sum % 11;
        if (res == 1) {
            dvr = 'k';
        } else if (res == 0) {
            dvr = '0';
        } else {
            let dvi = 11 - res;
            dvr = dvi + "";
        }
        if (dvr == drut.toLowerCase() && /^\d+$/.test(rut) && parseInt(rut) < 50000000) {
            return true;
        }
        return false;
    },
    /** 
     * Check if Mexican VAT Number is valid
     * 
     * @param {string} vatnumber - VAT Number to validate
     * 
     * @return {boolean}
     */
    isValidMXVatnumber(vatnumber) {
        return /^[A-Z,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?$/.test(vatnumber);
    },
    /** 
     * Check if Mexican VAT Number is valid
     * 
     * @param {string} dni VAT Number to validate
     * 
     * @return {boolean}
     */
    isValidMXDni(dni) {
        return /^[A-Z][A,E,I,O,U,X][A-Z]{2}[0-9]{2}[0-1][0-9][0-3][0-9][M,H][A-Z]{2}[B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z]{3}[0-9,A-Z][0-9]$/.test(dni);
    },
    /** 
     * Check if Perivian VAT Number is valid
     * 
     * @param {string} vatnumber - VAT Number to validate
     * 
     * @return {boolean}
     */
    isValidPEVatnumber(vatnumber) {
        let ruc = vatnumber.replace(/[-.,[\]()\s]+/g, '')
        if (!(ruc >= 1e10 && ruc < 11e9
            || ruc >= 15e9 && ruc < 18e9
            || ruc >= 2e10 && ruc < 21e9))
            return false;
        for (let sum = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = ruc / 10 | 0) {
            sum += (ruc % 10) * (i % 7 + (i / 7 | 0) + 1);
        }
        return sum % 11 === 0;
    },
    /** 
     * Check if Perivian DNI is valid
     * 
     * @param {string} dni - DNI to validate
     * 
     * @return {boolean}
     */
    isValidPEDni(dni) {
        const letterDni = dni.substring(8, 9).toUpperCase();
        const numDni = parseInt(dni.substring(0, 8));
        const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        const rightLetter = letters[numDni % 23];

        if (letterDni != rightLetter) {
            return false
        } else {
            return true
        }
    },
    /** 
     * Check if DNI is valid by country ISO code
     * 
     * @param {string} iso ISO code of the country
     * 
     * @param {string} dni DNI to validate
     * 
     * @return {boolean}
     */
    isValidVatnumberByCountryIso(vatnumber, iso) {
        let isValid = true;
        try {
            isValid = this[`isValid${iso}Vatnumber`](vatnumber);
        } catch (err) {
            if (/^TypeError: this\[iso\] is not a function/g.test(err))
                return !this.isEmpty(vatnumber) && /^[0-9A-Za-z-.]{1,16}$/u.test(vatnumber);
            isValid = false;
        };
        return !this.isEmpty(vatnumber) && isValid;
    },
    /** 
     * Check if DNI is valid by country ISO code
     * 
     * @param {string} iso - ISO code of the country
     * @param {string} dni - DNI to validate
     * 
     * @return {boolean}
     */
    isValidDniByCountryIso(dni, iso) {
        let isValid = true;
        try {
            isValid = this[`isValid${iso}Dni`](dni);
        } catch (err) {
            if (/^TypeError: this\[iso\] is not a function/g.test(err))
                return !this.isEmpty(dni) && /^[0-9A-Za-z-.]{1,16}$/u.test(dni);
            isValid = false;
        };
        return !this.isEmpty(dni) && isValid;
    },
};
class Translate {

    constructor() {
        this.lang = Instructor.langs.selected || 'en';
    }

    translations() {
        let translation = localStorage['Translate:translations'];
        if (translation) return JSON.parse(translation);
        translation = async function () {
            return fetch('GET', `langs/${this.lang}.json`);
        }
        localStorage['Translate:translations'] = JSON.stringify(translations);
        return translations;
    }

    trans(string, params = {}) {
        let raw = this.translations[string + ''] || string;
        return Validate.isEmpty(params) ? raw :
            Object.entries(params).map(param => raw.replace(`{${param[0]}}`, param[1] + ''));
    }
}
class FormField {

    get selectors() { return Instructor.helpers[this.constructor.name] }

    constructor() {
        this.label = '';
        this.type = 'text';
        this.required = false;
        this.validate = null;
        this.value = null;
        this.minLength = null;
        this.maxLength = null;
        this.errors = new Set();
        this.constraints = new Set();
        this.element = undefined;
        this.group = undefined;
        this.helper = undefined;
    }

    /**
     * @param {HTMLElement} element
     */
    setElement(element) {
        if (Validate.isHTMLElement(element)) {
            this.element = element;
            this.group = this.element.closest('.' + this.selectors.group);
            this.helper = this.group.querySelector('.' + this.selectors.helper);
        } else {
            console.error(element, 'it isn\'t a DOMElement');
        }
        return this;
    }
    /**
     * @param {string} type
     */
    setType(type) {
        this.type = type + '';
        if (this.element !== undefined && this.element.type !== this.type)
            this.element.type = this.type;
        return this;
    }

    /**
     * @param {boolean} required
     */
    setRequired(required) {
        this.required = !!(required);
        if (this.element !== undefined && this.required !== this.element.required) {
            this.element.required = this.required;
            this.addConstraint('required');
        }

        return this;
    }

    /**
     * @param {string} validate
     */
    setValidate(validate) {
        if (typeof Validate[validate + ''] === 'function') {
            this.validate = validate + '';
            this.addConstraint(this.validate);
        }
        return this;
    }
    /**
     * @param {string} value
     */
    setValue(value = value + '') {
        this.value = value;
        if (this.element !== undefined &&
            this.element.value !== this.value) this.element.value = this.value;
        return this;
    }

    /**
     * @param {string} size
     */
    setMinLength(size) {
        if (Validate.isUnsignedInt(size) && size > 0 &&
            (this.maxLength !== null && size < this.maxLength)) {
            this.minLength = size;
            this.addConstraint('minLength:' + size);
        } else {
            if (this.maxLength !== null && size > this.maxLength)
                console.error({ size }, 'it isn\'t an integer and greater than 0',
                    `min ${size} it is greater than or equal to max ${this.maxLength} length`);
            else
                console.error({ size }, 'it isn\'t an integer and greater than 0');
        }
        return this;
    }

    /**
     * @param {string} size
     */
    setMaxLength(size) {
        if (Validate.isUnsignedInt(size) && size > 0) {
            this.maxLength = size;
            this.addConstraint('maxLength:' + size);
        } else {
            console.error({ size }, 'it isn\'t an integer and greater than 0');
        }
        return this;
    }


    /**
     * @param {string} value
     */
    addConstraint(value) {
        this.constraints.add(value + '');
        return this;
    }

    /**
     * @param {string} errorString
     */
    addError(errorString) {
        this.errors.add(errorString + '');
        return this;
    }

    /**
     * @param {string} errorString
     */
    removeError(errorString) {
        this.errors.delete(errorString + '');
        return this;
    }

    get hasErrors() {
        return this.errors.size > 0 ? true : false;
    }

    displayErrors() {
        if (this.hasError) {
            return this.helper.innerHTML(
                '<ul>' +
                this.errors.map(err => `<li>${err}</li>`)
                + '<ul>'
            );
        } else {
            return this.helper.innerHTML('');
        }
    }

};
class Form {

    #selectors = {
        floating_labels: 'floating-label-form-group',
        country_change: 'js-country',
        field_selectors: Instructor.helpers[this.constructor.name],
    };

    get id() { return null };
    get fields() { return {} };
    errors = {};

    constructor() {
        this.fieldInstance = new FormField();
        this.translate = new Translate();
        this.constraintTranslate = new ValidateConstraintTranslator(this.translate);
    }

    togglePasswordVisibility() {
        document.querySelectorAll('button[data-action="show-password"]').forEach(el => {
            const input = el.parentElement.querySelector('input.js-visible-password');
            el.addEventListener('click', (ev) => {
                const cT = ev.currentTarget;
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
    }

    floatingLabels() {
        const selector = this.#selectors.floating_labels;
        document.querySelectorAll('.' + selector).forEach(el => {
            el.addEventListener('input', ev => {
                const cT = ev.currentTarget,
                    t = ev.target;
                if (t.value && t.value.length > 0)
                    cT.classList.add(selector + '-with-value');
            });
            el.addEventListener('change', ev => {
                const cT = ev.currentTarget,
                    t = ev.target,
                    v = t.tagName === 'SELECT' ?
                        t.options[t.selectedIndex].getAttribute('value') : t.value;
                if (!v || v.length === 0)
                    cT.classList.remove(selector + '-with-value');
            });
            el.addEventListener('focus', ev => {
                const cT = ev.currentTarget;
                cT.classList.add(selector + '-with-focus');
            }, true);
            el.addEventListener('blur', ev => {
                const cT = ev.currentTarget;
                cT.classList.remove(selector + '-with-focus');
            }, true);
        });
    }

    onCountryChange() {
        if (!Validate.isLoadedObject(this.handler) && this.handler.tagName !== 'FORM') return;
        const countryField = this.handler.querySelector('select.' + this.#selectors.country_change);
        countryField.addEventListener('change', ev => {
            const cT = ev.currentTarget,
                t = ev.target,
                iso = t.options[t.selectedIndex].getAttribute('data-iso-code');
            this.displayDni(iso);
        }, false);
    }

    displayDni(iso) {
        if (!Validate.isLoadedObject(this.handler) && this.handler.tagName !== 'FORM') return;
        const dniField = this.handler.getElementsByName('dni')[0],
            group = dniField.closest(this.#selectors.field_selectors.group);
        console.log(group, iso);
    }

    displayVatnumber(iso) {
        if (!Validate.isLoadedObject(this.handler) && this.handler.tagName !== 'FORM') return;
        const vatnumberField = this.handler.getElementsByName('vatnumber')[0];
    }

    init() {
        if (this.constructor.name === 'Form') {
            this.togglePasswordVisibility();
            this.floatingLabels();
        } else {
            this.onCountryChange();
            this.validate();
        }
    }

    getErrors() {
        for (let en in Object.entries(this.fields)) {
            const name = en[0], field = en[1];
            if (!(field instanceof FormField)) break;
            this.errors[name] = field.errors;
        };

        return this.errors;
    }

    get handler() {
        return document.getElementById(this.id) !== null ? document.getElementById(this.id) : null;
    }

    get hasErrors() {
        return !Validate.isEmpty(this.getErrors()) ? true : false;
    }

    validate() {
        if (this.fields === undefined) return;
        for (let field in Object.values(this.fields)) {
            if (!(field instanceof FormField)) break;
            if (field.required && !field.value) {
                field.addError(
                    this.constraintTranslate['Field is required']
                );
                continue;
            } else if (!field.required && !field.value) {
                continue;
            }
            for (let constraint in field.constraints) {
                if (!Validate[constraint](field.value)) {
                    field.addError(
                        this.constraintTranslate[constraint]
                    );
                }
            }
            field.displayErrors();
        };
        return !this.hasErrors;
    }
};

class ValidateConstraintTranslator {
    constructor(translator) {
        this.translator = translator;
    }
    /**
     * @param {string} validator
     *
     * @return {string}
     */
    translate(validator) {
        if (validator === 'isCustomerName') {
            return this.translator.trans('Name is incorrect.');
        }
        if (validator === 'required') {
            return this.translator.trans('Required field');
        }
        if (validator === 'isPassword') {
            return this.translator.trans();
        }
        return this.translator.trans('Invalid format.');
    }
}

class DropDown {
    constructor(dropdowns) {
        this.dropdowns = dropdowns;
    }

    init() {
        [...document.querySelectorAll(this.dropdowns)].map(dropdown => {
            let close = false

            function toggle(e) {
                e.stopPropagation();
                let dropdown = this;
                let menu = dropdown.nextSibling;

                while (menu && menu.nodeType != 1) {
                    menu = menu.nextSibling
                }
                if (!menu) return;
                if (menu.style.display !== 'block') {
                    menu.style.display = 'block';
                    if (close) close.style.display = "none";
                    close = menu;
                } else {
                    menu.style.display = 'none';
                    close = false;
                }
            };
            function closeAll() {
                close.style.display = 'none';
            };
            
            dropdown.addEventListener("click", toggle, true); 

            window.onclick = function (ev) {
                if (close) {
                    closeAll.call(ev.target);
                }
            };
        });
    }
}
// Customer Form
class CustomerForm extends Form {

    get id() { return 'customer-form' };
    get fields() {
        return {
            firstname: new FormField()
                .setRequired(true)
                .setValidate('isCustomerName')
                .setMaxLength(255),
            lastname: new FormField()
                .setRequired(true)
                .setValidate('isCustomerName')
                .setMaxLength(255),
            email: new FormField()
                .setType('email')
                .setRequired(true)
                .setValidate('isEmail')
                .setMaxLength(255),
            password: new FormField()
                .setType('password')
                .setValidate('isPassword')
                .setRequired(true),
            confirm_password: new FormField()
                .setType('password')
                .setValidate('isPassword')
                .setRequired(true),
            message: new FormField().setMaxLength(255),
            privacy_terms: new FormField()
                .setType('checkbox')
                .setRequired(true),
        }
    };
    onAccountTypeChange() {
        // |----------->
    }
    init() {
        super.init();
        this.onAccountTypeChange();
    }
}