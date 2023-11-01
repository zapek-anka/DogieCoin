/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


class dogieCoin {
    constructor() {
        this.menuToggle = document.querySelector('.js-toggle');
        this.openModalBtn = document.querySelectorAll('.js-open-modal');
        this.closeModalBtn = document.querySelector('.js-close-modal');
        this.modal = document.querySelector('.js-modal');
        this.cardsUpdBtn = document.querySelector('.js-get-cards');
        this.cardWrap = document.querySelector('.js-card-wrap');
        this.callbackForm = document.querySelector('.js-callback-form');
        this.formHeader = document.querySelector('.js-form-header');
        this.usernameEl = document.querySelector('#username');
        this.phoneEl = document.querySelector('#phone');
        this.emailEl = document.querySelector('#email');

        this.pageCount = 1;
        this.commits;

        this.header = document.querySelector('.header');

        this.menuToggle.addEventListener('click', this.toggleMenu.bind(this));

        this.cardsUpdBtn.addEventListener('click', this.insertCards.bind(this));

        this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));

        this.callbackForm.addEventListener('input', function (evt) {
            switch (evt.target.id) {
                case 'username':
                    this.checkUsername;
                    break;
                case 'phone':
                    this.checkPhone;
                    break;
                case 'email':
                    this.checkEmail;
                    break;
            }
        });

        this.callbackForm.addEventListener('submit', this.validateForm.bind(this));

        window.addEventListener('load', this.defaultCards.bind((this)));
        window.addEventListener('resize', this.closeOnResize.bind(this));

        this.openModalBtn.forEach((btn) => btn.addEventListener('click', this.openModal.bind(this)));
    }


    isEmailValid(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    isPhoneValid(phone) {
        const re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        return re.test(phone);
    }

    isRequired(value) {
        return value === '' ? false : true;
    }

    isBetween(length, min, max) {
        return length < min || length > max ? false : true;
    };

    showError(input, message) {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');
        const error = formField.querySelector('small');
        error.textContent = message;
    }

    checkEmail() {
        let valid = false;
        const email = this.emailEl.value.trim();
        if (!this.isRequired(email)) {
            this.showError(this.emailEl, 'Заполните это поле');
        } else if (!this.isEmailValid(email)) {
            this.showError(this.emailEl, 'Некорректный адрес')
        } else {
            this.showSuccess(this.emailEl);
            valid = true;
        }
        return valid;
    }

    checkPhone() {
        let valid = false;
        const phone = this.phoneEl.value.trim();
        if (!this.isRequired(phone)) {
            this.showError(this.phoneEl, 'Заполните это поле');
        } else if (!this.isPhoneValid(phone)) {
            this.showError(this.phoneEl, 'Некорректный номер')
        } else {
            this.showSuccess(this.phoneEl);
            valid = true;
        }
        return valid;
    }

    checkUsername() {
        let valid = false;
        const min = 2,
            max = 25;

        const username = this.usernameEl.value.trim();

        if (!this.isRequired(username)) {
            this.showError(this.usernameEl, 'Заполните это поле');
        } else if (!this.isBetween(username.length, min, max)) {
            this.showError(this.usernameEl, `В имени пользователя должно быть не менее ${min} и не более ${max} символов`)
        } else {
            this.showSuccess(this.usernameEl);
            valid = true;
        }
        return valid;
    }

    showError(input, message) {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');
        const error = formField.querySelector('small');
        error.innerHTML = message;
    }

    showSuccess(input) {
        const formField = input.parentElement;
        formField.classList.remove('error');
        formField.classList.add('success');
        const error = formField.querySelector('small');
        error.textContent = '';
    }

    validateForm($event) {
        $event.preventDefault();
        let isUsernameValid = this.checkUsername(),
            isEmailValid = this.checkEmail(),
            isPhoneValid = this.checkPhone();
        
        let isFormValid = isUsernameValid &&
            isEmailValid &&
            isPhoneValid;
        
        if (isFormValid) {
            this.formHeader.style.textAlign = 'center';
            this.formHeader.innerHTML = 'Форма успешно отправлена!';
            this.callbackForm.style.display = 'none';
            this.callbackForm.reset();
            setTimeout(this.closeModal.bind(this), 1500);
        }
    }

    insertCards() {
        let cardTmp;
        const setSize = 5;
        const slicedArray = this.commits.slice(((this.pageCount - 1) * setSize), (this.pageCount * setSize));
        slicedArray.forEach((item) => {
            cardTmp = `<div class="card">
                    <div class="card__img">
                        <img src="../src/img/hero-bg.png" alt="placeholder image">
                    </div>
                    <div class="card__info">
                        <h5 class="card__title">random title ${item.id}</h5>
                        <p class="card__subtitle">${item.title}</p>
                        <p class="card__text">${item.body}</p>
                        <p class="card__credits">Posted by <b>Eugenia</b>, on July 24, 2019</p>
                        <a href="#" class="card__btn" target="_blank">Continue reading</a>
                    </div>
                </div>`;
            if (this.pageCount <= 6) {
                this.cardWrap.insertAdjacentHTML('beforeend', cardTmp);
                if (this.pageCount === 6) {
                    this.cardsUpdBtn.style.display = 'none';
                }
            }
        });
        this.pageCount++;
    }

    async defaultCards() {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let response = await fetch(url);
        this.commits = await response.json();
        this.insertCards();
    }

    toggleMenu() {
        this.header.classList.toggle('header_open');
        document.body.classList.toggle('no-scroll');
    }

    closeOnResize() {
        if (window.innerWidth >= 1440) {
            this.header.classList.remove('header_open');
            document.body.classList.remove('no-scroll');
        }
    }

    openModal() {
        this.modal.classList.add('modal_open');
        document.body.classList.add('no-scroll');
    }

    closeModal() {
        this.modal.classList.remove('modal_open');
        document.body.classList.remove('no-scroll');
        this.callbackForm.style.display = 'flex';
        this.formHeader.style.textAlign = 'left';
        this.formHeader.innerHTML = 'Оставьте свои данные и&nbsp;мы&nbsp;с&nbsp;Вами&nbsp;свяжемся!';
    }
}

new dogieCoin();
})();

/******/ })()
;