import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';


export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value
    };

    onChange = value => {
        const cleanValue = Number(value) ? value: this.state.inputValue;
        this.setState({
            inputValue: value,
        });
        this.props.onCountSliderChange(cleanValue)
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

class DecimalStep extends React.Component {
    state = {
        inputValue: 0,
    };

    onChange = value => {
        if (Number.isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={0.01}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={1}
                        style={{ marginLeft: 16 }}
                        step={0.01}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}
