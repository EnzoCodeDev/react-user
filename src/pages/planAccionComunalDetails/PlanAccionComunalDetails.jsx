import './planAccionComunalDetails.scss';
import { useEffect, useState } from 'react'
import { AnimationPage } from '../../components/animation/AnimationPage';
import { planAccionComunalService } from '../../services/planAccionComunalService';
import { useParams } from 'react-router-dom';

export const PlanAccionComunalDetails = () => {
    const [data, setData] = useState([]);
    let { plan } = useParams();
    useEffect(() => {
        planAccionComunalService.getLineStrategiesDetails(plan).then((resp) => {
            // setData(resp['data']['data']);
            console.log(resp);
        });
    }, [plan]);

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
