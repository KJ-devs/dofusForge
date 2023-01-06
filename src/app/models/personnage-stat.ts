export class PersonnageStat {
    vitalite: number;
    force: number;
    agilite: number;
    intelligence: number;
    chance: number;
    sagesse: number;
    initiative: number;
    prospection: number;
    critique: number;
    invocation: number;
    portee: number;
    pa: number;
    pm: number;
    soins: number;
    dommagesCritiques: number;
    dommagesNeutres: number;
    dommagesTerre: number;
    dommagesFeu: number;
    dommagesEau: number;
    dommagesAir: number;
    resistanceNeutre: number;
    resistanceTerre: number;
    resistanceFeu: number;
    resistanceEau: number;
    resistanceAir: number;
    constructor(
        vitalite: number,
        critique: number,
        invocation: number,
        force: number,
        agilite: number,
        intelligence: number,
        chance: number,
        sagesse: number,
        initiative: number,
        prospection: number,
        portee: number,
        pa: number,
        pm: number,
        soins: number,
        dommagesCritiques: number,
        dommagesNeutres: number,
        dommagesTerre: number,
        dommagesFeu: number,
        dommagesEau: number,
        dommagesAir: number,
        resistanceNeutre: number,
        resistanceTerre: number,
        resistanceFeu: number,
        resistanceEau: number,
        resistanceAir: number,
    ) {
        this.force = force;
        this.agilite = agilite;
        this.intelligence = intelligence;
        this.critique = critique;
        this.invocation = invocation;
        this.chance = chance;
        this.sagesse = sagesse;
        this.vitalite = vitalite;
        this.initiative = initiative;
        this.prospection = prospection;
        this.portee = portee;
        this.pa = pa;
        this.pm = pm;
        this.soins = soins;
        this.dommagesCritiques = dommagesCritiques;
        this.dommagesNeutres = dommagesNeutres;
        this.dommagesTerre = dommagesTerre;
        this.dommagesFeu = dommagesFeu;
        this.dommagesEau = dommagesEau;
        this.dommagesAir = dommagesAir;
        this.resistanceNeutre = resistanceNeutre;
        this.resistanceTerre = resistanceTerre;
        this.resistanceFeu = resistanceFeu;
        this.resistanceEau = resistanceEau;
        this.resistanceAir = resistanceAir;
    }
}

