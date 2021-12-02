import { Slider, InputNumber, Row, Col } from 'antd';
import { useState } from 'react';

const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(10);

    const handleChange = event => setInputValue(event);

    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={20}
                    onChange={handleChange}
                    value={inputValue}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{ margin: '0 16px' }}
                    value={inputValue}
                    onChange={handleChange}
                />
            </Col>
        </Row>
    );
}

export default IntegerStep;