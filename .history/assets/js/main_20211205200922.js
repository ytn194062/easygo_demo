// Header

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const takeRoom = document.querySelector('.header__search-take-room');
const checkOut = document.querySelector('.header__search-check-out');
const customer = document.querySelector('.header__search-customer');
const day = document.querySelector('.header__search-day');
const placeSub = document.querySelector('.header__search-place-sub');
const takeRoomSub = document.querySelector('.header__search-take-room-sub');
const header__search = document.querySelector('.header__search');
const headerSearchItems = document.querySelectorAll('.header__search-item');
const headerSearchCustomer = document.querySelector('.header__search-customer');
const headerSearchCustomerSub = document.querySelector('.header__search-customer-sub');
const headerSearchBtn = document.querySelector('.header__search-btn');
const headerMobile = document.querySelector('.header-mobile');
const headerRightBtn = document.querySelector('.header__right-button');

let modal = document.querySelector('.language-currency-modal');

/*----------------Active search item-------------- */
for (const item of headerSearchItems) {
    item.onclick = function activeSearchItem() {
        const active = document.querySelector('.header__search-item--active');
        if(active != null) {
            active.classList.remove('header__search-item--active');
        }
        const subDisplayed = document.querySelector('.header__search-sub--display');
        if (subDisplayed) {
            subDisplayed.classList.remove('header__search-sub--display');
        }

        if (item.classList.contains('header__search-place')) {
            placeSub.classList.add('header__search-sub--display');
        }

        if (item.classList.contains('header__search-take-room') || item.classList.contains('header__search-check-out')|| (item.classList.contains('header__search-day'))) {
            takeRoomSub.classList.add('header__search-sub--display');
        }

        if (item.classList.contains('header__search-customer')) {
            headerSearchCustomerSub.classList.add('header__search-sub--display');
        }


        header__search.classList.add('header__search--gray');
        item.classList.add('header__search-item--active');

        headerSearchCustomer.classList.add('flex2');
        headerSearchBtn.classList.add('header__search-btn--full');
    }
}






// End header