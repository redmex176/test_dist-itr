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

    
});