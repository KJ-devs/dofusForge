import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreationStuffComponent } from './creation-stuff/creation-stuff.component';
import { AmuletteComponent } from './amulette/amulette.component';
import { HttpClientModule } from '@angular/common/http';
import { CoiffeComponent } from './coiffe/coiffe.component';
import { CapeComponent } from './cape/cape.component';
import { AnneauComponent } from './anneau/anneau.component';
import { BotteComponent } from './botte/botte.component';
import { ArmesComponent } from './armes/armes.component';
import { CeintureComponent } from './ceinture/ceinture.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FamilierComponent } from './familier/familier.component';
import { BouclierComponent } from './bouclier/bouclier.component';
import { AllStuffComponent } from './all-stuff/all-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ConnexionComponent,
    InscriptionComponent,
    CreationStuffComponent,
    AmuletteComponent,
    CoiffeComponent,
    CapeComponent,
    AnneauComponent,
    BotteComponent,
    ArmesComponent,
    CeintureComponent,
    FamilierComponent,
    BouclierComponent,
    AllStuffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
