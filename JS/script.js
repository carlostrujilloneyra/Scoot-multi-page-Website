// Daremos interacción al main hamburguer

const showNav = (idHamburguer, idContentHeader, idNav, idList,listEnlaces)=> {
    const hamburguer = document.getElementById(idHamburguer),
          contentHeader= document.getElementById(idContentHeader),
          nav = document.getElementById(idNav),
          list = document.getElementById(idList),
          enlaces = Array.from(document.querySelectorAll(listEnlaces))

          if(hamburguer, contentHeader, nav, list, enlaces){
              hamburguer.addEventListener('click',()=>{
                  hamburguer.classList.toggle('main-hamburguer-new')
                  contentHeader.classList.toggle('main-header__content--newStyle')
                  nav.classList.toggle('main-nav--newStyle')
                  list.classList.toggle('main-nav__list--newStyle')

                  enlaces.forEach((enlace) => {
                      enlace.classList.toggle('enlace--newStyle')
                  })
                  
              })
          }

}

showNav('main-hamburguer','main-header__content','main-nav','main-nav__list','.enlace-id');

// Interacción al mostrar y ocultar información

const hiddeContent = (idChange, idContainer,idText) => {
    const buttonChange = document.getElementById(idChange),
        container = document.getElementById(idContainer),
        text = document.getElementById(idText)

    if (buttonChange, container, text) {
        buttonChange.addEventListener('click', () => {
            buttonChange.classList.toggle('new-interaction');
            container.classList.toggle('main-content-section__box--new');
            text.classList.toggle('text-example__new');
        });
    }
}

hiddeContent('first-interaction', 'first-container', 'first-text');
hiddeContent('second-interaction', 'second-container', 'second-text');


