import React, {Component} from 'react';
import {Button, Col, Row} from "antd";

class Examples extends Component<any, any> {
    constructor() {
        // @ts-ignore
        super();

        this.state = {
            showNiceCC: false,
            showBadCC: false
        }
    }

    render() {
        let setNiceCC = this.props.setNiceCC;
        let setBadCC = this.props.setBadCC;

        return (
            <main>
                <Row gutter={[16,16]}>
                    <Col flex={2}>
                        <Button type={"primary"} shape="round" onClick={() => setNiceCC(true)}>Prettig consent</Button>
                    </Col>
                    <Col flex={2}>
                        <Button type={"primary"} shape="round" onClick={() => setBadCC(true)}>Vervelend consent</Button>
                    </Col>
                </Row>
            </main>
        );
    }
}

export default Examples;
