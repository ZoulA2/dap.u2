import * as components from "./components/fath.js"

import videocontent, { Attribute2 } from "./components/vidss/vid.js";
import vdata from "./vdata.js";

import messageData from "./messageData.js";
import Messagecont, { Attribute1 } from "./components/message/message.js";


 class appcontainer extends HTMLElement {
    container2: components.Myvid[] = [];
    container1: components.Message[] = [];

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

            messageData.forEach((user) => {
                const messageformat = this.ownerDocument.createElement(
                    "message-contentcard"
                ) as components.Message;

                messageformat.setAttribute(Attribute1.profile, user.profile);
                messageformat.setAttribute(Attribute1.comment, user.comment);
                messageformat.setAttribute(Attribute1.name, user.name);
                messageformat.setAttribute(Attribute1.days, user.days);

                
this.container1.push(messageformat);
            });

    }
    connectedCallback(){
        this.render();
    }

    render(){
this.shadowRoot!.innerHTML =`
<link rel="stylesheet" href="./app/components/vid/vid.css">
<<<<<<< Updated upstream
=======
<link rel="stylesheet" href="./app/components/message/message.css">
>>>>>>> Stashed changes
`
const videoformats = this.ownerDocument.createElement("section");
videoformats.className ='vforcontainer'
this.container2.forEach((videoformat) => {
    videoformats.appendChild(videoformat);
})
this.shadowRoot?.appendChild(videoformats);

const messageformats = this.ownerDocument.createElement("section");
messageformats.className ='Mcontent'
this.container1.forEach((messageformat) => {
    messageformats.appendChild(messageformat);
})
this.shadowRoot?.appendChild(messageformats);
    }
    }

    const video = document.createElement('video');
    video.src = 'https://archive.org/download/C.E.PriceCatWalksTowardCamera/cat_walks_toward_camera_512kb.mp4'
    video.controls = true;
    video.muted = false;
    video.height = 200;
    video.width = 300;

    const vidbox = document.getElementById('vidbox');


    vidbox?.appendChild(video);



    customElements.define("app-container", appcontainer);


