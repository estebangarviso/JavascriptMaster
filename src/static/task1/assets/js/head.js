/*!
 * Copyright 2021 Esteban Garviso
 * Licensed under MIT (https://github.com/estebangarviso/JavascriptMaster/blob/main/LICENSE.md)
 */
'use strict';
//  Declarating variables and classes
const Validate = {
    PASSWORD_LENGTH: 8,
    /**
     * Check for standard name validity.
     *
     * @param string name Name to validate
     *
     * @return bool Validity is ok or not
     */
    isGenericName: function (name) {
        return this.isEmpty(name) || /^[^<>={}]*$/u.test(name);
    },
    /**
     * Check for e-mail validity.
     *
     * @param string email e-mail address to validate
     *
     * @return bool Validity is ok or not
     */
    isEmail: function (email) {
        return !this.isEmpty(email) || /^[a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]+[.a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]*@[a-z\p{L}0-9]+(?:[.]?[_a-z\p{L}0-9-])*\.[a-z\p{L}0-9]+$/ui.test(email);
    },
    /**
     * Check for password validity.
     *
     * @param string password Password to validate
     * @param int size
     *
     * @return bool Validity is ok or not
     */
    isPassword: function (password, size = this.PASSWORD_LENGTH) {
        return Tools.strLen(password) >= size;
    },
    /**
     * Check for boolean validity.
     *
     * @param bool bool Boolean to validate
     *
     * @return bool Validity is ok or not
     */
    isBool: function (bool) {
        return bool === null || bool === true || bool === false || /^(0|1)$/.test(bool);
    },
    /**
     * Check if value is empty.
     *
     * @param string value Value to validate
     *
     * @return bool Validity is ok or not
     */
    isEmpty: function (value) {
        return value === null || value === undefined || value === '' || value === {} || value === [];
    },
    /**
     * Check object validity.
     *
     * @param object object Object to validate
     *
     * @return bool Validity is ok or not
     */
    isLoadedObject: function (obj) {
        if (typeof obj !== 'object' && !obj.id) {
            return false;
        }
        return true;
    }
};
const Tools = {
    strLen: function (str) {
        if (Array.isArray(str))
            return false;
        str = this.html_entities_decode(str);
        return this.mb_strlen(str);
    },
    mb_strlen: function (str) {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 2 : 1;
        }
        return len;
    },
    html_entities_decode: function (str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },
};
class FormField {

    constructor(name, type, required, value, errors) {
        this.name = name || '';
        this.type = type || 'text';
        this.required = required || false;
        this.value = value || null;
        this.errors = errors || [];
    };

    setName(name) {
        this.name = name + '';
        return this;
    };

    getName() {
        return this.name;
    };

    setType(type) {
        this.type = type + '';
        return this;
    };

    getType() {
        return this.type;
    };

    setRequired(required) {
        this.required = !!(required);
        return this;
    };

    getRequired() {
        return this.required;
    };

    setValue(value) {
        this.value = value + '';
        return this;
    };

    getValue() {
        return this.value;
    };

    addError(errorString) {
        this.errors.push(errorString + '');
        return this;
    };

    getErrors() {
        return this.errors;
    };

    getErrorsList() {
        let ul = document.createElement('ul');
        for (let err of this.getErrors) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(err));
            ul.appendChild(li);
        }
        return ul;
    };
}
class Form {
    constructor(formFields) {
        this.formFields = formFields || {};
        this.errors = {};
    }
    getErrors() {
        for (let key of Object.keys(this.formFields)) {
            let formField = this.formFields[key];
            if (!(formField instanceof FormField)) return this.errors;
            this.errors[formField.getName()] = formField.getErrors();
        }

        return this.errors;
    }
    hasErrors() {
        if (!Validate.isEmpty(this.errors)) {
            return true;
        }

        return false;
    }
};
//  Array of Countries
const Countries = [
    { name: 'Chile', callPrefix: '56', dniName: 'RUT'},
    { name: 'Argentina', callPrefix: '56', dniName: 'DNI'},
    { name: 'Peru', callPrefix: '56', dniName: 'DNI'},
    { name: 'México', callPrefix: '56', dniName: 'NIE'},
];
// Build RegisterForm
const RegisterForm = {
    'id': 'registerForm',
    'form': new Form({
        firstname: new FormField('firstname').setRequired(true),
        lastname: new FormField('lastname').setRequired(true),
        email: new FormField('email', 'email', true),
        password: new FormField('password', 'password', true),
        confirm_password: new FormField('confirm_password', 'password', true),
        privacyTerms: new FormField('privacyTerms', 'checkbox', true),
    }),
};