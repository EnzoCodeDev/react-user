import React from 'react';
import './swiperNewClothes.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { Button } from 'antd';
import Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { dataProducts } from '../../data/dataProducts';

export const SwiperNewClothes = () => {
    let navigate = useNavigate();

    // Definir productActual fuera del JSX
    let productActual = {
        title: "",
        redirect: "producto-nuevo",
        img: [
            "src/assets/carruselImagenes/carrusel1.jpg",
            "src/assets/carruselImagenes/carrusel2.jpg",
            "src/assets/carruselImagenes/carrusel3.jpg",
            "src/assets/carruselImagenes/carrusel4.jpg",

        ]
    }
    return (
        <section id="proyect" className="seccion-proyect">
            <div className='container-swiper'>
                <Swiper
                    rewind={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {/* Mapeando el array de imágenes */}
                    {productActual['img'].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="container">
                                <div className="container-header">
                                    <img
                                        className="container-img-header"
                                        src={item}  // La ruta de la imagen dinámica se ue
                                        alt={`Imagen del producto ${index + 1}`}
                                    />
                                    <div className="container-text">
                                        <p className="container-text__2">{productActual['title']}</p>
                                        <Button
                                            onClick={() => {
                                                Scroll.animateScroll.scrollToTop();
                                                navigate(`/detail/${productActual['redirect']}`);
                                            }}
                                            className="buttom"
                                            size="large"
                                            type="primary"
                                        >
                                            Consulte aquí
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};