export var Attribute1;
(function (Attribute1) {
    Attribute1["profile"] = "profile";
    Attribute1["comment"] = "comment";
    Attribute1["name"] = "name";
    Attribute1["days"] = "days";
})(Attribute1 || (Attribute1 = {}));
class Messagecard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            profile: null,
            comment: null,
            name: null,
            days: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
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
            <link rel="stylesheet" href="./app/components/message/message.css">
            
            <div class="message-containercard">
            <img class="imag" src="${this.profile}">
            <p1><strong>${this.comment}</strong></p1>
            <div class="name-day">
            <h2>${this.name}</h2><h1>${this.days}</h1>
            </div>
            
            </div>

            
            
            
            `;
        }
    }
}
customElements.define("message-contentcard", Messagecard);
export default Messagecard;
