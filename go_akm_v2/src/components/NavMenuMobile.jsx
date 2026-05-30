 import NavabarMenuMobile from '../sass/components/NavbarMenuMobile.module.scss' 

export default function NavMenu(){
    return(
          <ul className={NavabarMenuMobile.navMenuMbile}>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Work</a></li>
                     <li><a href="#">Exhibitions </a></li>
                     <li><a href="#">shop </a></li>
                     <li><a href="./pages/contact.html">Contact </a></li>
                     <li><a href="./pages/sign-up.html">Sign Up </a></li>
                     <li><a href="./pages/sign-in.html">Sign in </a></li>
                </ul>
    )
}