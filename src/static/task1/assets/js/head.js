const Validate = {
    PASSWORD_LENGTH: 8,
    /**
     * Check for standard name validity.
     *
     * @param string $name Name to validate
     *
     * @return bool Validity is ok or not
     */
    isGenericName: function (name) {
        return this.isEmpty(name) || /^[^<>={}]*$/u.test(name);
    },
    /**
     * Check for e-mail validity.
     *
     * @param string $email e-mail address to validate
     *
     * @return bool Validity is ok or not
     */
    isEmail: function (email) {
        return !this.isEmpty(email) || /^[a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]+[.a-z\p{L}0-9!#$%&'*+\/=?^`{}|~_-]*@[a-z\p{L}0-9]+(?:[.]?[_a-z\p{L}0-9-])*\.[a-z\p{L}0-9]+$/ui.test(email);
    },
    /**
     * Check for password validity.
     *
     * @param string $password Password to validate
     * @param int $size
     *
     * @return bool Validity is ok or not
     */
    isPassword: function (password, size = this.PASSWORD_LENGTH) {
        return Tools.strLen(password) >= size;
    },
    /**
     * Check for boolean validity.
     *
     * @param bool $bool Boolean to validate
     *
     * @return bool Validity is ok or not
     */
    isBool: function (bool) {
        return bool === null || bool === true || bool === false || /^(0|1)$/.test(bool);
    },
    /**
     * Check is value is empty.
     *
     * @param string $value Value to validate
     *
     * @return bool Validity is ok or not
     */
    isEmpty: function ($value){
        return $value === null || $value === 'undefined' || $value === '';
    }
};
const Tools = {
    strLen: function (str) {
        if(Array.isArray(str))
            return false;
        str = this.html_entities_decode(str);
        return this.mb_strlen(str);
    },
    mb_strlen: function (str) {
        let len = 0;
        for(var i = 0; i < str.length; i++) {
            len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 2 : 1;
        }
        return len;
    },
    html_entities_decode: function (str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
}