import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreationStuffComponent } from './creation-stuff/creation-stuff.component';
import { AmuletteComponent } from './amulette/amulette.component';
import { CoiffeComponent } from './coiffe/coiffe.component';
import { CapeComponent } from './cape/cape.component';
import { CeintureComponent } from './ceinture/ceinture.component';
import { BotteComponent } from './botte/botte.component';
import { AnneauComponent } from './anneau/anneau.component';
import { ArmesComponent } from './armes/armes.component';
import { FamilierComponent } from './familier/familier.component';
import { BouclierComponent } from './bouclier/bouclier.component';
import { AllStuffComponent } from './all-stuff/all-stuff.component';

const routes: Routes = [
  { path: '', 
  component: HomeComponent 
},
{ path: 'Connexion',
  component: ConnexionComponent
},
{ path: 'Inscription',
  component: InscriptionComponent
},
{ path: 'creationStuff',
  component: CreationStuffComponent
},
{ path: 'amulette',
  component: AmuletteComponent
},
{ path: 'coiffe',
  component: CoiffeComponent
},
{ path: 'cape',
  component: CapeComponent
},
{ path: 'ceinture',
  component: CeintureComponent
},
{ path: 'botte',
  component: BotteComponent
},
{ path: 'anneau',
  component: AnneauComponent
},
{ path: 'armes',
  component: ArmesComponent
},
{ path: 'familier',
  component: FamilierComponent
},
{ path: 'bouclier',
  component: BouclierComponent
},
{ path:'allStuff',
  component: AllStuffComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
