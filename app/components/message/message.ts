export enum Attribute1{
    "profile"= "profile",
    "comment"= "comment",
    "name" = "name",
    "days" = "days",

}

class Messagecard extends HTMLElement{
    profile?: string
    comment?: string
    name?: string
    days?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute1,null> ={
            profile : null,
            comment :null,
            name: null,
            days: null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute1,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/message/message.css">
            
            <div class="message-containercard">
            <img class="imag" src="${this.profile}">
            <p1><strong>${this.comment}</strong></p1>
            <h2>${this.name}</h2>
            </div>
            
            
            `
        }
    }

}

customElements.define("message-contentcard", Messagecard)
export default Messagecard;

