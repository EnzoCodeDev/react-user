import './planAccionComunal.scss';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react'
import { AnimationPage } from '../../components/animation/AnimationPage';
import { planAccionComunalService } from '../../services/planAccionComunalService';
import { useNavigate } from 'react-router-dom';
import { LoadingPages } from '../../components/loadingPages/LoadingPages';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
} from 'chart.js';

export const PlanAccionComunal = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        planAccionComunalService.getLineStrategies().then((resp) => {
            setData(resp['data']['data']);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        LineElement,
        PointElement,
        Title,
        Tooltip,
        Legend
    );

    const barData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
            {
                label: 'Ventas 2024',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <AnimationPage>
            {loading ? (
                <LoadingPages />
            ) : (
                <div className="card-container">
                    {data.map((item, index) => (
                        <div className="card" key={index} onClick={() => navigate(`/plan-accion-comunal/${item}`)}>
                            <h2 className="card-title">{item}</h2>
                        </div>
                    ))}
                </div>
            )}
            <div style={{ height: '300px', marginBottom: '20px' }}>
                <h2>Gráfico de Barras</h2>
                <Bar data={barData} options={barOptions} />
            </div>

            <div style={{ height: '300px', marginBottom: '20px' }}>
                <h2>Gráfico de Líneas</h2>
                <Line data={barData} options={barOptions} />
            </div>
        </AnimationPage>
    );
}
