import styleGalleryGrip from '../sass/components/gallerySection.module.scss'
import dataImg from '../data/dataImg.json'
import img1 from '../assets/imgs/photos/DSCF5235.JPG'
import CardPhoto from './CardPhoto'


export default function GridSection(props){ 

    const images=props.galleryImages[0].images  
    const  cardPhotoEl=props.filterCategoryImg.map(image=> <CardPhoto image={image} /> )
      
     return(
          <main className={styleGalleryGrip.mainSection} >
          <div className={styleGalleryGrip.mainContainer}>
           
                <h2> Get photos from AKM  </h2>
                <div className={styleGalleryGrip.galleryGrip}>
                                        
                      {cardPhotoEl}
 
                </div>
          </div>
     </main>
     )
}