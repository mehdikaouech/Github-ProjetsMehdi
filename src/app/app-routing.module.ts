import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { AjouterEtudiantComponent } from './components/ajouter-etudiant/ajouter-etudiant.component';
import { AjouterFormationComponent } from './components/ajouter-formation/ajouter-formation.component';
import { AjouterSessionComponent } from './components/ajouter-session/ajouter-session.component';
import { EmploisDuTempsComponent } from './components/emplois-du-temps/emplois-du-temps.component';
import { HomeComponent } from './components/home/home.component';
import { ListeEnseignantComponent } from './components/liste-enseignant/liste-enseignant.component';
import { ListeEtudiantComponent } from './components/liste-etudiant/liste-etudiant.component';
import { ListeServicesComponent } from './components/liste-services/liste-services.component';
import { NoteComponent } from './components/note/note.component';
import { SessionComponent } from './components/session/session.component';
import { TraveauxComponent } from './components/traveaux/traveaux.component';
import { ListeFormationComponent } from './components/liste-formation/liste-formation.component';
import { ListeNoteComponent } from './components/liste-note/liste-note.component';

import { EnvoyerMessageComponent } from './components/envoyer-message/envoyer-message.component';
import { ServiceComponent } from './components/service/service.component';
import { AjouterAdminComponent } from './components/ajouter-admin/ajouter-admin.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ServiceService } from './services/service.service';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AjouterEmploisComponent } from './components/ajouter-emplois/ajouter-emplois.component';
import { ListeTraveauxComponent } from './components/liste-traveaux/liste-traveaux.component';
import { InterfaceEtudiantComponent } from './components/interface-etudiant/interface-etudiant.component';
// import { AjouterEventComponent } from './components/ajouter-event/ajouter-event.component';
// import { ListeEvenementComponent } from './components/liste-evenement/liste-evenement.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { AjouterEvenementsComponent } from './components/ajouter-evenements/ajouter-evenements.component';
import { ListeEvenementComponent } from './components/liste-evenement/liste-evenement.component';
import { MesNotesComponent } from './components/mes-notes/mes-notes.component';
import { MesDocummentComponent } from './components/mes-documment/mes-documment.component';
import { MesEnseignantComponent } from './components/mes-enseignant/mes-enseignant.component';
import { ListeEmploisComponent } from './components/liste-emplois/liste-emplois.component';
import { MesServiceComponent } from './components/mes-service/mes-service.component';


const routes: Routes = [
  //  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Session', component: SessionComponent },
  { path: 'addEtudiant', component: AjouterEtudiantComponent },
  { path: 'listeEtudiants', component: ListeEtudiantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path: 'addEnseignant', component: AjouterEnseignantComponent },
  { path: 'addSession', component: AjouterSessionComponent },
  { path: 'listeService', component: ListeServicesComponent },
  { path: 'emploisDuTemps', component: EmploisDuTempsComponent },
  { path: 'addFormation', component: AjouterFormationComponent },
  { path: 'addNote', component: NoteComponent },
  { path: 'addNote/:id', component: NoteComponent },
  { path: 'addDocument', component: TraveauxComponent },
  { path: 'listeFormation', component: ListeFormationComponent },
  { path: 'listeNote', component: ListeNoteComponent },
  { path: 'envoyerMessage', component: EnvoyerMessageComponent },
  { path: 'créerService', component: ServiceComponent },
  { path: 'Admin', component: AjouterAdminComponent },
  { path: 'profil/:id', component: ProfilComponent },
  { path: 'editFormation/:id', component: AjouterFormationComponent },
  { path: 'editSession/:id', component: AjouterSessionComponent },
  { path: 'editUser/:id', component: AjouterEnseignantComponent },
  { path: 'editEtudiant/:id', component: AjouterEtudiantComponent },
  { path: 'editAdmin/:id', component: AjouterAdminComponent },
  { path: 'editEvent/:id', component: AjouterEvenementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addEmplois', component: AjouterEmploisComponent },
  { path: 'listeTraveau', component: ListeTraveauxComponent },
  { path: 'mesTraveau/:id', component: ListeTraveauxComponent },
  { path: 'lesEnseignant', component: MesEnseignantComponent },
  { path: 'interfaceEtudiant/:id', component: InterfaceEtudiantComponent },
  { path: 'addEvenement', component: AjouterEvenementsComponent },
  { path: 'listeEvents', component: ListeEvenementComponent },
  { path: 'listeEmplois', component: ListeEmploisComponent },
  { path: 'cc',  component: EvenementComponent },
  { path: 'mesNote/:id', component: MesNotesComponent },
  { path: 'mesDocument/:id', component: MesDocummentComponent },
  { path: 'mesService/:id', component: MesServiceComponent },










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
