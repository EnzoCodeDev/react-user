import './planAccionComunalDetails.scss';
import { useEffect, useState } from 'react'
import { AnimationPage } from '../../components/animation/AnimationPage';
import { planAccionComunalService } from '../../services/planAccionComunalService';
import { useParams } from 'react-router-dom';
import { LoadingPages } from '../../components/loadingPages/LoadingPages';
import { Collapse, Tabs } from 'antd';
import { ItemCollase } from './ItemCollase';

export const PlanAccionComunalDetails = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [metasResult, setMetasResult] = useState([]);
    let { plan } = useParams();
    useEffect(() => {
        setLoading(true);
        planAccionComunalService.getLineStrategiesDetails(plan).then((resp) => {
            setLoading(false);
            setData(resp['data']['data']);
            dataProccess(resp['data']['data']);
        }).catch(() => {
            setLoading(false);
        });
    }, [plan]);

    const dataProccess = (data) => {
        let metasAuxiliar = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            element['meta_resultado_data'] = [];
            let findMeta = metasAuxiliar.findIndex((item) => {
                return item['meta_resultado'] === element['meta_resultado'];
            });
            // console.log(findMeta);
            if (findMeta !== -1) {
                let exist = metasAuxiliar[findMeta]['meta_resultado_data'].find((item) => {
                    return item['meta_producto'] === element['meta_producto'];
                });
                if (!exist) {
                    metasAuxiliar[findMeta]['meta_resultado_data'].push(element);
                }
            } else {
                element['meta_resultado_data'].push(element);
                metasAuxiliar.push(element);
            }
        }
        setMetasResult(metasAuxiliar);
    }

    return (
        <AnimationPage>
            {loading ? (
                <LoadingPages />
            ) : (
                <div className="container-details">
                    <div className='container-taps'>
                        <Tabs
                            tabPosition='left'
                            defaultActiveKey="1"
                            type="card"
                            size={'large'}
                            items={metasResult.map((item, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `Línea estratégica #${id}`,
                                    key: id,
                                    children: <ItemCollase item={item} />,
                                };
                            })}
                        />
                    </div>
                </div>
            )}
        </AnimationPage>
    );
}
