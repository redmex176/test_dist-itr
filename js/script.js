document.addEventListener('DOMContentLoaded', () => {

    function toogleHeader() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header__container');
            const scroll = window.scrollY;
            if(scroll >= 760) {
                header.classList.add('header__fixed');
                document.querySelector('.img__header-logo').style.display = 'none';
                document.querySelector('.img__header-logo-fix').style.display = 'block';
                document.querySelector('.header__rect-item').style.background ='#192144';
                document.querySelector('.img__header-tablet').style.display = 'none';
  
                document.querySelector('.img__header-mobile').style.display = 'none';

                document.querySelectorAll('.menu__link').forEach(item => {
                    item.style.color = '#192144';
                }); 

                document.querySelectorAll('.svg__header').forEach(item => {
                    item.style.fill = 'gray';
                });
                
            } else {

                document.querySelector('.img__header-logo').style.display = 'block';
                document.querySelector('.img__header-logo-fix').style.display = 'none';
                header.classList.remove('header__fixed');
                document.querySelector('.header__rect-item').style.background ='white';
                document.querySelector('.img__header-tablet').style.display = 'none';

                document.querySelectorAll('.menu__link').forEach(item => {
                    item.style.color = 'white';
                }); 

                document.querySelectorAll('.svg__header').forEach(item => {
                    item.style.fill = 'white';
                });
                
            }
            if(document.body.clientWidth <= 760) {
                
                document.querySelector('.img__header-logo').style.display = 'none';
                document.querySelector('.img__header-logo-fix').style.display = 'none';
                if(scroll > 760) {
                    document.querySelector('.img__header-tablet').style.display = 'block';
                    document.querySelector('.img__header-mobile').style.display = 'none';     
                } else {
                    document.querySelector('.img__header-tablet').style.display = 'none';
                    document.querySelector('.img__header-mobile').style.display = 'block';
                    document.querySelector('.img__header-logo').style.display = 'none';
                }
            } 
        }) 
        
    }
    toogleHeader();

    // modal(tariff)

    const modalTariff = document.querySelector('.modal__header-tablet'),
          modalTariffMob = document.querySelector('.modal__header-mobile'), 
          modalBtnOpen = document.querySelector('.tariff__link'),
          modalBtnClose = document.querySelector('.profile__modale__bottom-close'),
          modalBtnCloseMob = document.querySelector('.modal__close-mobile'),
          modalBtnCloseTariff = document.querySelector('.modal__close-mobile p'),
          modalBtnCloseHeader = document.querySelector('.modal__close-link'),
          modalBtnOpenHeader = document.querySelector('.header__menu-icon'),
          modalHeader = document.querySelector('.header__modal');

    modalBtnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        
        openModal();
        modalHeader.classList.add('none');
        document.querySelector('.modal__wrapp-mobile').classList.remove('none');
    });

    modalBtnClose.addEventListener('click', (e)=> {
        e.preventDefault();
        closeModal();
    });
    modalBtnCloseTariff.addEventListener('click', (e)=> {
        e.preventDefault();
        closeModal();
    });
    modalBtnCloseMob.addEventListener('click', (e)=> {
        e.preventDefault();
        closeModal();
    });

    modalBtnCloseHeader.addEventListener('click', (e)=> {
        e.preventDefault();
        closeModal();
        
    });

    modalBtnOpenHeader.addEventListener('click', (e)=> {
        e.preventDefault();
        openModal();
        modalTariff.classList.add('none');
    });

    function openModal() {
        modalTariff.classList.remove('none');
        document.querySelector('.tariff__wrapper').classList.add('none');
        modalHeader.classList.remove('none');
        modalHeader.classList.add('fade');
        if(document.body.clientWidth <= 760) {
            modalTariffMob.classList.remove('none');
            document.querySelector('.header__modal-wrapper').classList.add('none');
            document.querySelector('.modal__wrapp-mobile').classList.add('none');
        } 
    }

    function closeModal() {
        modalTariff.classList.add('none');
        modalTariffMob.classList.add('none');
        document.querySelector('.tariff__wrapper').classList.remove('none');
        document.querySelector('.header__modal-wrapper').classList.remove('none');
        modalHeader.classList.add('none');
        modalTariffMob.classList.add('none');
        // modalHeader.classList.remove('fade');
       
    }
    
});