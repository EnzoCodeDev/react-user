import './planAccionComunal.scss';
import { useEffect, useState } from 'react'
import { AnimationPage } from '../../components/animation/AnimationPage';
import { planAccionComunalService } from '../../services/planAccionComunalService';

export const PlanAccionComunal = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        planAccionComunalService.getLineStrategies().then((resp) => {
            setData(resp['data']['data']);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <AnimationPage>
            <div className="card-container">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <h2 className="card-title">{item}</h2>
                    </div>
                ))}
            </div>
        </AnimationPage>
    );
}
