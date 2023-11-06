import '@/app/componentes/nav/nav.css'
import tiposCafe from '@/app/componentes/section-info/img/aroma-cafe.png';
import { Image } from 'react-bootstrap';
import { Video } from '@/app/componentes/section-info/video';



export function SectionInfo (){
    return(
        <>
        <div className='info-site'>
            <h2>Você conhece os tipos de café?</h2>
            <p>Talvez você já deve ter ouvido falar expressões como especial, extraforte, tradicional ou gourmet para se referir à qualidade dos cafés. No entanto, se tudo isso ainda é uma novidade para você, queremos te mostrar as principais diferenças dessas bebidas e como são classificadas de forma prática.</p>

            <Image src={tiposCafe.src} alt='piramide'></Image>
            <Video ></Video>


        </div>
        </>
        
        
  );
}
