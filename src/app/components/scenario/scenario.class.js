class Scenario {

    scenarioAction = () => {};

    constructor({armor, attack, id, life, scenarioAction, type, name}){
        this.armor = armor;
        this.attack = attack;
        this.id = id;
        this.life = life;
        this.name = name;
        this.scenarioAction = scenarioAction;
        this.type = type;
    }

    triggerScene = () => {
        scenarionAction();
    }
}