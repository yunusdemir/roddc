import React from 'react';

import Header from './app/Header';
import {Anchor, Card, Col, Row} from "antd";
import 'antd/dist/antd.css';
import './App.css'
import Examples from "./app/Examples";
import NiceCookieConsent from "./app/NiceCookieConsent";
import BadCookieConsent from "./app/BadCookieConsent";
import Inleiding from "./app/Inleiding";
import Analyse from "./app/Analyse";
import Conclusie from "./app/Conclusie";
import Literatuur from "./app/Literatuur";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            niceCC: false,
            badCC: false
        }

        this.setNiceCC = this.setNiceCC.bind(this)
        this.setBadCC = this.setBadCC.bind(this)
    }

    setNiceCC(state: boolean) {
        this.setState({
            niceCC: state,
        })
    }

    setBadCC(state: boolean) {
        this.setState({
            badCC: state
        })
    }

    renderCC() {
        if (this.state.niceCC) {
            return <NiceCookieConsent setNiceCC={this.setNiceCC.bind(this)} />
        }

        if (this.state.badCC) {
            return <BadCookieConsent setBadCC={this.setBadCC.bind(this)} />
        }
    }

    render() {
        let setNiceCC = this.setNiceCC
        let setBadCC = this.setBadCC

        const { Link } = Anchor

        return (
            <div>
                {this.renderCC()}

                <Row gutter={[16, 16]}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Header />
                    </Col>
                </Row>
                <Row gutter={[16,16]}>
                    <Col xs={0} md={{ span: 3, offset: 15}} style={{ position: "absolute" }}>
                        <Anchor>
                            <Link href="#hoofdvraag" title="Hoofdvraag" />
                            <Link href="#voorbeelden" title="Voorbeelden" />
                            <Link href="#inleiding" title="Inleiding" />
                            <Link href="#analyse" title="Analyse" />
                            <Link href="#conclusie" title="Conclusie" />
                            <Link href="#literatuur" title="Literatuur" />
                        </Anchor>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} id={"hoofdvraag"}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Card title={"Hoofdvraag"}>
                            <h3><i>Wat is de invloed van een hogere complexiteit in een cookie-pop-up op het wel of niet accepteren van verschillende soorten cookies op een website?
                            </i></h3>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} id={"voorbeelden"}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Card title={"Voorbeelden"}>
                            <Examples setNiceCC={setNiceCC.bind(this)} setBadCC={setBadCC.bind(this)}/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} id={"inleiding"}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Card title={"Inleiding"}>
                            <Inleiding />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} id={"analyse"}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Card title={"Analyse"}>
                            <Analyse />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} id={"conclusie"}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Card title={"Conclusie"}>
                            <Conclusie />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} id={"literatuur"}>
                    <Col xs={24} md={{ span: 13, offset: 2}} xl={{ span: 12, offset: 3 }}>
                        <Card title={"Literatuur"}>
                            <Literatuur />
                        </Card>
                    </Col>
                </Row>
            </div>
            );
        }
    }

export default App;
