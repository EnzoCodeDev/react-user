import { Form, Row, Col, Input, Tabs } from "antd";
import { ItemSubCollapse } from "./ItemSubCollapse";

export const ItemCollase = ({ item }) => {
    const [form] = Form.useForm();
    console.log(item);
    console.log(item['meta_resultado_data'])
    return (
        <div className="sdf">
            <Form
                form={form}
                layout="vertical"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 23 }}
                initialValues={{
                    meta_resultado: item['meta_resultado'],
                    indicador_de_resultado: item['indicador_de_resultado'],
                    indicador_de_impacto: item['indicador_de_impacto'],
                }}
            >
                <Row>
                    <Col span={24}>
                        <Form.Item label="Meta resultado" name="meta_resultado">
                            <Input.TextArea placeholder="Meta resultado" defaultValue={item['meta_resultado']} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Indicador de resultado" name="indicador_de_resultado">
                            <Input.TextArea placeholder="Indicador de resultado" defaultValue={item['indicador_de_resultado']} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Indicador de impacto" name="indicador_de_impacto">
                            <Input.TextArea placeholder="Indicador de resultado" defaultValue={item['indicador_de_impacto']} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Objectivo del indicador acomulado" name="objetivo_indicador_acumulacion">
                            <Input placeholder="Objectivo del indicador acomulado" defaultValue={item['objetivo_indicador_acumulacion']} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Coordinador MR" name="coordinador_mr">
                            <Input placeholder="Coordinador MR" defaultValue={item['coordinador_mr']} />
                        </Form.Item>
                    </Col>
                    <Tabs
                        style={{
                            width: '100%'
                        }}
                        defaultActiveKey="1"
                        type="card"
                        size={'large'}
                        items={item['meta_resultado_data'].map((product, i) => {
                            const id = String(i + 1);
                            return {
                                label: `Producto #${id}`,
                                key: id,
                                children: <ItemSubCollapse product={product} />,
                            };
                        })}
                    />
                </Row>
            </Form>
        </div>
    )
}