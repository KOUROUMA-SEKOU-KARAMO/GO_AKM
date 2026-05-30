import HeroSection from "./HeroSection.jsx";
import Navbar from "./Navbar.jsx";
import NavBtnContainer from "./NavBtnContainer.jsx";
import NavMenuMobile from "./NavMenuMobile.jsx";

export default function Header(props){
     return(
         <header className="header-section header-index">
            <div className="container header-index">
                <Navbar />
                <NavMenuMobile />
                <NavBtnContainer /> 
            </div>
            <HeroSection 
            handleSearch={props.handleSearch}
            categories={props.categories}
            handleCategoryValueFilter={(category)=>props.handleCategoryValueFilter(category)}
             />
            
         </header>
     )
}