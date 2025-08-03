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
        link.addEventListener('click', () => slideshow.showSlide(i)) ;
    }) ;
}

function initCompetences()
{
    const listeCompetences=[
        {"label":"HTML", "img":"html.svg"},
        {"label":"CSS", "img":"css.svg"},
        {"label":"JavaScript", "img":"javascript.svg"},
        {"label":"PHP", "img":"php.svg"},
        {"label":"SQL", "img":"sql.svg"},
        {"label":"Tailwind", "img":"tailwind-css.svg"},
        {"label":"Angular", "img":"angular.svg"},
        {"label":"React", "img":"react.svg"},
        {"label":"GitHub", "img":"github.svg"},
        {"label":"Figma", "img":"figma.svg"},
        {"label":"VSCode", "img":"vscode.svg"},
        {"label":"Windows", "img":"windows.svg"},
        {"label":"Ubuntu", "img":"ubuntu.svg"}
    ] ;
    
    const template=document.getElementById('competence') ;
    const containerCompetences=document.querySelector('.competences') ;
    listeCompetences.forEach(function(competence)
    {
        const newCompetence=template.content.cloneNode(true) ;
        const img=newCompetence.querySelector('img') ;
        img.setAttribute('src', ('assets/competences/'+competence.img)) ;
        img.setAttribute('alt', ('logo '+competence.label))
        const label=newCompetence.querySelector('p.label') ;
        label.innerHTML=competence.label ;
        containerCompetences.append(newCompetence) ;
    }) ;
    
}