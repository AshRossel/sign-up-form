const password = document.querySelector('#pwd');
const passwordconfirm = document.querySelector('#pwdconfirm');
const span = document.querySelector('.checkpassword');

const isEqual = function() {
    if (password.value !== passwordconfirm.value) {
        span.setAttribute("id", "error");
        password.style.outline = "1px solid red";
        passwordconfirm.style.outline = "1px solid red";
    } else {
        span.setAttribute("id", "");
        password.style.outline = "";
        passwordconfirm.style.outline = "";
    }
}

const toFocusIn = function(e) {
    e.target.style.outline = "1px solid blue";
}

const toFocusOut = function(e) {
    e.target.style.outline = "";

    if (password !== "") {
        isEqual();
    }
}

passwordconfirm.addEventListener('input', isEqual);
password.addEventListener('input', isEqual);
passwordconfirm.addEventListener('focusin', toFocusIn);
password.addEventListener('focusin', toFocusIn);
passwordconfirm.addEventListener('focusout', toFocusOut);
password.addEventListener('focusout', toFocusOut);