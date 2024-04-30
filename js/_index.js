window.onload = function() {
  const BD = {
  subjectAreas: [
    {id: 1, title: "Racket", areas: []},
    {id: 2, title: "JavaScript", areas: []},
    {id: 3, title: "TypeScript", areas: []},
    {id: 4, title: "PHP", areas: []},
    {id: 5, title: "Angular", areas: []}
  ],
  // "functional programming"
}

let subjectAreas = BD.subjectAreas.sort((a, b) => a.title > b.title ? 1 : -1);
for (let i = 0; i < subjectAreas.length; i++) {
  let selectedId = subjectAreas[i].id;
  let selectedTitle = subjectAreas[i].title;
  let newLi = document.createElement('li');
  let newId = "mainMenu_top_" + subjectAreas[i].id;
  $(newLi).attr('id', newId);
  $(newLi).text(selectedTitle);
  document.getElementById("mainMenu_top").appendChild(newLi);
}





const PageType = {
    MainPageType: "main",
    SomePageType: "some",
    
    DefaultPageType: "main"
  };
  
  const mainPageTemplate = () => (`<div class="page"><span>main</span></div>`);
  const somePageTemplate = () => (`<div class="page"><span>some</span></div>`);
  
  const templates = {
    [ PageType.MainPageType ]: mainPageTemplate,
    [ PageType.SomePageType ]: somePageTemplate,
  }
  
  const router = {
    set( routeType ){
      document.body.querySelector('main').innerHTML = templates[ routeType ]();
    }
  };
  
  router.set( PageType.DefaultPageType );
  
  // navigation
  
  // document.body.querySelector('.button-group__navbar').addEventListener('click', ({target}) => {
  //   if( target.classList.contains( 'button-group__navbar__button' ) ){
  //     router.set( target.dataset.route )
  //   }
  // });


}