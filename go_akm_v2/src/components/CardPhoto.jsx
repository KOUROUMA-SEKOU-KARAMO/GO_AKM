import styleCardPhoto from '../sass/components/cardPhoto.module.scss'
import styleBtn from '../sass/components/icons.module.scss'
import dataImgs from '../data/dataImg.json';
import dataIcons from '../data/dataIcons.json'


export default function CardPhoto(props){  
       const icons=dataIcons[0]
     return (
                    <div className={styleCardPhoto.cardPhoto}>
                           <div className={styleCardPhoto.cardHeader}>
                               <a href="#" className={styleBtn.cardBtn}> 
                                 <img src={icons.heart} alt="button to like  photo"/>
                               </a>
                           </div>
                           <img src={props.image.urlLarge} alt={props.image.alt}/>
                           <div className={styleCardPhoto.cardFooter}>
                              <a href="#" className={styleCardPhoto.profil}>
                                   <div className={styleCardPhoto.cardPhotoLogo}> </div>
                                   <span>kourouma</span>
                              </a>
                              <a href="#" className={styleBtn.cardBtn} >
                                  <img src={icons.download} alt="button to download photo"/>
                              </a>
                           </div>
                     </div>

     )
}