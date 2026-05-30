
import styleHero from '../sass/components/hero.module.scss'
import heroImg from '../assets/icons/search.png'
import FilterImages from './FilterImages.jsx'

export default function HeroSection(props){
     return(
          <div className={styleHero.hero}>
             <div className={styleHero.heroContainer}>
                  <h1> Beautiful photos of Black   and Brown people and Nature.</h1>
                 <FilterImages
                  handleSearch={props.handleSearch}  
                  categories={props.categories}  
                  handleCategoryValueFilter={(category)=>props.handleCategoryValueFilter(category)}
                  />
             </div>
        </div>
     )
}