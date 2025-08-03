document.addEventListener("DOMContentLoaded", initFloatingIcons);

function initFloatingIcons() 
{
  const iconPositions={
    icon1: { top: '7%', left: '75%', delay: '0s' },
    icon2: { top: '30%', left: '5%', delay: '0.2s' },
    icon3: { top: '60%', left: '70%', delay: '0.6s' },
    icon4: { top: '-3%', left: '30%', delay: '1s' },
    icon5: { top: '43%', left: '90%', delay: '0.4s' },
    icon6: { top: '70%', left: '22%', delay: '0.8s' }
  };

  document.querySelectorAll(".floating-icon").forEach(function(icon) 
  {
    const iconClass=Array.from(icon.classList).find(cls => cls.startsWith('icon')) ;
    
    if (iconClass && iconPositions[iconClass]) 
    {
      const position=iconPositions[iconClass] ;
    
      const offsetX=(Math.random() * 40 - 20).toFixed(2) ;
      const offsetY=(Math.random() * 40 - 20).toFixed(2) ;
      icon.style.top='calc('+position.top+' + '+offsetY+'px)' ;
      icon.style.left='calc('+position.left+' + '+offsetX+'px)' ;
      //icon.style.animationDelay=position.delay ;
    }

    const rotate = (Math.random() < 0.5 ? 
      (Math.random() * 10 + 5) : 
      (Math.random() * 10 - 15)
    ).toFixed(2) ;
    
    const translateX = (Math.random() < 0.5 ? 
      (Math.random() * 10 + 5) : 
      (Math.random() * 10 - 15)
    ).toFixed(2) ;
    
    const translateY = (Math.random() < 0.5 ? 
      (Math.random() * 10 + 5) : 
      (Math.random() * 10 - 15)
    ).toFixed(2) ;

    const duree=(Math.random() * 0.5 + 0.4).toFixed(2) ;
    const distance=-1*(Math.random() * 600 + 300).toFixed(2) ;

    icon.style.setProperty('--ROTATE', `${rotate}deg`) ;
    icon.style.setProperty('--TRANSLATE-X', `${translateX}px`) ;
    icon.style.setProperty('--TRANSLATE-Y', `${translateY}px`) ;
    icon.style.setProperty('--DUREE-FALL-IN', `${duree}s`) ;
    icon.style.setProperty('--DISTANCE-FALL-IN', `${distance}px`) ;
  }) ;
}