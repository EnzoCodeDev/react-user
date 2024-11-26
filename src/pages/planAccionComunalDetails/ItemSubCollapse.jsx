import React from 'react';
import { Form, Row, Col, Input, Tabs } from "antd";

export const ItemSubCollapse = ({ product }) => {
    const [form] = Form.useForm();
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 23 }}
                initialValues={{
                    meta_producto: product['meta_producto'],
                    producto_catalogo_dnp: product['producto_catalogo_dnp'],
                    indicador_producto: product['indicador_producto'],
                    objetivo_indicador_acumulacion_producto: product['objetivo_indicador_acumulacion_producto'],
                    responsable: product['responsable'],
                }}
            >
                <Row>
                    <Col span={24}>
                        <Form.Item label="Meta producto" name="meta_producto">
                            <Input.TextArea placeholder="Meta resultado" defaultValue={product['meta_producto']} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Indicador de resultado" name="producto_catalogo_dnp">
                            <Input.TextArea placeholder="Indicador de resultado" defaultValue={product['producto_catalogo_dnp']} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Indicador de producto" name="indicador_producto">
                            <Input.TextArea placeholder="Indicador de producto" defaultValue={product['indicador_producto']} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Objectivo indicador; Tipo de acomulación" name="objetivo_indicador_acumulacion_producto">
                            <Input placeholder="Objectivo indicador; Tipo de acomulación" defaultValue={product['objetivo_indicador_acumulacion_producto']} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Responsable" name="responsable">
                            <Input placeholder="Responsable" defaultValue={product['responsable']} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
