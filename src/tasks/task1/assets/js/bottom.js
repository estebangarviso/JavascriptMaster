/*!
 * Copyright 2021 Esteban Garviso
 * Licensed under MIT (https://github.com/estebangarviso/JavascriptMaster/blob/main/LICENSE.md)
 */

document.addEventListener('DOMContentLoaded', function (e){
    "use strict";
    let dropDownEl = '.js-dropdown';
    const form = new Form();
    let dropdown = new DropDown(dropDownEl);
    let customerform = new CustomerForm();
    // Initialize Components
    form.init();
    dropdown.init(dropDownEl);
    customerform.init();
});