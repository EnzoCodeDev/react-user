import './about.scss';
import React from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AnimationPage } from '../../components/animation/AnimationPage';
import about1 from '../../assets/majos/eficiencia.jpeg';
import about2 from '../../assets/majos/tablainidicadores.jpeg';

export const About = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
        <div className='about'>
            <div className='about-container'>
                <div className='conatiner-breadcrumb'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item className='cursor-pointer' onClick={() => navigate('/home')}>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item>Sobre Nosotros</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='about-intro'>
                    <div className='container-about'>
                        <div className='container-img-about'>
                            <img className="logo" src={about1} alt="Logo SMSE" />
                        </div>
                        <div className='container-text-about'>
                            <h3>Sistema de Monitoreo, Seguimiento y Evaluación (SMSE)</h3>
                            <p>Monitoreamos y evaluamos las políticas relacionadas con primera infancia, infancia y adolescencia; vejez y envejecimiento; acción comunal y juventudes del Valle del Cauca.</p>
                            <span>Presentado por Michel Pizarro - November 5, 2024</span>
                        </div>
                    </div>
                    <div className='container-about rever'>
                        <div className='container-img-about'>
                            <img className="logo" src={about2} alt="Metodologías SMSE" />
                        </div>
                        <div className='container-text-about'>
                            <h4>Agenda</h4>
                            <ul>
                                <li><strong>¿Qué vamos a hacer?</strong> Definición del Sistema de Monitoreo, Seguimiento y Evaluación (SMSE) para las cuatro políticas de interés.</li>
                                <li><strong>¿Con qué lo vamos a hacer?</strong> Proceso de definición de los indicadores.</li>
                                <li><strong>¿Cómo lo vamos a hacer?</strong> Metodologías aplicadas.</li>
                                <li>La plataforma de seguimiento.</li>
                                <li>Pasos siguientes.</li>
                            </ul>
                            <span>Definición detallada del SMSE en las siguientes secciones.</span>
                        </div>
                    </div>
                </div>
                <div className='about-intro'>
                    <div className='container-about'>
                        <div className='container-text-about'>
                            <h4>Definición</h4>
                            <p>El SMSE es un conjunto de metodologías, indicadores y publicaciones que permiten a los tomadores de decisiones asignar recursos a políticas eficaces, eficientes y óptimas. El sistema mide:</p>
                            <ul>
                                <li><strong>Eficacia:</strong> ¿Logran los objetivos propuestos y mejoran las dimensiones sociales/económicas previstas?</li>
                                <li><strong>Eficiencia:</strong> ¿Se alcanzan los objetivos con el menor costo posible?</li>
                                <li><strong>Optimidad:</strong> ¿Se logra el máximo bienestar social posible?</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container-about'>
                        <div className='container-text-about'>
                            <h4>Indicadores</h4>
                            <ul>
                                <li><strong>Indicadores de insumos y costos:</strong> Información anual desde 2025.</li>
                                <li><strong>Indicadores de producto y resultado:</strong> Definidos en los planes de acción.</li>
                                <li><strong>Indicadores de impacto:</strong> En proceso basado en diseños de políticas y experiencias internacionales.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='container-about'>
                        <div className='container-text-about'>
                            <h4>Metodologías</h4>
                            <p>El análisis se basa en:</p>
                            <ul>
                                <li>Tendencias, cumplimiento de metas y regresiones para evaluar eficacia.</li>
                                <li>Análisis de costos efectivos para medir eficiencia.</li>
                                <li>Cálculos de renuncias entre indicadores para optimidad.</li>
                            </ul>
                            <span>Incluye regresiones, evaluaciones de procesos y análisis cualitativos.</span>
                        </div>
                    </div>
                    <div className='container-about'>
                        <div className='container-text-about'>
                            <h4>La plataforma de seguimiento</h4>
                            <p>Está compuesta por hojas de cálculo y scripts automatizados para:</p>
                            <ul>
                                <li>Seguimiento de metas e indicadores.</li>
                                <li>Análisis de costos y efectos.</li>
                                <li>Cálculo de costos unitarios e impactos.</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AnimationPage>
    
    )
}