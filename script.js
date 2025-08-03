document.addEventListener("DOMContentLoaded", init) ;

function init()
{
    initNavbar() ;
    initCompetences() ;
    observeSlideChanges() ;
}

function observeSlideChanges() 
{
    const navbarLinks=document.querySelectorAll('ccl-navbar .wrapper > *:not(.logo)') ;
    const slides=document.querySelectorAll('ccl-slide') ;
    
    const observer=new MutationObserver(() => 
    {
        const activeLink=document.querySelector('ccl-navbar .active') ;
        if (activeLink)
            activeLink.classList.remove('active') ;

        const newIndex=Array.from(slides).findIndex(slide => slide.classList.contains('active')) ;
        const newLink=navbarLinks[newIndex] ;
        newLink.classList.add('active') ;
    });

    slides.forEach(slide => 
        observer.observe(slide, 
        {
            attributes: true,
            attributeFilter: ['class']
        })
    );
}

function initNavbar()
{
    const slideshow=document.querySelector('ccl-slideshow') ;
    const navbarLinks=document.querySelectorAll('ccl-navbar .wrapper > *:not(.logo)') ;
    navbarLinks.forEach(function(link, i)
    {
        link.addEventListener('click', () => 
        {
            slideshow.showSlide(i) ;
        }) ;

    }) ;
    const collapsedContainerLinks=document.querySelectorAll('ccl-navbar .collapsedContainer > *:not(#navbarCloseButton)') ;
    collapsedContainerLinks.forEach(function(link, i)
    {
        link.addEventListener('click', () => 
        {
            slideshow.showSlide(i) ;
            const navbar=document.querySelector('ccl-navbar') ;
            navbar.closeCollapsed() ;
        }) ;

    }) ;
}
function showSlide(id)
{
    const slideshow=document.querySelector('ccl-slideshow') ;
    slideshow.showSlide(id) ;
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

function contactSubmit()
{
    const form=document.getElementById("contactForm") ;

    const listeCustomInputs=form.querySelectorAll('ccl-input') ;
    listeCustomInputs.forEach(customInput =>
    {
        const value=getInputValue(customInput) ;
        const name=customInput.getAttribute('name') ;
        console.log(name, value, form.querySelector(`input[type="hidden"][name="${name}"]`))
        form.querySelector(`input[type="hidden"][name="${name}"]`).value=value ;
    }) ;

    form.submit() ;
}

function getInputValue(customInput) 
{
    const shadowInput=customInput.shadowRoot.querySelector("input, textarea") ;
    return shadowInput?.value || "" ;
}
