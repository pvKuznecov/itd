window.onload = function() {
    
    // const BD = {
    //     subjectAreas: [
    //         {id: 1, title: "Справочник", areas: []},
    //         {id: 2, title: "Racket", areas: []},
    //         {id: 3, title: "JavaScript", areas: []},
    //         {id: 4, title: "TypeScript", areas: []},
    //         {id: 5, title: "PHP", areas: []},
    //         {id: 6, title: "Angular", areas: []}
    //     ],
    //     // "functional programming"
    // };

    let subjectAreas = BD.subjectAreas.sort((a, b) => a.title > b.title ? 1 : -1);

    for (let i = 0; i < subjectAreas.length; i++) {
        let selectedId = subjectAreas[i].id;
        let selectedTitle = subjectAreas[i].title;
        let newLi = document.createElement('li');
        let newId = "mainMenu_top_" + subjectAreas[i].id;
        
        $(newLi).attr('id', newId);
        $(newLi).text(selectedTitle);
        document.getElementById("mainMenu_top").appendChild(newLi);
    };


}
