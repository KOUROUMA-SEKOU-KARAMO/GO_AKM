
 import styleFooter from '../sass/components/footer.module.scss'
import { ContactFooterForm } from './ContactFooterForm.jsx'
export default function Footer(){
     return(
         <footer className={styleFooter.footer}>
                <div className={styleFooter.container}>
                    
                            <div className="description">
                                <h1>GO_AKM</h1>
                                <p>Beautiful photos fo Black and Brown people</p>
                            </div>
                            <div className="links-about">
                                <h3>About</h3>
                                <ul className="links"> 
                                    <li><a href="#">our mission</a></li>
                                    <li><a href="#">license</a></li>
                                    <li><a href="#">terms</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">contact</a></li>
                            </ul>
                            </div>
                            <div className="links">
                                <h3>Links</h3>
                                <ul className="links"> 
                                    <li><a href="#">Studio</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">sign up</a></li>
                                    <li><a href="#">status</a></li> 
                            </ul>
                            </div>
                            
                            <ContactFooterForm />
                </div>
                
    </footer>

     )
}

