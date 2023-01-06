import { Component, OnInit } from '@angular/core';
import { PersonnageStat } from '../models/personnage-stat';
import { Stuff } from '../models/stuff.model';
import { StuffService } from '../services/database/Stuff/stuff.service';

@Component({
  selector: 'app-creation-stuff',
  templateUrl: './creation-stuff.component.html',
  styleUrls: ['./creation-stuff.component.scss']
})
export class CreationStuffComponent implements OnInit {
  private seuilVita = 995
  private seuilCarac = 398
  private seuilSasa = 331
  public amulette = JSON.parse(localStorage.getItem('Amulette') || '{}');
  public anneau = JSON.parse(localStorage.getItem('Anneau') || '{}');
  public ceinture = JSON.parse(localStorage.getItem('Ceinture') || '{}');
  public coiffe = JSON.parse(localStorage.getItem('Coiffe') || '{}');
  public cape = JSON.parse(localStorage.getItem('Cape') || '{}');
  public bottes = JSON.parse(localStorage.getItem('Botte') || '{}');
  public bouclier = JSON.parse(localStorage.getItem('Bouclier') || '{}');
  public familier = JSON.parse(localStorage.getItem('Familier') || '{}');
  public arme = JSON.parse(localStorage.getItem('Arme') || '{}');

  public personnage = new PersonnageStat(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  public personnageStatsVitalite = 1050;
  public personnageStatsForce = 0;
  public personnageStatsAgilite = 0;
  public personnageStatsIntelligence = 0;
  public personnageStatsChance = 0;
  public personnageStatsSagesse = 0;
  public stuff!: Stuff;

  constructor(private StuffService: StuffService) { }

  ngOnInit(): void {
    this.getAllStatsOfAllItems();
  }
  verifierSeuilVita(nbVita: number) {
    if (nbVita > this.seuilVita) {
      this.personnage.vitalite = this.seuilVita;
      this.personnageStatsVitalite += Number(nbVita);
    } else {
      this.personnage.vitalite = nbVita;
      this.personnageStatsVitalite += Number(nbVita);
    }
  }
  verifierSeuilSasa(valeur: number) {
    if (valeur > this.seuilSasa) {
      this.personnage.sagesse = this.seuilSasa;
      this.personnageStatsSagesse += Number(valeur);
    }
  }
  verifierSeuilCarac(valeur: number, carac: string) {

    if (carac === 'force') {
      if (valeur > this.seuilCarac) {
        this.personnage.force = this.seuilCarac;
        this.personnageStatsForce += Number(valeur);
      } else {
        this.personnage.force = valeur;
        this.personnageStatsForce += Number(valeur);
      }
    } else if (carac === 'agilite') {
      if (valeur > this.seuilCarac) {
        this.personnage.agilite = this.seuilCarac;
        this.personnageStatsAgilite += Number(valeur);
      } else {
        this.personnage.agilite = valeur;
        this.personnageStatsAgilite += Number(valeur);
      }
    } else if (carac === 'intelligence') {
      if (valeur > this.seuilCarac) {
        this.personnage.intelligence = this.seuilCarac;
        this.personnageStatsIntelligence += Number(valeur);
      } else {
        this.personnage.intelligence = valeur;
        this.personnageStatsIntelligence += Number(valeur);
      }
    } else if (carac === 'chance') {
      if (valeur > this.seuilCarac) {
        this.personnage.chance = this.seuilCarac;
        this.personnageStatsChance += Number(valeur);
      } else {
        this.personnage.chance = valeur;
        this.personnageStatsChance += Number(valeur);
      }
    } else {
      console.log('Caractéristique spécifiée non valide');
    }
  }
  getAllStatsOfAllItems() {
    const items = [this.amulette, this.anneau, this.ceinture, this.coiffe, this.cape, this.bottes, this.bouclier, this.familier, this.arme];
    for (const item of items) {
      for (const key of item.statistics) {
        if (key['Vitalité']) {
          if (key['Vitalité'].max != null) {
            this.personnageStatsVitalite += key['Vitalité'].max;
          } else {
            this.personnageStatsVitalite += key['Vitalité'].min;
          }
        }
        if (key['Force']) {
          if (key['Force'].max != null) {
            this.personnageStatsForce += key['Force'].max;
          } else {
            this.personnageStatsForce += key['Force'].min;
          }
        }
        if (key['Intelligence']) {
          if (key['Intelligence'].max != null) {
            this.personnageStatsIntelligence += key['Intelligence'].max;
          } else {
            this.personnageStatsIntelligence += key['Intelligence'].min;
          }
        }
        if (key['Chance']) {
          if (key['Chance'].max != null) {
            this.personnageStatsChance += key['Chance'].max;
          } else {
            this.personnageStatsChance += key['Chance'].min;
          }
        }
        if (key['Agilité']) {
          if (key['Agilité'].max != null) {
            this.personnageStatsAgilite += key['Agilité'].max;
          } else {
            this.personnageStatsAgilite += key['Agilité'].min;
          }
        }
        if (key['Sagesse']) {
          if (key['Sagesse'].max != null) {
            this.personnageStatsSagesse += key['Sagesse'].max;
          } else {
            this.personnageStatsSagesse += key['Sagesse'].min;
          }
        }
        if (key['Prospection']) {
          if (key['Prospection'].max != null) {
            this.personnage.prospection += key['Prospection'].max;
          } else {
            this.personnage.prospection += key['Prospection'].min;
          }
        }
        if (key['PA']) {
          if (key['PA'].max != null) {
            this.personnage.pa += key['PA'].max;
          } else {
            this.personnage.pa += key['PA'].min + 7;
          }
        }
        if (key['PM']) {
          if (key['PM'].max != null) {
            this.personnage.pm += key['PM'].max;
          } else {
            this.personnage.pm += key['PM'].min + 3;
          }
        }
        if (key['PO']) {
          if (key['PO'].max != null) {
            this.personnage.portee += key['PO'].max;
          } else {
            this.personnage.portee += key['PO'].min;
          }
        }
        if (key['Initiative']) {
          if (key['Initiative'].max != null) {
            this.personnage.initiative += key['Initiative'].max;
          } else {
            this.personnage.initiative += key['Initiative'].min;
          }
        }
        if (key['% Critique']) {
          if (key['% Critique'].max != null) {
            this.personnage.critique += key['% Critique'].max;
          } else {
            this.personnage.critique += key['% Critique'].min;
          }
        }
        if (key['Soin']) {
          if (key['Soin'].max != null) {
            this.personnage.soins += key['Soin'].max;
          } else {
            this.personnage.soins += key['Soin'].min;
          }
        }
        if (key['Invocations']) {
          if (key['Invocations'].max != null) {
            this.personnage.invocation += key['Invocations'].max;
          } else {
            this.personnage.invocation += key['Invocations'].min;
          }
        }
        if (key['Dommages Neutres']) {
          if (key['Dommages Neutres'].max != null) {
            this.personnage.dommagesNeutres += key['Dommages Neutres'].max;
          } else {
            this.personnage.dommagesNeutres += key['Dommages Neutres'].min;
          }
        }
        if (key['Dommages Terre']) {
          if (key['Dommages Terre'].max != null) {
            this.personnage.dommagesTerre += key['Dommages Terre'].max;
          } else {
            this.personnage.dommagesTerre += key['Dommages Terre'].min;
          }
        }
        if (key['Dommages Feu']) {
          if (key['Dommages Feu'].max != null) {
            this.personnage.dommagesFeu += key['Dommages Feu'].max;
          } else {
            this.personnage.dommagesFeu += key['Dommages Feu'].min;
          }
        }
        if (key['Dommages Air']) {
          if (key['Dommages Air'].max != null) {
            this.personnage.dommagesAir += key['Dommages Air'].max;
          } else {
            this.personnage.dommagesAir += key['Dommages Air'].min;
          }
        }
        if (key['Dommages Eau']) {
          if (key['Dommages Eau'].max != null) {
            this.personnage.dommagesEau += key['Dommages Eau'].max;
          } else {
            this.personnage.dommagesEau += key['Dommages Eau'].min;
          }
        }
        if (key['% Résistance Neutre']) {
          if (key['% Résistance Neutre'].max != null) {
            this.personnage.resistanceNeutre += key['% Résistance Neutre'].max;
          } else {
            this.personnage.resistanceNeutre += key['% Résistance Neutre'].min;
          }
        }
        if (key['% Résistance Terre']) {
          if (key['% Résistance Terre'].max != null) {
            this.personnage.resistanceTerre += key['% Résistance Terre'].max;
          } else {
            this.personnage.resistanceTerre += key['% Résistance Terre'].min;
          }
        }
        if (key['% Résistance Feu']) {
          if (key['% Résistance Feu'].max != null) {
            this.personnage.resistanceFeu += key['% Résistance Feu'].max;
          } else {
            this.personnage.resistanceFeu += key['% Résistance Feu'].min;
          }
        }
        if (key['% Résistance Air']) {
          if (key['% Résistance Air'].max != null) {
            this.personnage.resistanceAir += key['% Résistance Air'].max;
          } else {
            this.personnage.resistanceAir += key['% Résistance Air'].min;
          }
        }
        if (key['% Résistance Eau']) {
          if (key['% Résistance Eau'].max != null) {
            this.personnage.resistanceEau += key['% Résistance Eau'].max;
          } else {
            this.personnage.resistanceEau += key['% Résistance Eau'].min;
          }
        }
      }
    }
  }
  addStuff() {

    const stuff: Stuff = {
      
      amulette: this.amulette.name,
      anneau: this.anneau.name,
      ceinture: this.ceinture.name,
      coiffe: this.coiffe.name,
      cape: this.cape.name,
      bottes: this.bottes.name,
      bouclier: this.bouclier.name,
      arme: this.arme.name,
      familier: this.familier.name,
  }
  this.StuffService.createNewStuff(stuff);  
}
}
