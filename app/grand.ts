import * as components from "./components/fath.js"

import videocontent, { Attribute2 } from "./components/vidss/vid.js";
import vdata from "./vdata.js";

 class appcontainer extends HTMLElement {
    container2: components.Myvid[] = [];

    constructor(){
        super();
            this.attachShadow({ mode: "open" });

            vdata.forEach((user) => {
                const videoformat = this.ownerDocument.createElement(
                    "my-vid"
                ) as components.Myvid;

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
    connectedCallback(){
        this.render();
    }

    render(){
this.shadowRoot!.innerHTML =`
<link rel="stylesheet" href="./app/components/vid/vid.css"
`
const videoformats = this.ownerDocument.createElement("section");
videoformats.className ='vforcontainer'
this.container2.forEach((videoformat) => {
    videoformats.appendChild(videoformat);
})
this.shadowRoot?.appendChild(videoformats);
    }
    }

    const video = document.createElement('video');
    video.src = 'https://archive.org/download/C.E.PriceCatWalksTowardCamera/cat_walks_toward_camera_512kb.mp4'
    video.controls = true;
    video.muted = false;
    video.height = 240;
    video.width = 320;

    const box = document.getElementById('box');


    box?.appendChild(video);



    customElements.define("app-container", appcontainer);


