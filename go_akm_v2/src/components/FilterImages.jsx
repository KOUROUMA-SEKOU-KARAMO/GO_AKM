

import styleFilterForm from '../sass/components/filterFormSearch.module.scss'
import { FilterCategories } from './FilterCategories'
export default function FilterImages(props){
  
       
     //   function handleFilterCategories(e){ 
     //      props.handleCategoryValueFilter(e.target.id)
     //   }      

       const categoriesEl=props.categories.map(
          (categery,index)=><FilterCategories 
          key={index} 
          categery={categery}  
          handleFilterCategories={(e)=>props.handleCategoryValueFilter(e.target.id)}  
          />)
     return(
            <div className={styleFilterForm.searchForm}>
                     
                    <div className={styleFilterForm.groupInput}> 
                            <input 
                            type="search" 
                            name="name-item" 
                            id="nameitem" 
                            placeholder="Search for photos... "
                              onChange={props.handleSearch}
                            />    
                            <button>
                                 {/* <img src={heroImg} alt=""/> */}
                            </button>
                    </div> 
                    <div className={styleFilterForm.filter}>  

                              {categoriesEl} 
                    </div>
                  </div>
     )
}