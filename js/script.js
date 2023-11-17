document.addEventListener('DOMContentLoaded', () => {

    
    function openModal() {
        const modal = document.querySelector('.modal__header-tablet'),
              btnModal = document.querySelector('.tariff__link a'),
              btnCloseModal = document.querySelector('.profile__modale__bottom-close');
            
        
        btnModal.addEventListener('click', (e) => {
            e.preventDefault();

            modal.classList.remove('none');
        })
        btnCloseModal.addEventListener('click', (e)=> {
            e.preventDefault();

            modal.classList.add('none');
            
        })

    }
    openModal();
});