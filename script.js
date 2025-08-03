document.addEventListener("DOMContentLoaded", init) ;

function init()
{
    initNavbar() ;
    initCompetences() ;
}

function initNavbar()
{
    const slideshow=document.querySelector('ccl-slideshow')
    const navbarLinks=document.querySelectorAll('ccl-navbar .wrapper > *:not([event="undefined"])') ;
    navbarLinks.forEach(function(link, i)
    {
        console.log(link, i)
        link.addEventListener('click', () => slideshow.showSlide(i)) ;
    }) ;
    const collapsedContainerLinks=document.querySelectorAll('ccl-navbar .collapsedContainer > *:not(#navbarCloseButton)') ;
    collapsedContainerLinks.forEach(function(link, i)
    {
        console.log(link, i)
        link.addEventListener('click', () => slideshow.showSlide(i)) ;
    }) ;
}

function initCompetences()
{
    const listeCompetencesFront=[
        {"label":"HTML", "img":"html.svg"},
        {"label":"CSS", "img":"css.svg"},
        {"label":"JavaScript", "img":"javascript.svg"},
        {"label":"Tailwind", "img":"tailwind-css.svg"},
        {"label":"Angular", "img":"angular.svg"},
        {"label":"React", "img":"react.svg"},
    ] ;
    const listeCompetencesBack=[
        {"label":"PHP", "img":"php.svg"},
        {"label":"SQL", "img":"sql.svg"},
        {"label":"MongoDB", "img":"mongodb.svg"}
    ] ;
    const listeCompetencesOutils=[
        {"label":"GitHub", "img":"github.svg"},
        {"label":"Figma", "img":"figma.svg"},
        {"label":"VSCode", "img":"vscode.svg"},
        {"label":"Windows", "img":"windows.svg"},
        {"label":"Ubuntu", "img":"ubuntu.svg"}
    ] ;
    
    const containerCompetencesFront=document.getElementById('competencesFront') ;
    const containerCompetencesBack=document.getElementById('competencesBack') ;
    const containerCompetencesOutils=document.getElementById('competencesOutils') ;
    addCompetences(containerCompetencesFront, listeCompetencesFront) ;
    addCompetences(containerCompetencesBack, listeCompetencesBack) ;
    addCompetences(containerCompetencesOutils, listeCompetencesOutils) ;
}

function addCompetences(container, liste)
{
    const template=document.getElementById('competence') ;
    liste.forEach(function(competence)
    {
        const newCompetence=template.content.cloneNode(true) ;
        const img=newCompetence.querySelector('img') ;
        img.setAttribute('src', ('assets/competences/'+competence.img)) ;
        img.setAttribute('alt', ('logo '+competence.label))
        const label=newCompetence.querySelector('p.label') ;
        label.innerHTML=competence.label ;
        container.append(newCompetence) ;
    }) ;
}