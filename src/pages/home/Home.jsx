import './home.scss';
import React from 'react';
import { AnimationPage } from '../../components/animation/AnimationPage';
import { SwiperNewClothes } from '../../components/swiper/SwiperNewClothes';
import welcome from '../../assets/carruselImagenes/logo-person.jpeg';
import { AllCollection } from '../../components/all-collection/AllCollection';
export const Home = () => {
    return (
        <AnimationPage>
            <div className='container-home'>
                <SwiperNewClothes />
                <div className='container-presentation'>
                    <div className='presentation'>
                        <div className='container-img'>
                            <img src={welcome} alt="Cover_page" />
                        </div>
                        <div className='container-description'>
                            <h2>BIENVENIDO</h2>
                            <p>"Bienvenidos a esta sesión especial, en la que compartiremos con ustedes los avances alcanzados en las iniciativas impulsadas por el Gobierno. Hoy, reafirmamos nuestro compromiso con la transparencia, el progreso y el bienestar de nuestra nación. Este espacio es una oportunidad para dar cuenta de los resultados obtenidos y proyectar los próximos pasos hacia las metas trazadas, siempre en beneficio de nuestra sociedad. Gracias por acompañarnos en este camino hacia un futuro más prometedor para todos."</p>
                        </div>
                    </div>
                </div>
                {/* <div className='all-collection'>
                    <h1>NOTICIAS</h1>
                    <AllCollection />
                </div> */}
            </div>
        </AnimationPage>
    )
}
