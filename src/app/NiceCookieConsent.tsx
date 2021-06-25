import React, {Component} from 'react';
import {Button, Checkbox, Col, Row} from "antd";

class NiceCookieConsent extends Component<any, any> {
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

    moreInfoText() {

    }


    render() {
        let details;

        if (this.state.showDetails) {
            details = <div style={{marginTop: "1rem"}}>
                <h4><b>Functionele cookies</b></h4>
                <p>Functionele cookies leggen informatie vast over keuzes die u heeft gemaakt en stellen ons ook in staat de website aan uw behoeften aan te passen. Wij gebruiken bijvoorbeeld ook cookies om uw taalvoorkeur op te slaan.</p>

                <h4><b>Analytische cookies</b></h4>
                <p>Analytische cookies stellen ons in staat om het aantal bezoekers van onze website te herkennen en te tellen, om te zien hoe bezoekers zich over de website bewegen wanneer ze deze gebruiken en om vast te leggen welke inhoud kijkers bekijken en waarin ze geïnteresseerd zijn. Dit helpt ons om te bepalen hoe vaak bepaalde pagina's en advertenties worden bezocht en om de meest populaire delen van onze website te bepalen. Dit helpt ons om de service die we u aanbieden te verbeteren door ons te helpen ervoor te zorgen dat onze gebruikers de informatie vinden waarnaar ze op zoek zijn, door geanonimiseerde demografische gegevens aan derden te verstrekken om advertenties beter op u af te stemmen, en door de succes van advertentiecampagnes op onze website.</p>

                <h4><b>Advertentiecookies</b></h4>
                <p>Deze cookies volgen uw surfgedrag, zodat wij advertenties kunnen tonen die voor u interessanter zijn. Deze cookies gebruiken informatie over uw browsegeschiedenis om u te groeperen met andere gebruikers met dezelfde interesses. Op basis van die informatie, en met onze toestemming, kunnen externe adverteerders cookies plaatsen om hen in staat te stellen advertenties te tonen waarvan wij denken dat deze relevant zijn voor uw interesses terwijl u zich op websites van derden bevindt. Deze cookies slaan ook uw locatie op, inclusief uw breedtegraad, lengtegraad en GeoIP-regio-ID, wat ons helpt u landspecifiek nieuws te tonen en onze Diensten efficiënter te laten werken. Als u ervoor kiest om gerichte of advertentiecookies te verwijderen, ziet u nog steeds advertenties, maar deze zijn mogelijk niet relevant voor u.</p>
            </div>
        }
        else {
            details = "";
        }

        let moreInfoText;

        if (this.state.showDetails) {
            moreInfoText = "Verberg uitleg"
        }
        else {
            moreInfoText = "Meer informatie"
        }

        let cookieChooser;

        let defaultCookies = false;


        if (this.state.showCookies) {
            cookieChooser = <div>
                <h3>Wij gebruiken cookies:</h3>
                <Checkbox disabled={true} checked={true}>
                    <p><b>Functionele cookies: </b> Deze categorie cookies is nodig om ervoor te zorgen dat de website naar behoren werkt.</p>
                </Checkbox><br />
                <Checkbox checked={defaultCookies}>
                    <p><b>Analytische cookies: </b>Deze cookies zijn nodig om onze websites zo goed mogelijk aan te laten sluiten op de wensen van onze gebruikers.</p>
                </Checkbox><br />
                <Checkbox checked={defaultCookies}>
                    <p><b>Instellingen advertenties: </b>Deze cookies zijn o.a. nodig om u relevante advertenties te tonen.</p>
                </Checkbox>
            </div>
        }
        else {
            cookieChooser = ""
        }

        let setNiceCC = this.props.setNiceCC;

        return (
            <Row gutter={[16,16]} style={{backgroundColor: "#dde5e9"}}>
                <Col id={"NiceCookieConsent"}>
                    <h3>Cookies op deze website</h3>

                    <p>Deze website en partners gebruiken cookies op example.com om het gebruik van de website te analyseren en het delen van inhoud op sociale media mogelijk te maken. Cookies kunnen door derden worden geplaatst. Door dit bericht te sluiten en de site te blijven gebruiken, stemt u in met het gebruik van cookies door example.com.</p>

                    <Button type={"link"} onClick={this.toggle}>{moreInfoText}</Button>

                    <div style={{paddingLeft: "1rem"}}>
                        {details}
                    </div>

                    {cookieChooser}

                    <Row gutter={[16,16]} style={{marginTop: "0.5rem"}}>
                        <Col>
                            <Button onClick={() => this.toggleCookies()}>Cookie-instellingen aanpassen</Button>
                        </Col>
                        <Col >
                            <Button type="primary" onClick={() => setNiceCC(false)}>Gebruik enkel noodzakelijke cookies</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default NiceCookieConsent;
