const containerNavbarBtn=document.querySelector(".container-btns")  
const navMenuMobile=document.querySelector(".nav-menu-mobile")  
const objectBtns={
    openBtnNavbar:document.querySelector('.open-navbars'),
    closeBtnNavbar:document.querySelector('.close-navbar')
}

 
containerNavbarBtn.addEventListener('click',function(e){
     e.preventDefault()
  if(e.target.dataset.openNavbar){
     objectBtns.openBtnNavbar.style.display='none'
     objectBtns.closeBtnNavbar.style.display='flex'
     navMenuMobile.style.display='flex'
    }else if(e.target.dataset.closeNavbar){ 
          objectBtns.openBtnNavbar.style.display='flex'
          objectBtns.closeBtnNavbar.style.display='none'
          navMenuMobile.style.display='none'
          console.log(navMenuMobile)
  }
})