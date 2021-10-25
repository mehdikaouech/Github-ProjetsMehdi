import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SessionComponent } from './components/session/session.component';
import { AjouterEtudiantComponent } from './components/ajouter-etudiant/ajouter-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeEtudiantComponent } from './components/liste-etudiant/liste-etudiant.component';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { ListeEnseignantComponent } from './components/liste-enseignant/liste-enseignant.component';
import { AjouterSessionComponent } from './components/ajouter-session/ajouter-session.component';
import { ServiceComponent } from './components/service/service.component';
import { ListeServicesComponent } from './components/liste-services/liste-services.component';
import { EmploisDuTempsComponent } from './components/emplois-du-temps/emplois-du-temps.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './components/note/note.component';
import { TraveauxComponent } from './components/traveaux/traveaux.component';
import { ListeNoteComponent } from './components/liste-note/liste-note.component';
import { EnvoyerMessageComponent } from './components/envoyer-message/envoyer-message.component';
import { AjouterAdminComponent } from './components/ajouter-admin/ajouter-admin.component';
import { ProfilComponent } from './components/profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AjouterFormationComponent } from './components/ajouter-formation/ajouter-formation.component';
import { ListeFormationComponent } from './components/liste-formation/liste-formation.component';
import { TraitementServiceComponent } from './components/traitement-service/traitement-service.component';
import { ContactComponent } from './components/contact/contact.component';
import { AjouterEmploisComponent } from './components/ajouter-emplois/ajouter-emplois.component';
import { ListeTraveauxComponent } from './components/liste-traveaux/liste-traveaux.component';
import { InterfaceEtudiantComponent } from './components/interface-etudiant/interface-etudiant.component';
// import { AjouterEventComponent } from './components/ajouter-event//ajouter-event.component';

// import { EvenementComponent } from './components/evenement/evenement.component';
import { EventComponent } from './components/event/event.component';
import { EvenementComponent } from './components/evenement/evenement.component';

import { AjouterEvenementsComponent } from './components/ajouter-evenements/ajouter-evenements.component';
import { ListeEvenementComponent } from './components/liste-evenement/liste-evenement.component';
import { EmploisComponent } from './components/emplois/emplois.component';
import { MesNotesComponent } from './components/mes-notes/mes-notes.component';
import { MesDocummentComponent } from './components/mes-documment/mes-documment.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { MesEnseignantComponent } from './components/mes-enseignant/mes-enseignant.component';
import { ToastrModule } from 'ngx-toastr';
import { ListeEmploisComponent } from './components/liste-emplois/liste-emplois.component';
import { MesServiceComponent } from './components/mes-service/mes-service.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';
// import { ListeEvenementComponent } from './components/liste-evenement/liste-evenement.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SessionComponent,
    AjouterEtudiantComponent,
    ListeEtudiantComponent,
    AjouterEnseignantComponent,
    ListeEnseignantComponent,
    AjouterSessionComponent,
    ServiceComponent,
    ListeServicesComponent,
    EmploisDuTempsComponent,
    LoginComponent,
    NoteComponent,
    TraveauxComponent,
    ListeEnseignantComponent,
    ListeNoteComponent,
    EnvoyerMessageComponent,
    AjouterAdminComponent,
    ProfilComponent,
    TraveauxComponent,
    AjouterFormationComponent,
    ListeFormationComponent,
    TraitementServiceComponent,
    ContactComponent,
    AjouterEmploisComponent,
    ListeTraveauxComponent,
    InterfaceEtudiantComponent,
    // AjouterEventComponent,
    // EvenementComponent,
    EventComponent,
    EvenementComponent,

    AjouterEvenementsComponent,
    ListeEvenementComponent,
    EmploisComponent,
    MesNotesComponent,
    MesDocummentComponent,
    EnseignantComponent,
    MesEnseignantComponent,
    ListeEmploisComponent,
    MesServiceComponent,
    ImageHomeComponent,
 
    

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
