const icon = document.querySelectorAll('.icon-minmax');
const information = document.querySelectorAll('.container__informacoes__info');



for (let i = 0; i < icon.length; i++) {
    const iconElement = icon[i];


    iconElement.addEventListener('click',() => {
        let currentIcon = iconElement.getAttribute('src');
        let srcIconMinus = './assets/images/icon-plus.svg';

        if(currentIcon == srcIconMinus){
           iconElement.setAttribute('src', './assets/images/icon-minus.svg');
           information[i].style.display = 'block';
        }else{
            iconElement.setAttribute('src', './assets/images/icon-plus.svg');
            information[i].style.display = 'none';
        }
    });

    
}
