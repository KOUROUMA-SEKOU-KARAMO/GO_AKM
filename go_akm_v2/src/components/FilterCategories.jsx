
// import React, from "react"

export function FilterCategories(props){
      
     
    return (
           <button 
           id={props.categery}
           onClick={props.handleFilterCategories} 
        //    handleCategoryValueFilter={props.handleCategoryValueFilter}

           > {props.categery}</button>
    )
}