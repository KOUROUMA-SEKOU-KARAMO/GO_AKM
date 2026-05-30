

import React,{useState} from 'react'

export function useSearch(data){
      const [search, setSearch]=useState('') 
      const filterCategoryImg=data.images.filter(item=>item.category.trim().toLowerCase().includes(search.trim().toLowerCase()))
    
      return {search, setSearch,filterCategoryImg}
}