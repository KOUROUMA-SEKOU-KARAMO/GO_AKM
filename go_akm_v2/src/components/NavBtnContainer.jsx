import IconsBtn from '../sass/components/IconsBtnAction.module.scss'
import dataIcons from '../data/dataIcons.json' 
export default function NavBtnContainer(){  
      const icons=dataIcons[0]
 
       return(
         <div className={IconsBtn.containerBtns}>
                      <button className={IconsBtn.openNavBars} data-open-navbar="open-navbar">
                       <img src={icons.menuBars}
                        data-open-navbar="open-navbar" alt="navigation bars icon"/>
                    </button>
                    <button className={IconsBtn.closeNavBars} data-close-Navbar="close-navbar">
                       <img src={icons.closeBars}
                        data-close-navbar="close-navbar" alt="navigation bars icon "/>
                    </button>
                </div>
       )
}