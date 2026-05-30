import  styleNavbar from '../sass/components/Navbar.module.scss'

export default function  Navbar(){
     return(
       <nav className={styleNavbar.navbarHeader}>
                  <a href="./index.html" className={styleNavbar.logo}>GO_AKM </a>
                    <ul className={styleNavbar.navMenu}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Exhibitions </a></li>
                        <li><a href="#">shop </a></li>
                        <li><a href="./pages/contact.html">Contact</a></li>
                        <li><a href="./pages/sign-up.html">Sign Up</a></li>
                        <li><a href="./pages/sign-in.html">Sign in</a></li>
                        
                    </ul> 
             </nav>
     )
}