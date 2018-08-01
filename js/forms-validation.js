(function() {

    function Validator(form) {
        this.form = form;
        this.fields = this.form.querySelectorAll("[required]");
    }

})();

