import {Wrapper} from './style';
import nivea from "../../assets/images/clients/nivea.svg";
import mona from "../../assets/images/clients/mona.svg";
import transavia from "../../assets/images/clients/transavia.svg";
import zalando from "../../assets/images/clients/zalando.svg";
import tomtom from "../../assets/images/clients/tomtom.svg";
import unilever from "../../assets/images/clients/unilever.svg";
import adidas from "../../assets/images/clients/adidas.svg";
import patheo from "../../assets/images/clients/patheo.svg";
import abo from "../../assets/images/clients/abo.svg";
import oxio from "../../assets/images/clients/oxio.svg";
import national from "../../assets/images/clients/national.svg";
import zggo from "../../assets/images/clients/zggo.svg";
import walibi from "../../assets/images/clients/walibi.svg";
import klm from "../../assets/images/clients/klm.svg";
import triumph from "../../assets/images/clients/triumph.svg";
import microsoft from "../../assets/images/clients/microsoft.svg";

const Clients = () => {
   return <Wrapper>
        <h1>CLIENTS</h1>
        <p>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
        <div className="logo-holder">
            <img src = {nivea} alt="" />
            <img src = {mona} alt="" />
            <img src = {transavia} alt="" />
            <img src = {zalando} alt="" />
            <img src = {tomtom} alt="" />
            <img src = {unilever} alt="" />
            <img src = {adidas} alt="" />
            <img src = {patheo} alt="" />
            <img src = {abo} alt="" />
            <img src = {triumph} alt="" />
            <img src = {microsoft} alt="" />
            <img src = {oxio} alt="" />
            <img src = {national} alt="" />
            <img src = {zggo} alt="" />
            <img src = {walibi} alt="" />
            <img src = {klm} alt="" />
        </div>
    </Wrapper>
}
export default Clients;