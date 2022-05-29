import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import { SliderMarks } from 'antd/lib/slider';

const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0);

  const marks: SliderMarks = {
    1: '1',
    30: '30',
    90: '90',
    180: '180',
    365: {
      style: {
        color: '#f50',
      },
      label: <strong>365</strong>,
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
          max={365}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={1}
          marks={marks}
          handleStyle={{color: '#adedc8'}}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={365}
          style={{ margin: '0 16px' }}
          step={1}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const DaySlider: React.FC = () => (
  <div>
    <DecimalStep />
  </div>
);

export default DaySlider;