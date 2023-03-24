/* export enum Attribute2{
    "video"="video",
    "heart"="heart",
    "likes"="likes",
    "comment"="comment",
    "share"="share",
    "profpic"="profpic",
    "profname"="profname",
    "videsc"="videsc",
    }

    class Myvid extends HTMLElement{
        video?: string
        heart?: string
        likes?: string
        comment?: string
        share?: string
        profpic?: string
        profname?: string
        videsc?: string


        static get observedAttributtes(){
        const attrs : Record<Attribute2,null> ={
            video : null,
            heart : null,
            likes : null,
            comment : null,
            share : null,
            profpic : null,
            profname : null,
            videsc : null,
        }
        return Object.keys(attrs)
        }
        constructor(){
            super()
            this.attachShadow({mode: 'open'})

        }
        attributeChangedCallback(propName: Attribute2,oldValue: undefined,newValue: string){
            switch(propName){
             default:
             this[propName] = newValue;
             this.render();
             break;
            }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div class= "vid">
    <video class="mast">${this.video}</video>
    <img class="heart" src="${this.heart}">
    <p3><strong>${this.likes}</strong></p3>
    <img class="comment" src="${this.comment}">
    <img class="share" src="${this.share}">
    <img class="profpic" src="${this.profpic}">
    <p1><strong>${this.profname}</strong></p1>
    <p2><strong>${this.videsc}</strong></p2>
            </div>
            `

    }
    }

    }

    export default Myvid;
    customElements.define("my-vid", Myvid)
 */

    export enum Attribute2{

        "heart"= "heart",
        "like"="like",
        "comment"="comment",
        "share" = "share",
        "profpic" = "profpic",
        "profname" = "profname",
        "videsc" = "videsc",
    }

    class Myvid extends HTMLElement{

        heart?: string
        like?: string
        comment?: string
        share?: string
        profpic?: string
        profname?: string
        videsc?: string

        static get observedAttributes(){
            const attrs : Record<Attribute2,null> ={

                heart : null,
                like : null,
                comment : null,
                share : null,
                profpic : null,
                profname : null,
                videsc : null,
            }
            return Object.keys(attrs)
        }
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }
    attributeChangedCallback(propName: Attribute2,oldValue: undefined,newValue: string){
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
            <div class= "vid">

    <img class="heart" src="${this.heart}">
    <p3><strong>${this.like}</strong></p3>
    <img class="comment" src="${this.comment}">
    <img class="share" src="${this.share}">
    <img class="profpic" src="${this.profpic}">
    <p1><strong>${this.profname}</strong></p1>
    <p2><strong>${this.videsc}</strong></p2>
            </div>`
        }
    }

    }


    export default Myvid;
    customElements.define("my-vid", Myvid)