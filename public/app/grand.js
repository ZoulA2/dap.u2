import { Attribute2 } from "./components/vid/vid.js";
import vdata from "./datas/vdata.js";
class appcontainer extends HTMLElement {
    constructor() {
        super();
        this.container2 = [];
        this.attachShadow({ mode: "open" });
        vdata.forEach((user) => {
            const videoformat = this.ownerDocument.createElement("my-vid");
            videoformat.setAttribute(Attribute2.video, user.video);
            videoformat.setAttribute(Attribute2.heart, user.heart);
            videoformat.setAttribute(Attribute2.likes, user.likes);
            videoformat.setAttribute(Attribute2.comment, user.comment);
            videoformat.setAttribute(Attribute2.share, user.share);
            videoformat.setAttribute(Attribute2.profpic, user.profpic);
            videoformat.setAttribute(Attribute2.profname, user.profname);
            videoformat.setAttribute(Attribute2.videsc, user.videsc);
            this.container2.push(videoformat);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./components/vid/vid.css">
`;
        const videoformats = this.ownerDocument.createElement("section");
        videoformats.className = 'vforcontainer';
        this.container2.forEach((videoformat) => {
            videoformats.appendChild(videoformat);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(videoformats);
    }
}
customElements.define("app-container", appcontainer);
