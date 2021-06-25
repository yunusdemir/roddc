import React, {Component} from 'react';
import {Button, Col, Collapse, Divider, Row, Switch} from "antd";
import './BadCookieConsent.css';
import CollapsePanel from "antd/lib/collapse/CollapsePanel";

class BadCookieConsent extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            showDetails: false,
            showCookies: false,
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        if (this.state.showDetails) {
            this.setState({showDetails: false})
        }
        else {
            this.setState({showDetails: true})
        }
    }

    toggleCookies() {
        if (this.state.showCookies) {
            this.setState({showCookies: false})
        }
        else {
            this.setState({showCookies: true})
        }
    }

    render() {
        let visible;

        if (!this.state.showDetails) {
            visible = <div>
                <span className="close">&times;</span>
                <h2>Jouw data, jouw ervaring</h2>
                <p>Door te klikken op "<b>Accepteer alle cookies</b>" ga je akkoord dat Voorbeeld.com en haar partners je data zullen bewaren en/of er toegang tot zullen krijgen. Dit gaat via jouw apparaat via cookies en vergelijkbare technieken. Jouw persoonlijke data kan hier tussen zitten. Dit wordt gedaan zodat je persoonlijke advertenties en content krijgt, for advertentie- en contentmetingen, bezoekersinzichten en productontwikkeling. </p>
                <p><b>Jouw persoonlijke data die gebruikt kan worden</b>
                    <ul>
                        <li>Informatie over jouw apparaat en internetverbinding, waaronder je IP-adres</li>
                        <li>Browse- en zoekactiviteit tijdens het gebruik van websites en apps van Voorbeeld.com</li>
                        <li>Precieze locatie</li>
                    </ul>
                </p>

                <p>U kunt 'Instellingen beheren' selecteren voor meer informatie en om uw keuzes te beheren. U kunt uw keuzes op elk moment wijzigen door naar Uw privacyinstellingen te gaan. Lees meer over hoe we uw informatie gebruiken in ons Privacybeleid en Cookiebeleid.</p>

                <Row gutter={[16,16]} style={{marginTop: "0.5rem"}}>
                    <Col >
                        <Button type="primary" onClick={() => setBadCC(false)}>Accepteer alle cookies</Button>
                    </Col>
                    <Col>
                        <Button type={"link"} onClick={() => this.toggle()}>Instellingen beheren</Button>
                    </Col>
                </Row>
            </div>
        }
        else {
            visible = <div>
                <Row gutter={[16,16]}>
                    <Col span={18}><h2>Voorbeeld.com</h2></Col>
                    <Col span={6}><Button type="primary" onClick={() => setBadCC(false)}>Accepteer alle cookies</Button></Col>
                </Row>
                <Divider />
                <Row gutter={[16,16]}>
                    <Col span={20}><b>Gepersonaliseerde reclame op Voorbeeld.com:</b> Met uw toestemming zal Verizon Media informatie die wij over u hebben combineren en gebruiken om een op maat gemaakte advertentie-ervaring te bieden waarvan wij denken dat u die interessant en nuttig vindt. Als je geen toestemming geeft, zul je nog steeds advertenties van ons zien op Verizon Media, aangezien dit een belangrijk onderdeel van ons bedrijf is, maar ze zullen niet voor jou gepersonaliseerd zijn.
                    </Col>
                    <Col span={4}><Switch /></Col>
                </Row>
                <Row gutter={[16,16]}>
                    <Col span={20}><b>Precieze locatie:</b> Met uw toestemming zullen we uw exacte locatie gebruiken om de advertenties en inhoud die we u aanbieden op de sites van Voorbeeld.com en partners af te stemmen. Als u geen toestemming geeft, zullen we uw exacte locatie alleen gebruiken om onze diensten te leveren, inclusief app- of websitefuncties waar locatie noodzakelijk is.
                    </Col>
                    <Col span={4}><Switch /></Col>
                </Row><Row gutter={[16,16]}>
                    <Col span={20}><b>Persoonlijke advertenties op partner sites:</b> Met uw toestemming zullen wij u voorzien van relevante advertenties en inhoud op de sites van onze partners. We zullen uw apparaat ook onderscheiden van andere apparaten op basis van informatie die het automatisch verzendt, zoals IP-adres of browsertype. Als u geen toestemming geeft, zullen we u geen gepersonaliseerde advertenties en inhoud op sites van partners aanbieden.
                    </Col>
                    <Col span={4}><Switch /></Col>
                </Row><Row gutter={[16,16]}>
                    <Col span={20}><b>Gepersonaliseerde reclame op Voorbeeld.com:</b> Met uw toestemming zal Verizon Media informatie die wij over u hebben combineren en gebruiken om een op maat gemaakte advertentie-ervaring te bieden waarvan wij denken dat u die interessant en nuttig vindt. Als je geen toestemming geeft, zul je nog steeds advertenties van ons zien op Verizon Media, aangezien dit een belangrijk onderdeel van ons bedrijf is, maar ze zullen niet voor jou gepersonaliseerd zijn.
                    </Col>
                    <Col span={4}><Switch /></Col>
                </Row>
                <Row gutter={[16,16]}>
                    <Col span={20}><b>Precieze locatie:</b> Met uw toestemming zullen we uw exacte locatie gebruiken om de advertenties en inhoud die we u aanbieden op de sites van Voorbeeld.com en partners af te stemmen. Als u geen toestemming geeft, zullen we uw exacte locatie alleen gebruiken om onze diensten te leveren, inclusief app- of websitefuncties waar locatie noodzakelijk is.
                    </Col>
                    <Col span={4}><Switch /></Col>
                </Row><Row gutter={[16,16]}>
                    <Col span={20}><b>Persoonlijke advertenties op partner sites:</b> Met uw toestemming zullen wij u voorzien van relevante advertenties en inhoud op de sites van onze partners. We zullen uw apparaat ook onderscheiden van andere apparaten op basis van informatie die het automatisch verzendt, zoals IP-adres of browsertype. Als u geen toestemming geeft, zullen we u geen gepersonaliseerde advertenties en inhoud op sites van partners aanbieden.
                    </Col>
                    <Col span={4}><Switch /></Col>
                </Row>
                <br /><br />

                <h2>Onze partners</h2>
                <Divider />
                <div className="inner-box partners-info">
                    <p className="description">
                        Verizon Media works with partners to provide the personalised experiences that you enjoy across
                        our products and services. We have three types of partners that provide different options to set
                        your privacy preferences.
                    </p>
                    <ul className="content-list">
                        <li className="list-item"> '<strong>Framework Partners</strong>' allow you to control how they
                            collect and use your data by using the toggles below.
                        </li>
                        <li className="list-item"> '<strong>Non-Framework Partners</strong>' require you to control how
                            they collect and use your data directly with them. To find out how to do this with each
                            partner, visit the partner links below.
                        </li>
                        <li className="list-item"><strong>Google Partners:</strong> By providing consent to Google,
                            Google will also share your data with its additional partners (see 'Show Google Partners')
                            to set cookies and similar technologies and collect information about your device and
                            activity on our products and services to provide and measure ads. Learn more about
                            Google's <a
                                href="/redirect?to=https%3A%2F%2Fpolicies.google.com%2Ftechnologies%2Fpartner-sites&amp;brandDomain=&amp;brandId=yahoo&amp;tos=eu&amp;step=&amp;sessionId=3_cc-session_528b98f9-b604-42bf-b2a2-64189340834d&amp;userType=NON_REG"
                                target="_blank">data use</a>. You can manage Google and Google Partners' use of your
                            data through Google's <a href="#iab-tabs">View by partner</a> consent control below.

                            <div className="toggle-view google-partners">
                                <Collapse>
                                    <CollapsePanel key={1} header={"Google partners"}>
                                        <div className="toggle-pane">
                                            <ul className="google-partners-list fluid-list">
                                                <li className="list-item partner partner-name">[24]7.ai (successor to
                                                    EngageClick)
                                                </li>
                                                <li className="list-item partner partner-name">1trn</li>
                                                <li className="list-item partner partner-name">22-Visions</li>
                                                <li className="list-item partner partner-name">A1platform</li>
                                                <li className="list-item partner partner-name">Aarki</li>
                                                <li className="list-item partner partner-name">abilicom</li>
                                                <li className="list-item partner partner-name">activecore</li>
                                                <li className="list-item partner partner-name">Acuityads</li>
                                                <li className="list-item partner partner-name">Ad360</li>
                                                <li className="list-item partner partner-name">Adadyn</li>
                                                <li className="list-item partner partner-name">Adapt Retail - Advertising
                                                    Platform
                                                </li>
                                                <li className="list-item partner partner-name">Adbalancer</li>
                                                <li className="list-item partner partner-name">Adblade</li>
                                                <li className="list-item partner partner-name">ADBOX</li>
                                                <li className="list-item partner partner-name">AdButler</li>
                                                <li className="list-item partner partner-name">Adcash</li>
                                                <li className="list-item partner partner-name">AdClear</li>
                                                <li className="list-item partner partner-name">AdColony</li>
                                                <li className="list-item partner partner-name">Adcombi</li>
                                                <li className="list-item partner partner-name">Addictive Mobility</li>
                                                <li className="list-item partner partner-name">Addition Plus</li>
                                                <li className="list-item partner partner-name">Addroid</li>
                                                <li className="list-item partner partner-name">AdElement</li>
                                                <li className="list-item partner partner-name">Adello</li>
                                                <li className="list-item partner partner-name">ADEX</li>
                                                <li className="list-item partner partner-name">AdGibbon BV</li>
                                                <li className="list-item partner partner-name">Adimo</li>
                                                <li className="list-item partner partner-name">Adjust GmbH</li>
                                                <li className="list-item partner partner-name">AdLib Digital Limited</li>
                                                <li className="list-item partner partner-name">adlocal.net</li>
                                                <li className="list-item partner partner-name">ADLOOP</li>
                                                <li className="list-item partner partner-name">Adloox</li>
                                                <li className="list-item partner partner-name">ADman Media</li>
                                                <li className="list-item partner partner-name">Admedo</li>
                                                <li className="list-item partner partner-name">Admo.TV</li>
                                                <li className="list-item partner partner-name">Admost</li>
                                                <li className="list-item partner partner-name">adnanny.com</li>
                                                <li className="list-item partner partner-name">Adnetic</li>
                                                <li className="list-item partner partner-name">AdPlay</li>
                                                <li className="list-item partner partner-name">AdPlayer.Pro</li>
                                                <li className="list-item partner partner-name">AdPredictive</li>
                                                <li className="list-item partner partner-name">AdRetarget</li>
                                                <li className="list-item partner partner-name">Adriver</li>
                                                <li className="list-item partner partner-name">Adsniper</li>
                                                <li className="list-item partner partner-name">adTarget.me</li>
                                                <li className="list-item partner partner-name">Adtelligence</li>
                                                <li className="list-item partner partner-name">Adtelligent Inc.</li>
                                                <li className="list-item partner partner-name">AdTile</li>
                                                <li className="list-item partner partner-name">Adtoox</li>
                                                <li className="list-item partner partner-name">AdTrader</li>
                                                <li className="list-item partner partner-name">AdTriba</li>
                                                <li className="list-item partner partner-name">AdUnity LTD</li>
                                                <li className="list-item partner partner-name">advanced STORE GmbH</li>
                                                <li className="list-item partner partner-name">Advanse</li>
                                                <li className="list-item partner partner-name">Adventive</li>
                                                <li className="list-item partner partner-name">Adventori</li>
                                                <li className="list-item partner partner-name">Advenue</li>
                                                <li className="list-item partner partner-name">Advertserve</li>
                                                <li className="list-item partner partner-name">Advmaker</li>
                                                <li className="list-item partner partner-name">advolution.control</li>
                                                <li className="list-item partner partner-name">Advrtas</li>
                                                <li className="list-item partner partner-name">Adwatch</li>
                                                <li className="list-item partner partner-name">Adways SAS</li>
                                                <li className="list-item partner partner-name">Adzerk</li>
                                                <li className="list-item partner partner-name">Adzymic</li>
                                                <li className="list-item partner partner-name">Aedge Performance S.L.</li>
                                                <li className="list-item partner partner-name">AerServ</li>
                                                <li className="list-item partner partner-name">Affiliate Future</li>
                                                <li className="list-item partner partner-name">affilinet</li>
                                                <li className="list-item partner partner-name">Aidata</li>
                                                <li className="list-item partner partner-name">Airtory</li>
                                                <li className="list-item partner partner-name">Akamai</li>
                                                <li className="list-item partner partner-name">AKTYVUS SEKTORIUS</li>
                                                <li className="list-item partner partner-name">Alion</li>
                                                <li className="list-item partner partner-name">Alkemics</li>
                                                <li className="list-item partner partner-name">Alooma</li>
                                                <li className="list-item partner partner-name">Alphalyr SAS</li>
                                                <li className="list-item partner partner-name">Altum</li>
                                                <li className="list-item partner partner-name">Amazon</li>
                                                <li className="list-item partner partner-name">A Million Ads Limited</li>
                                                <li className="list-item partner partner-name">Amino Payments, Inc.</li>
                                                <li className="list-item partner partner-name">Amp.ai by Scaled Inference
                                                </li>
                                                <li className="list-item partner partner-name">Analights</li>
                                                <li className="list-item partner partner-name">Answer Media</li>
                                                <li className="list-item partner partner-name">APNIC</li>
                                                <li className="list-item partner partner-name">AppGrowth Inc.</li>
                                                <li className="list-item partner partner-name">AppLovin Corp.</li>
                                                <li className="list-item partner partner-name">Appreciate</li>
                                                <li className="list-item partner partner-name">AppsFlyer</li>
                                                <li className="list-item partner partner-name">appTV</li>
                                                <li className="list-item partner partner-name">Arbigo Inc.</li>
                                                <li className="list-item partner partner-name">ArkMedia</li>
                                                <li className="list-item partner partner-name">Arpeely</li>
                                                <li className="list-item partner partner-name">Arrivalist</li>
                                                <li className="list-item partner partner-name">Art of Click</li>
                                                <li className="list-item partner partner-name">Artsai</li>
                                                <li className="list-item partner partner-name">Astromotion</li>
                                                <li className="list-item partner partner-name">Atedra</li>
                                                <li className="list-item partner partner-name">AT Internet</li>
                                                <li className="list-item partner partner-name">Audience2Media</li>
                                                <li className="list-item partner partner-name">Audiencevalue</li>
                                                <li className="list-item partner partner-name">Aunica</li>
                                                <li className="list-item partner partner-name">Avocet</li>
                                                <li className="list-item partner partner-name">Awin</li>
                                                <li className="list-item partner partner-name">Azameo</li>
                                                <li className="list-item partner partner-name">B2BIQ - AdServer</li>
                                                <li className="list-item partner partner-name">BannerBuilder</li>
                                                <li className="list-item partner partner-name">BannerNow</li>
                                                <li className="list-item partner partner-name">Bannerwise</li>
                                                <li className="list-item partner partner-name">BanterX Inc</li>
                                                <li className="list-item partner partner-name">Barometric</li>
                                                <li className="list-item partner partner-name">Batch Media</li>
                                                <li className="list-item partner partner-name">Bauhof Group AS</li>
                                                <li className="list-item partner partner-name">BDSK Handels GmbH &amp; Co.
                                                    KG
                                                </li>
                                                <li className="list-item partner partner-name">Beintoo</li>
                                                <li className="list-item partner partner-name">Belboon</li>
                                                <li className="list-item partner partner-name">Betgenius</li>
                                                <li className="list-item partner partner-name">Better Banners</li>
                                                <li className="list-item partner partner-name">BEYOND X</li>
                                                <li className="list-item partner partner-name">Bidease</li>
                                                <li className="list-item partner partner-name">Bidtheatre</li>
                                                <li className="list-item partner partner-name">Bigabid</li>
                                                <li className="list-item partner partner-name">Bilendi</li>
                                                <li className="list-item partner partner-name">Bizible</li>
                                                <li className="list-item partner partner-name">Blockchain4media</li>
                                                <li className="list-item partner partner-name">Bluecore, Inc.</li>
                                                <li className="list-item partner partner-name">Blue Face co.,Ltd</li>
                                                <li className="list-item partner partner-name">Bluesummit</li>
                                                <li className="list-item partner partner-name">Blueworks</li>
                                                <li className="list-item partner partner-name">bly</li>
                                                <li className="list-item partner partner-name">Bombora</li>
                                                <li className="list-item partner partner-name">Bonzai</li>
                                                <li className="list-item partner partner-name">Booking.com</li>
                                                <li className="list-item partner partner-name">Bose</li>
                                                <li className="list-item partner partner-name">Boston Consulting Group</li>
                                                <li className="list-item partner partner-name">Brainworkz</li>
                                                <li className="list-item partner partner-name">Branch</li>
                                                <li className="list-item partner partner-name">Bridgewell</li>
                                                <li className="list-item partner partner-name">BSmartData</li>
                                                <li className="list-item partner partner-name">Butlers GmbH &amp; Co. KG
                                                </li>
                                                <li className="list-item partner partner-name">Buzzoola</li>
                                                <li className="list-item partner partner-name">Bytelogics</li>
                                                <li className="list-item partner partner-name">C3 Metrics</li>
                                                <li className="list-item partner partner-name">Cablato</li>
                                                <li className="list-item partner partner-name">Calzedonia</li>
                                                <li className="list-item partner partner-name">CapitalData</li>
                                                <li className="list-item partner partner-name">Captify</li>
                                                <li className="list-item partner partner-name">Carrefour</li>
                                                <li className="list-item partner partner-name">Cauly</li>
                                                <li className="list-item partner partner-name">Cedato</li>
                                                <li className="list-item partner partner-name">Centro</li>
                                                <li className="list-item partner partner-name">ChannelAdvisor</li>
                                                <li className="list-item partner partner-name">Channel Four Television
                                                    Corporation
                                                </li>
                                                <li className="list-item partner partner-name">Chartboost</li>
                                                <li className="list-item partner partner-name">Cheetah Mobile</li>
                                                <li className="list-item partner partner-name">Cheq</li>
                                                <li className="list-item partner partner-name">Chitika</li>
                                                <li className="list-item partner partner-name">Chocolate Platform</li>
                                                <li className="list-item partner partner-name">Clario</li>
                                                <li className="list-item partner partner-name">clean.io</li>
                                                <li className="list-item partner partner-name">Click2Buy</li>
                                                <li className="list-item partner partner-name">Clickagy</li>
                                                <li className="list-item partner partner-name">ClickForce</li>
                                                <li className="list-item partner partner-name">Clickonometrics</li>
                                                <li className="list-item partner partner-name">Clickpoint</li>
                                                <li className="list-item partner partner-name">Clickwise</li>
                                                <li className="list-item partner partner-name">Clinch</li>
                                                <li className="list-item partner partner-name">Cloudflare</li>
                                                <li className="list-item partner partner-name">Cloudinary, Inc.</li>
                                                <li className="list-item partner partner-name">Cloud Technologies</li>
                                                <li className="list-item partner partner-name">CoAdvertise</li>
                                                <li className="list-item partner partner-name">Coastal Digital Group</li>
                                                <li className="list-item partner partner-name">Coinzilla</li>
                                                <li className="list-item partner partner-name">CollegeHumor</li>
                                                <li className="list-item partner partner-name">Combell</li>
                                                <li className="list-item partner partner-name">communicationAds</li>
                                                <li className="list-item partner partner-name">comScore</li>
                                                <li className="list-item partner partner-name">congstar</li>
                                                <li className="list-item partner partner-name">Connected-Stories</li>
                                                <li className="list-item partner partner-name">Connexity</li>
                                                <li className="list-item partner partner-name">Conrad</li>
                                                <li className="list-item partner partner-name">Constant Contact</li>
                                                <li className="list-item partner partner-name">CONTXTFUL</li>
                                                <li className="list-item partner partner-name">Conversion Logic</li>
                                                <li className="list-item partner partner-name">Conversive</li>
                                                <li className="list-item partner partner-name">Cortex</li>
                                                <li className="list-item partner partner-name">coupling media</li>
                                                <li className="list-item partner partner-name">Credebat</li>
                                                <li className="list-item partner partner-name">Crimtan</li>
                                                <li className="list-item partner partner-name">CrossInstall, Inc</li>
                                                <li className="list-item partner partner-name">Crucial Interactive Inc.</li>
                                                <li className="list-item partner partner-name">Crutchfield</li>
                                                <li className="list-item partner partner-name">CUBED</li>
                                                <li className="list-item partner partner-name">Cuebiq</li>
                                                <li className="list-item partner partner-name">Cxense</li>
                                                <li className="list-item partner partner-name">CyberAgent</li>
                                                <li className="list-item partner partner-name">d3sv</li>
                                                <li className="list-item partner partner-name">DAC</li>
                                                <li className="list-item partner partner-name">DAPP GLOBAL LIMITED</li>
                                                <li className="list-item partner partner-name">Data2Decisions</li>
                                                <li className="list-item partner partner-name">Datablocks, Inc</li>
                                                <li className="list-item partner partner-name">DataExchanger</li>
                                                <li className="list-item partner partner-name">Datafy</li>
                                                <li className="list-item partner partner-name">Datalicious</li>
                                                <li className="list-item partner partner-name">Dativa</li>
                                                <li className="list-item partner partner-name">DaVinci11</li>
                                                <li className="list-item partner partner-name">DeepIntent</li>
                                                <li className="list-item partner partner-name">Delta Air Lines</li>
                                                <li className="list-item partner partner-name">DeltaX</li>
                                                <li className="list-item partner partner-name">Demandbase</li>
                                                <li className="list-item partner partner-name">Demand Side Science, Inc.
                                                </li>
                                                <li className="list-item partner partner-name">DENTSU</li>
                                                <li className="list-item partner partner-name">Dentsu Aegis Network</li>
                                                <li className="list-item partner partner-name">Dianomi</li>
                                                <li className="list-item partner partner-name">Digilant</li>
                                                <li className="list-item partner partner-name">Digital Ad Systems, Corp.
                                                </li>
                                                <li className="list-item partner partner-name">Digital Hub Hannover GmbH
                                                </li>
                                                <li className="list-item partner partner-name">Digitalsunray</li>
                                                <li className="list-item partner partner-name">Digitize</li>
                                                <li className="list-item partner partner-name">direct interactive</li>
                                                <li className="list-item partner partner-name">Discover-Tech LTD</li>
                                                <li className="list-item partner partner-name">Display.direct</li>
                                                <li className="list-item partner partner-name">DistroScale</li>
                                                <li className="list-item partner partner-name">Divvit AB</li>
                                                <li className="list-item partner partner-name">DMA Institute</li>
                                                <li className="list-item partner partner-name">Double Check</li>
                                                <li className="list-item partner partner-name">DPG Media BV</li>
                                                <li className="list-item partner partner-name">DServe</li>
                                                <li className="list-item partner partner-name">Dstillery</li>
                                                <li className="list-item partner partner-name">DTS</li>
                                                <li className="list-item partner partner-name">Dumarca Gaming Ltd</li>
                                                <li className="list-item partner partner-name">DYNADMIC</li>
                                                <li className="list-item partner partner-name">Dynamic 1001 GmbH</li>
                                                <li className="list-item partner partner-name">Dynamic Yield</li>
                                                <li className="list-item partner partner-name">Dynamo.video</li>
                                                <li className="list-item partner partner-name">EASY Marketing GmbH</li>
                                                <li className="list-item partner partner-name">EasyPlatform</li>
                                                <li className="list-item partner partner-name">eBay</li>
                                                <li className="list-item partner partner-name">ebuilders</li>
                                                <li className="list-item partner partner-name">econda GmbH</li>
                                                <li className="list-item partner partner-name">E-Contenta</li>
                                                <li className="list-item partner partner-name">Edge NPD</li>
                                                <li className="list-item partner partner-name">EFICIENS</li>
                                                <li className="list-item partner partner-name">eMarketingSolutions</li>
                                                <li className="list-item partner partner-name">EMX Digital</li>
                                                <li className="list-item partner partner-name">Enbritely</li>
                                                <li className="list-item partner partner-name">engageBDR</li>
                                                <li className="list-item partner partner-name">Ensighten</li>
                                                <li className="list-item partner partner-name">ENVISIONX LTD</li>
                                                <li className="list-item partner partner-name">Epic Combo</li>
                                                <li className="list-item partner partner-name">Erate</li>
                                                <li className="list-item partner partner-name">Essens</li>
                                                <li className="list-item partner partner-name">ETARGET</li>
                                                <li className="list-item partner partner-name">ETERNA</li>
                                                <li className="list-item partner partner-name">Etu Corporation</li>
                                                <li className="list-item partner partner-name">Evidon</li>
                                                <li className="list-item partner partner-name">Expedia, Inc.</li>
                                                <li className="list-item partner partner-name">Exposebox</li>
                                                <li className="list-item partner partner-name">Extreme Reach</li>
                                                <li className="list-item partner partner-name">Eyereturn Marketing</li>
                                                <li className="list-item partner partner-name">F@N communications</li>
                                                <li className="list-item partner partner-name">Facebook</li>
                                                <li className="list-item partner partner-name">Factual Inc.</li>
                                                <li className="list-item partner partner-name">Fastbooking SAS</li>
                                                <li className="list-item partner partner-name">FIDUCIA DLT</li>
                                                <li className="list-item partner partner-name">firststars</li>
                                                <li className="list-item partner partner-name">Fiverr</li>
                                                <li className="list-item partner partner-name">Flarie</li>
                                                <li className="list-item partner partner-name">Flexitive</li>
                                                <li className="list-item partner partner-name">fluct</li>
                                                <li className="list-item partner partner-name">FLYWHEEL</li>
                                                <li className="list-item partner partner-name">Forbes</li>
                                                <li className="list-item partner partner-name">FORTVISION</li>
                                                <li className="list-item partner partner-name">Fospha</li>
                                                <li className="list-item partner partner-name">Foursquare</li>
                                                <li className="list-item partner partner-name">Fractional Media</li>
                                                <li className="list-item partner partner-name">FranceTV Publicité</li>
                                                <li className="list-item partner partner-name">Fraudlogix</li>
                                                <li className="list-item partner partner-name">Freckle IoT</li>
                                                <li className="list-item partner partner-name">Fresh8 Gaming</li>
                                                <li className="list-item partner partner-name">Fringe81</li>
                                                <li className="list-item partner partner-name">F Sharp</li>
                                                <li className="list-item partner partner-name">FuelX</li>
                                                <li className="list-item partner partner-name">FXCM.com</li>
                                                <li className="list-item partner partner-name">Gamesight</li>
                                                <li className="list-item partner partner-name">GDM Services, Inc d/b/a Fiksu
                                                    DSP
                                                </li>
                                                <li className="list-item partner partner-name">Gemius</li>
                                                <li className="list-item partner partner-name">geolad GmbH</li>
                                                <li className="list-item partner partner-name">GetIntent</li>
                                                <li className="list-item partner partner-name">Getquanty</li>
                                                <li className="list-item partner partner-name">GfK</li>
                                                <li className="list-item partner partner-name">Giantmedia</li>
                                                <li className="list-item partner partner-name">Glassdoor, Inc.</li>
                                                <li className="list-item partner partner-name">GoBID</li>
                                                <li className="list-item partner partner-name">Go Mobile</li>
                                                <li className="list-item partner partner-name">Goodeed</li>
                                                <li className="list-item partner partner-name">Good-Loop</li>
                                                <li className="list-item partner partner-name">Goodway Group</li>
                                                <li className="list-item partner partner-name">Gridsum</li>
                                                <li className="list-item partner partner-name">GroovinAds</li>
                                                <li className="list-item partner partner-name">GroundhogTech</li>
                                                <li className="list-item partner partner-name">GroundTruth</li>
                                                <li className="list-item partner partner-name">GROUPE M6</li>
                                                <li className="list-item partner partner-name">GroupM</li>
                                                <li className="list-item partner partner-name">Gruuv Interactive</li>
                                                <li className="list-item partner partner-name">Gruvi</li>
                                                <li className="list-item partner partner-name">gskinner</li>
                                                <li className="list-item partner partner-name">Happyfication inc</li>
                                                <li className="list-item partner partner-name">Hargreaves Lansdown</li>
                                                <li className="list-item partner partner-name">Hashtag'd</li>
                                                <li className="list-item partner partner-name">HasOffer - Tune, Inc</li>
                                                <li className="list-item partner partner-name">Havas Media France - DBi</li>
                                                <li className="list-item partner partner-name">hbfsTech</li>
                                                <li className="list-item partner partner-name">HockeyCurve</li>
                                                <li className="list-item partner partner-name">HOPLA Ads</li>
                                                <li className="list-item partner partner-name">Hotels.com L. P.</li>
                                                <li className="list-item partner partner-name">Housing.com</li>
                                                <li className="list-item partner partner-name">HQ GmbH</li>
                                                <li className="list-item partner partner-name">Human Made Machine Limited
                                                </li>
                                                <li className="list-item partner partner-name">hurra.com</li>
                                                <li className="list-item partner partner-name">IBM</li>
                                                <li className="list-item partner partner-name">IGAWorks</li>
                                                <li className="list-item partner partner-name">IgnitionAI</li>
                                                <li className="list-item partner partner-name">Ignition One</li>
                                                <li className="list-item partner partner-name">Illuma Technology</li>
                                                <li className="list-item partner partner-name">Impact</li>
                                                <li className="list-item partner partner-name">INCUBIQ</li>
                                                <li className="list-item partner partner-name">Infectious Media</li>
                                                <li className="list-item partner partner-name">Ingenious Technologies</li>
                                                <li className="list-item partner partner-name">Inmind</li>
                                                <li className="list-item partner partner-name">Innovid</li>
                                                <li className="list-item partner partner-name">Instant Ads</li>
                                                <li className="list-item partner partner-name">intelliAd</li>
                                                <li className="list-item partner partner-name">Interplus</li>
                                                <li className="list-item partner partner-name">Interpolls</li>
                                                <li className="list-item partner partner-name">Interrogare GmbH</li>
                                                <li className="list-item partner partner-name">Intimate Merger</li>
                                                <li className="list-item partner partner-name">IOTEC</li>
                                                <li className="list-item partner partner-name">iProspect</li>
                                                <li className="list-item partner partner-name">IronNet Cybersecurity</li>
                                                <li className="list-item partner partner-name">ironSource Mobile</li>
                                                <li className="list-item partner partner-name">Isobar Czech Republic</li>
                                                <li className="list-item partner partner-name">IVO</li>
                                                <li className="list-item partner partner-name">Journey by CAKE</li>
                                                <li className="list-item partner partner-name">Joystick Interactive</li>
                                                <li className="list-item partner partner-name">Justpremium</li>
                                                <li className="list-item partner partner-name">JustWatch</li>
                                                <li className="list-item partner partner-name">JYSK LINNEN'N FURNITURE OÜ
                                                </li>
                                                <li className="list-item partner partner-name">Kadam</li>
                                                <li className="list-item partner partner-name">Kaden</li>
                                                <li className="list-item partner partner-name">Kantar</li>
                                                <li className="list-item partner partner-name">Kaufda</li>
                                                <li className="list-item partner partner-name">KAYAK</li>
                                                <li className="list-item partner partner-name">KEEN</li>
                                                <li className="list-item partner partner-name">Kelkoo</li>
                                                <li className="list-item partner partner-name">KeyCDN</li>
                                                <li className="list-item partner partner-name">Kimia Group</li>
                                                <li className="list-item partner partner-name">Koninklijke Philips N.V.</li>
                                                <li className="list-item partner partner-name">KPI Solutions</li>
                                                <li className="list-item partner partner-name">Kubient</li>
                                                <li className="list-item partner partner-name">Kupona</li>
                                                <li className="list-item partner partner-name">Kwanza DSP</li>
                                                <li className="list-item partner partner-name">Kwanzoo</li>
                                                <li className="list-item partner partner-name">LANDS' END</li>
                                                <li className="list-item partner partner-name">lead alliance GmbH</li>
                                                <li className="list-item partner partner-name">LeadBolt</li>
                                                <li className="list-item partner partner-name">LeadsRx</li>
                                                <li className="list-item partner partner-name">LendGo &amp; Innovative
                                                    Metrics
                                                </li>
                                                <li className="list-item partner partner-name">Ligatus</li>
                                                <li className="list-item partner partner-name">LinkedIn</li>
                                                <li className="list-item partner partner-name">LINK Institut</li>
                                                <li className="list-item partner partner-name">Linkstorm</li>
                                                <li className="list-item partner partner-name">LiquidM</li>
                                                <li className="list-item partner partner-name">ListenLoop</li>
                                                <li className="list-item partner partner-name">LiveIntent</li>
                                                <li className="list-item partner partner-name">LivelyImpact</li>
                                                <li className="list-item partner partner-name">LivePartners</li>
                                                <li className="list-item partner partner-name">LiveRamp</li>
                                                <li className="list-item partner partner-name">LKQD</li>
                                                <li className="list-item partner partner-name">LnData</li>
                                                <li className="list-item partner partner-name">Localstars</li>
                                                <li className="list-item partner partner-name">LOKA Research</li>
                                                <li className="list-item partner partner-name">Loopa</li>
                                                <li className="list-item partner partner-name">LoopMe</li>
                                                <li className="list-item partner partner-name">LotLinx®</li>
                                                <li className="list-item partner partner-name">Louder</li>
                                                <li className="list-item partner partner-name">Lucidity</li>
                                                <li className="list-item partner partner-name">M,P,NEWMEDIA,</li>
                                                <li className="list-item partner partner-name">Macromill group</li>
                                                <li className="list-item partner partner-name">MADGIC</li>
                                                <li className="list-item partner partner-name">Maelico LTD</li>
                                                <li className="list-item partner partner-name">Mail.ru</li>
                                                <li className="list-item partner partner-name">Manage.com</li>
                                                <li className="list-item partner partner-name">Marketing Science Consulting
                                                    Group, Inc.
                                                </li>
                                                <li className="list-item partner partner-name">Marketing Town</li>
                                                <li className="list-item partner partner-name">Market Points, Inc.</li>
                                                <li className="list-item partner partner-name">Markit</li>
                                                <li className="list-item partner partner-name">Mashero</li>
                                                <li className="list-item partner partner-name">Maverick</li>
                                                <li className="list-item partner partner-name">MaxCDN</li>
                                                <li className="list-item partner partner-name">Maytrics</li>
                                                <li className="list-item partner partner-name">MBR Targeting Gmbh</li>
                                                <li className="list-item partner partner-name">Mediahead</li>
                                                <li className="list-item partner partner-name">mediaintelligence</li>
                                                <li className="list-item partner partner-name">Media Lab Limited</li>
                                                <li className="list-item partner partner-name">Medialabs</li>
                                                <li className="list-item partner partner-name">MEDIAN</li>
                                                <li className="list-item partner partner-name">MediaPal</li>
                                                <li className="list-item partner partner-name">Mediarithmics</li>
                                                <li className="list-item partner partner-name">MediaWallah</li>
                                                <li className="list-item partner partner-name">Meetrics</li>
                                                <li className="list-item partner partner-name">Metalyzer</li>
                                                <li className="list-item partner partner-name">Method Media Intelligence
                                                </li>
                                                <li className="list-item partner partner-name">MHU</li>
                                                <li className="list-item partner partner-name">Miaozhen Systems</li>
                                                <li className="list-item partner partner-name">MicroAd</li>
                                                <li className="list-item partner partner-name">Microsoft</li>
                                                <li className="list-item partner partner-name">MI DSP</li>
                                                <li className="list-item partner partner-name">Milanoo</li>
                                                <li className="list-item partner partner-name">Millemedia</li>
                                                <li className="list-item partner partner-name">Mintegral</li>
                                                <li className="list-item partner partner-name">MiQ</li>
                                                <li className="list-item partner partner-name">Mixmarket Affiliate Network
                                                </li>
                                                <li className="list-item partner partner-name">Mixpo</li>
                                                <li className="list-item partner partner-name">MMG</li>
                                                <li className="list-item partner partner-name">mobilcom-debitel</li>
                                                <li className="list-item partner partner-name">Mobile Innovations</li>
                                                <li className="list-item partner partner-name">Mobitrans</li>
                                                <li className="list-item partner partner-name">Mobusi</li>
                                                <li className="list-item partner partner-name">Mobvista/Mintegral</li>
                                                <li className="list-item partner partner-name">modellbau universe GbR</li>
                                                <li className="list-item partner partner-name">Moloco Ads</li>
                                                <li className="list-item partner partner-name">Momentum</li>
                                                <li className="list-item partner partner-name">Mopedo</li>
                                                <li className="list-item partner partner-name">Movable Ink</li>
                                                <li className="list-item partner partner-name">Mozoo</li>
                                                <li className="list-item partner partner-name">MSI-ACI</li>
                                                <li className="list-item partner partner-name">MT-TECHNOLOGIES LLC</li>
                                                <li className="list-item partner partner-name">N2</li>
                                                <li className="list-item partner partner-name">Nano Interactive</li>
                                                <li className="list-item partner partner-name">NativeAds.com</li>
                                                <li className="list-item partner partner-name">Native Touch</li>
                                                <li className="list-item partner partner-name">Navegg</li>
                                                <li className="list-item partner partner-name">NETBET</li>
                                                <li className="list-item partner partner-name">Netflix</li>
                                                <li className="list-item partner partner-name">Net Info</li>
                                                <li className="list-item partner partner-name">Netquest</li>
                                                <li className="list-item partner partner-name">Netscore</li>
                                                <li className="list-item partner partner-name">NetSuccess</li>
                                                <li className="list-item partner partner-name">Next</li>
                                                <li className="list-item partner partner-name">Next Level – Affiliate
                                                    Marketing
                                                </li>
                                                <li className="list-item partner partner-name">Nexus Soft</li>
                                                <li className="list-item partner partner-name">Nielsen</li>
                                                <li className="list-item partner partner-name">NinthDecimal</li>
                                                <li className="list-item partner partner-name">nmd</li>
                                                <li className="list-item partner partner-name">Nomura</li>
                                                <li className="list-item partner partner-name">Nordisk Film A/S</li>
                                                <li className="list-item partner partner-name">Novem</li>
                                                <li className="list-item partner partner-name">Nubo LTD</li>
                                                <li className="list-item partner partner-name">NUROFY AS</li>
                                                <li className="list-item partner partner-name">Objective Partners</li>
                                                <li className="list-item partner partner-name">Octaive.com</li>
                                                <li className="list-item partner partner-name">Ogury Ltd</li>
                                                <li className="list-item partner partner-name">Oktawave</li>
                                                <li className="list-item partner partner-name">OmniVirt</li>
                                                <li className="list-item partner partner-name">On Device Research</li>
                                                <li className="list-item partner partner-name">OneDigitalAd Technologies
                                                </li>
                                                <li className="list-item partner partner-name">Onseo</li>
                                                <li className="list-item partner partner-name">OpenLedger ApS</li>
                                                <li className="list-item partner partner-name">OpenSlate</li>
                                                <li className="list-item partner partner-name">OpinionAds</li>
                                                <li className="list-item partner partner-name">Optimise</li>
                                                <li className="list-item partner partner-name">Optimize LCC D.B.A Genius
                                                    Monkey
                                                </li>
                                                <li className="list-item partner partner-name">Optomaton</li>
                                                <li className="list-item partner partner-name">Oracle Data Cloud</li>
                                                <li className="list-item partner partner-name">Orange Advertising</li>
                                                <li className="list-item partner partner-name">OSCARO COM</li>
                                                <li className="list-item partner partner-name">OTM Worldwide LLC</li>
                                                <li className="list-item partner partner-name">OTTO</li>
                                                <li className="list-item partner partner-name">OVC GmbH</li>
                                                <li className="list-item partner partner-name">Overstock</li>
                                                <li className="list-item partner partner-name">Oxford BioChronometrics</li>
                                                <li className="list-item partner partner-name">Pandora</li>
                                                <li className="list-item partner partner-name">Pangle DSP</li>
                                                <li className="list-item partner partner-name">Parrable</li>
                                                <li className="list-item partner partner-name">Parsec Media Inc</li>
                                                <li className="list-item partner partner-name">Parship</li>
                                                <li className="list-item partner partner-name">Partnerize</li>
                                                <li className="list-item partner partner-name">Pathmatics</li>
                                                <li className="list-item partner partner-name">Perfect Audience</li>
                                                <li className="list-item partner partner-name">Persona.ly</li>
                                                <li className="list-item partner partner-name">Phoenix Marketing
                                                    International
                                                </li>
                                                <li className="list-item partner partner-name">Pi-rate / pubintl</li>
                                                <li className="list-item partner partner-name">Pixalate</li>
                                                <li className="list-item partner partner-name">Placecast</li>
                                                <li className="list-item partner partner-name">Placed</li>
                                                <li className="list-item partner partner-name">Plan.Net Performance</li>
                                                <li className="list-item partner partner-name">Platform360</li>
                                                <li className="list-item partner partner-name">PlatformOne</li>
                                                <li className="list-item partner partner-name">Playdigo</li>
                                                <li className="list-item partner partner-name">Polldaddy</li>
                                                <li className="list-item partner partner-name">PopRule</li>
                                                <li className="list-item partner partner-name">POWSTER</li>
                                                <li className="list-item partner partner-name">ProData Media</li>
                                                <li className="list-item partner partner-name">Prodege, LLC.</li>
                                                <li className="list-item partner partner-name">Programmatic Ecosystem LLC
                                                </li>
                                                <li className="list-item partner partner-name">ProgSol.cz</li>
                                                <li className="list-item partner partner-name">Pubnative</li>
                                                <li className="list-item partner partner-name">Pulpo (An Entravision
                                                    Company)
                                                </li>
                                                <li className="list-item partner partner-name">PulsePoint</li>
                                                <li className="list-item partner partner-name">Pure Cobalt</li>
                                                <li className="list-item partner partner-name">Qantas</li>
                                                <li className="list-item partner partner-name">Qriously Inc</li>
                                                <li className="list-item partner partner-name">Qualia</li>
                                                <li className="list-item partner partner-name">Qualtrics</li>
                                                <li className="list-item partner partner-name">Quantasy</li>
                                                <li className="list-item partner partner-name">QuarticON</li>
                                                <li className="list-item partner partner-name">Quiet Media</li>
                                                <li className="list-item partner partner-name">Quintesse</li>
                                                <li className="list-item partner partner-name">Quple</li>
                                                <li className="list-item partner partner-name">R.O.EYE Limited</li>
                                                <li className="list-item partner partner-name">Rackspace</li>
                                                <li className="list-item partner partner-name">Rambla</li>
                                                <li className="list-item partner partner-name">Raptor Services</li>
                                                <li className="list-item partner partner-name">Reactive</li>
                                                <li className="list-item partner partner-name">Realytics</li>
                                                <li className="list-item partner partner-name">Reamp</li>
                                                <li className="list-item partner partner-name">Reas Travel Group</li>
                                                <li className="list-item partner partner-name">Rebel AI LLC</li>
                                                <li className="list-item partner partner-name">Recruit JP</li>
                                                <li className="list-item partner partner-name">Red Cubes Ltd</li>
                                                <li className="list-item partner partner-name">REES46</li>
                                                <li className="list-item partner partner-name">Reset Digital</li>
                                                <li className="list-item partner partner-name">Resolution Media</li>
                                                <li className="list-item partner partner-name">Resonate</li>
                                                <li className="list-item partner partner-name">Retail Rocket LLC</li>
                                                <li className="list-item partner partner-name">Retargetly</li>
                                                <li className="list-item partner partner-name">RETENCY</li>
                                                <li className="list-item partner partner-name">Retube Interactive Video</li>
                                                <li className="list-item partner partner-name">RevenueMantra</li>
                                                <li className="list-item partner partner-name">Rezonence</li>
                                                <li className="list-item partner partner-name">RichMedia Studio</li>
                                                <li className="list-item partner partner-name">RIESENIA.com</li>
                                                <li className="list-item partner partner-name">Rockerbox</li>
                                                <li className="list-item partner partner-name">ROMIR</li>
                                                <li className="list-item partner partner-name">Rontar</li>
                                                <li className="list-item partner partner-name">Roy Morgan Research</li>
                                                <li className="list-item partner partner-name">Rutarget</li>
                                                <li className="list-item partner partner-name">Salesforce DMP</li>
                                                <li className="list-item partner partner-name">Sape</li>
                                                <li className="list-item partner partner-name">SAS One Planet Only</li>
                                                <li className="list-item partner partner-name">SCIBIDS TECHNOLOGY</li>
                                                <li className="list-item partner partner-name">Scigineer</li>
                                                <li className="list-item partner partner-name">Scoota</li>
                                                <li className="list-item partner partner-name">Sellpoints</li>
                                                <li className="list-item partner partner-name">SFR</li>
                                                <li className="list-item partner partner-name">Shutterstock, Inc.</li>
                                                <li className="list-item partner partner-name">Signal</li>
                                                <li className="list-item partner partner-name">Silver Egg Technology</li>
                                                <li className="list-item partner partner-name">SilverMob</li>
                                                <li className="list-item partner partner-name">Simplaex GmBH</li>
                                                <li className="list-item partner partner-name">Singular Labs Inc.</li>
                                                <li className="list-item partner partner-name">Sixide</li>
                                                <li className="list-item partner partner-name">Sketchfab, Inc.</li>
                                                <li className="list-item partner partner-name">Smart.bid ltd</li>
                                                <li className="list-item partner partner-name">Smartketer LLC</li>
                                                <li className="list-item partner partner-name">SmartyAds</li>
                                                <li className="list-item partner partner-name">SMN Corporation</li>
                                                <li className="list-item partner partner-name">Snap Inc.</li>
                                                <li className="list-item partner partner-name">Snitcher.com</li>
                                                <li className="list-item partner partner-name">Sociomantic</li>
                                                <li className="list-item partner partner-name">Softcrylic</li>
                                                <li className="list-item partner partner-name">Softcube</li>
                                                <li className="list-item partner partner-name">Sojern</li>
                                                <li className="list-item partner partner-name">Somo Audience</li>
                                                <li className="list-item partner partner-name">Somplo</li>
                                                <li className="list-item partner partner-name">SourceKnowledge</li>
                                                <li className="list-item partner partner-name">SPACE ADSERVER</li>
                                                <li className="list-item partner partner-name">Sparks47</li>
                                                <li className="list-item partner partner-name">Spartoo</li>
                                                <li className="list-item partner partner-name">Spicy Mobile</li>
                                                <li className="list-item partner partner-name">SpiderAF</li>
                                                <li className="list-item partner partner-name">Spirable</li>
                                                <li className="list-item partner partner-name">Sportradar</li>
                                                <li className="list-item partner partner-name">Spotad</li>
                                                <li className="list-item partner partner-name">Spring Venture Group</li>
                                                <li className="list-item partner partner-name">Squeezely</li>
                                                <li className="list-item partner partner-name">StartApp</li>
                                                <li className="list-item partner partner-name">STEP A/S</li>
                                                <li className="list-item partner partner-name">Stratio Big Data</li>
                                                <li className="list-item partner partner-name">Stream</li>
                                                <li className="list-item partner partner-name">Stream Eye</li>
                                                <li className="list-item partner partner-name">StreamRail</li>
                                                <li className="list-item partner partner-name">SUITE 66</li>
                                                <li className="list-item partner partner-name">Supership</li>
                                                <li className="list-item partner partner-name">Suzumuchi</li>
                                                <li className="list-item partner partner-name">Swaven</li>
                                                <li className="list-item partner partner-name">Systemina</li>
                                                <li className="list-item partner partner-name">t2ó</li>
                                                <li className="list-item partner partner-name">Tagtoo</li>
                                                <li className="list-item partner partner-name">Tail</li>
                                                <li className="list-item partner partner-name">Taiwan Mobile Co Ltd</li>
                                                <li className="list-item partner partner-name">Takoomi</li>
                                                <li className="list-item partner partner-name">tapCLIQ</li>
                                                <li className="list-item partner partner-name">Tapjoy</li>
                                                <li className="list-item partner partner-name">Tapklik</li>
                                                <li className="list-item partner partner-name">TAPTAP</li>
                                                <li className="list-item partner partner-name">Taptica</li>
                                                <li className="list-item partner partner-name">Target RTB</li>
                                                <li className="list-item partner partner-name">Tchibo GmbH</li>
                                                <li className="list-item partner partner-name">Tealium</li>
                                                <li className="list-item partner partner-name">TEEMO</li>
                                                <li className="list-item partner partner-name">Telaria</li>
                                                <li className="list-item partner partner-name">TenMax</li>
                                                <li className="list-item partner partner-name">TF1 - FR</li>
                                                <li className="list-item partner partner-name">TheINDUSTRY AG</li>
                                                <li className="list-item partner partner-name">The Very Group</li>
                                                <li className="list-item partner partner-name">Thomann GmbH</li>
                                                <li className="list-item partner partner-name">ThoughtLeadr</li>
                                                <li className="list-item partner partner-name">Throtle</li>
                                                <li className="list-item partner partner-name">TimeOne</li>
                                                <li className="list-item partner partner-name">Tinkoff.ru</li>
                                                <li className="list-item partner partner-name">TogetherData</li>
                                                <li className="list-item partner partner-name">TotalJobs Group Ltd</li>
                                                <li className="list-item partner partner-name">Touch Ads</li>
                                                <li className="list-item partner partner-name">TraceAd</li>
                                                <li className="list-item partner partner-name">Tradedoubler AB</li>
                                                <li className="list-item partner partner-name">TrafficGuard</li>
                                                <li className="list-item partner partner-name">Trafmag</li>
                                                <li className="list-item partner partner-name">Tramplin Media</li>
                                                <li className="list-item partner partner-name">Transmit.Live</li>
                                                <li className="list-item partner partner-name">TravelClick</li>
                                                <li className="list-item partner partner-name">Travel Data Collective</li>
                                                <li className="list-item partner partner-name">Treepodia</li>
                                                <li className="list-item partner partner-name">Trend Research</li>
                                                <li className="list-item partner partner-name">Tribes Research</li>
                                                <li className="list-item partner partner-name">TripAdvisor</li>
                                                <li className="list-item partner partner-name">TROVIT</li>
                                                <li className="list-item partner partner-name">TruEffect</li>
                                                <li className="list-item partner partner-name">True Wave Technologies
                                                    Limited
                                                </li>
                                                <li className="list-item partner partner-name">TrustArc</li>
                                                <li className="list-item partner partner-name">Tuky Data</li>
                                                <li className="list-item partner partner-name">Turbo</li>
                                                <li className="list-item partner partner-name">TVadSync</li>
                                                <li className="list-item partner partner-name">TVSquared</li>
                                                <li className="list-item partner partner-name">Twinpine</li>
                                                <li className="list-item partner partner-name">twyn</li>
                                                <li className="list-item partner partner-name">UberMedia</li>
                                                <li className="list-item partner partner-name">Uber Technologies Inc.</li>
                                                <li className="list-item partner partner-name">Ubex DSP</li>
                                                <li className="list-item partner partner-name">Ubimo</li>
                                                <li className="list-item partner partner-name">Umeng Plus Beijing Technology
                                                    Limited Company
                                                </li>
                                                <li className="list-item partner partner-name">Underdog Media</li>
                                                <li className="list-item partner partner-name">Undertone</li>
                                                <li className="list-item partner partner-name">UNICORN</li>
                                                <li className="list-item partner partner-name">Unitymedia</li>
                                                <li className="list-item partner partner-name">Universo Online</li>
                                                <li className="list-item partner partner-name">Ve Interactive</li>
                                                <li className="list-item partner partner-name">VeleT</li>
                                                <li className="list-item partner partner-name">Vertoz</li>
                                                <li className="list-item partner partner-name">Vertriebswerk</li>
                                                <li className="list-item partner partner-name">Verve</li>
                                                <li className="list-item partner partner-name">VF Visual Fantastix Tanner
                                                </li>
                                                <li className="list-item partner partner-name">Viant</li>
                                                <li className="list-item partner partner-name">Vidazoo</li>
                                                <li className="list-item partner partner-name">Videology</li>
                                                <li className="list-item partner partner-name">Video Research Interactive
                                                </li>
                                                <li className="list-item partner partner-name">Vidstart LTD</li>
                                                <li className="list-item partner partner-name">Viewbix</li>
                                                <li className="list-item partner partner-name">Viewst</li>
                                                <li className="list-item partner partner-name">Vimeo</li>
                                                <li className="list-item partner partner-name">Virtual Minds</li>
                                                <li className="list-item partner partner-name">Visarity</li>
                                                <li className="list-item partner partner-name">Vital Media</li>
                                                <li className="list-item partner partner-name">VIVALU</li>
                                                <li className="list-item partner partner-name">Vizury</li>
                                                <li className="list-item partner partner-name">Vodafone GmbH</li>
                                                <li className="list-item partner partner-name">Vpon</li>
                                                <li className="list-item partner partner-name">Vserv</li>
                                                <li className="list-item partner partner-name">Vuble</li>
                                                <li className="list-item partner partner-name">Vungle</li>
                                                <li className="list-item partner partner-name">Wagawin</li>
                                                <li className="list-item partner partner-name">Walmart</li>
                                                <li className="list-item partner partner-name">Wavenet</li>
                                                <li className="list-item partner partner-name">Waystack</li>
                                                <li className="list-item partner partner-name">We Adapt</li>
                                                <li className="list-item partner partner-name">Webgains</li>
                                                <li className="list-item partner partner-name">Whichit UK Ltd</li>
                                                <li className="list-item partner partner-name">White Ops</li>
                                                <li className="list-item partner partner-name">Wider Planet</li>
                                                <li className="list-item partner partner-name">Wish</li>
                                                <li className="list-item partner partner-name">Wonderbly</li>
                                                <li className="list-item partner partner-name">WooTag</li>
                                                <li className="list-item partner partner-name">xCheck</li>
                                                <li className="list-item partner partner-name">X-Social</li>
                                                <li className="list-item partner partner-name">Yabbi</li>
                                                <li className="list-item partner partner-name">Yandex</li>
                                                <li className="list-item partner partner-name">YDigital Media</li>
                                                <li className="list-item partner partner-name">YOOSE</li>
                                                <li className="list-item partner partner-name">YOptima</li>
                                                <li className="list-item partner partner-name">YouAppi</li>
                                                <li className="list-item partner partner-name">YouGov</li>
                                                <li className="list-item partner partner-name">YouSee</li>
                                                <li className="list-item partner partner-name">YRGLM Inc.</li>
                                                <li className="list-item partner partner-name">Yusp</li>
                                                <li className="list-item partner partner-name">Zanox</li>
                                                <li className="list-item partner partner-name">Zentrick</li>
                                                <li className="list-item partner partner-name">Zeta Global</li>
                                                <li className="list-item partner partner-name">Zirca</li>
                                                <li className="list-item partner partner-name">ZMS</li>
                                                <li className="list-item partner partner-name">Zoekhelden</li>
                                                <li className="list-item partner partner-name">Zucks</li>
                                                <li className="list-item partner partner-name">Zuuvi</li>
                                                <li className="list-item partner partner-name">Zynga</li>
                                                <li className="list-item partner partner-name">ZypMedia</li>
                                                <li className="list-item partner partner-name">北京泛为信息科技有限公司</li>
                                                <li className="list-item partner partner-name">顶新</li>
                                                <li className="list-item partner partner-name">世纪富轩科技发展（北京）有限公司</li>
                                            </ul>
                                        </div>
                                    </CollapsePanel>
                                </Collapse>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        }

        let setBadCC = this.props.setBadCC;

        return (
            <div id={"popover"}>
                <div id={"myModal"} className={"modal"}>

                    <div className="modal-content">
                        {visible}
                    </div>

                </div>
            </div>
        );
    }
}

export default BadCookieConsent;
