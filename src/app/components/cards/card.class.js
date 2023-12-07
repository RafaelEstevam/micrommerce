class Card {
    id = '';
    name = '';
    type = '';
    value = '';
    callback = () => {}

    constructor({type, name, value, callback, id}){
        this.name = name;
        this.type = type;
        this.value = value;
        this.id = id;
        this.callback = callback;
    }

    plus(){
        this.callback({type: 'plus', value: this.value, id: this.id});
    }

    minus(){
        this.callback({type: 'minus', value: this.value, id: this.id});
    }

    cardDeactive(){
        return this.minus(this.value);
    }

    cardActivate(){
        return this.plus(this.value);
    }
    
}

export default Card;