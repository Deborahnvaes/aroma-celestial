import "../../componentes/section-info/Style/stylesInfo.css";
import tiposCafe from '@/app/componentes/section-info/img/aroma-cafe.png';
import { Image } from 'react-bootstrap';
import React from 'react';

export function SectionInfo (){
    return(
        <div className='info-site'>
            <h2 className="titulo-section">Você conhece os <strong>tipos de café?</strong></h2>
            <p className="paragrafo-section">Talvez você já deve ter ouvido falar expressões como especial, <br /> extraforte, tradicional ou gourmet para se referir à qualidade dos <br /> cafés. No entanto, se tudo isso ainda é uma novidade para você, <br /> queremos te mostrar as principais diferenças dessas bebidas e como <br />são classificadas de forma prática.</p>
           <div className="image-page">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/AfJNnliddu0?si=TUoG_VXZCYb-wCWD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <Image src={tiposCafe.src} alt='piramide'></Image>

            </div>



    </div>
  );
}
