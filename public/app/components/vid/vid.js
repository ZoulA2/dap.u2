export var Attribute2;
(function (Attribute2) {
    Attribute2["video"] = "video";
    Attribute2["heart"] = "heart";
    Attribute2["likes"] = "likes";
    Attribute2["comment"] = "comment";
    Attribute2["share"] = "share";
    Attribute2["profpic"] = "profpic";
    Attribute2["profname"] = "profname";
    Attribute2["videsc"] = "videsc";
})(Attribute2 || (Attribute2 = {}));
class Myvid extends HTMLElement {
    static get observedAttributtes() {
        const attrs = {
            video: null,
            heart: null,
            likes: null,
            comment: null,
            share: null,
            profpic: null,
            profname: null,
            videsc: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propname, oldValue, newValue) {
        switch (propname) {
            default:
                this[propname] = newValue,
                    this.render();
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div class= "vid">
    <video class="mast">${this.video}</video>
    <img class="heart" src="${this.heart}">
    <p3><strong>${this.likes}</strong></p1>
    <img class="comment" src="${this.comment}">
    <img class="share" src="${this.share}">
    <img class="profpic" src="${this.profpic}">
    <p1><strong>${this.profname}</strong></p1>
    <p2><strong>${this.videsc}</strong></p2>
            </div>
            `;
        }
    }
}
export default Myvid;
customElements.define("my-vid", Myvid);
