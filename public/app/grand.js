import { Attribute2 } from "./components/vidss/vid.js";
import vdata from "./vdata.js";
class appcontainer extends HTMLElement {
    constructor() {
        super();
        this.container2 = [];
        this.attachShadow({ mode: "open" });
        vdata.forEach((user) => {
            const videoformat = this.ownerDocument.createElement("my-vid");
            videoformat.setAttribute(Attribute2.heart, user.heart);
            videoformat.setAttribute(Attribute2.like, user.likes);
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
<link rel="stylesheet" href="./app/components/vid/vid.css">
`;
        const videoformats = this.ownerDocument.createElement("section");
        videoformats.className = 'vforcontainer';
        this.container2.forEach((videoformat) => {
            videoformats.appendChild(videoformat);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(videoformats);
    }
}
const video = document.createElement('video');
video.src = 'https://archive.org/download/C.E.PriceCatWalksTowardCamera/cat_walks_toward_camera_512kb.mp4';
video.controls = true;
video.muted = false;
video.height = 600;
video.width = 650;
const vidbox = document.getElementById('vidbox');
vidbox === null || vidbox === void 0 ? void 0 : vidbox.appendChild(video);
customElements.define("app-container", appcontainer);
