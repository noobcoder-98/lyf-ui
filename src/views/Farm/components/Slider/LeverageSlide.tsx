import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import { SliderMarks } from 'antd/lib/slider';

const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0);

  const marks: SliderMarks = {
    1.0: '1.0x',
    1.5: '1.5x',
    2: '2.0x',
    2.5: '2.5x',
    3: {
      style: {
        color: '#f50',
      },
      label: <strong>3.0x</strong>,
    },
  };

  const onChange = (value: number) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={3}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.1}
          marks={marks}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={3}
          style={{ margin: '0 16px' }}
          step={0.1}
          value={inputValue}
          onChange={onChange}
          prefix="x"
        />
      </Col>
    </Row>
  );
};

const LeverageSlider: React.FC = () => (
  <div>
    <DecimalStep />
  </div>
);

export default LeverageSlider;