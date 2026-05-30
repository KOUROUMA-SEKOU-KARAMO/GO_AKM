import './sass/bases/styleReset.scss'
import React,{useEffect, useState } from 'react'
import Header from "./components/Header.jsx";
import GridSection from "./components/Grid_section.jsx";
import Footer from "./components/Footer.jsx";
import dataImages from './data/dataImg.json'
import { useSearch } from './hooks/useSearch.js';

export default function App(){
     const [galleryImages,setGalleryImage]=useState(dataImages)   
     const [categories, setCategories]=useState(dataImages[0].categories)
     const {search, setSearch, filterCategoryImg}=useSearch(dataImages[0]) 
     const [categeryValueFilter,setCategoryValueFilter]=useState('')
     
      
        // function handleCategoryValueFilter(categery){
        //     // setCategoryValueFilter(categery)
        // }

    return( 
        <>  
           <Header 
              categories={categories}
              handleSearch={(e)=>setSearch(e.target.value)}
              handleCategoryValueFilter={setSearch} 
            />

           <GridSection 
           galleryImages={galleryImages} 
           filterCategoryImg={filterCategoryImg}  /> 
           <Footer /> 
        </>
    )
}