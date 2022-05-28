import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';
import { FinancesComponent } from './pages/finances/finances.component';
import { AvancementDetailleComponent } from './pages/avancement-detaille/avancement-detaille.component';
import { GestionChatingComponent } from './pages/gestion-chating/gestion-chating.component';
import { GestiondesalertesComponent } from './pages/gestiondesalertes/gestiondesalertes.component';
import { IssueLogComponent } from './pages/issue-log/issue-log.component';
import { MediathequeComponent } from './pages/mediatheque/mediatheque.component';
import { MessageriesComponent } from './pages/messageries/messageries.component';
import { ParametrageComponent } from './pages/parametrage/parametrage.component';
import { ReferentielComponent } from './pages/referentiel/referentiel.component';
import { SecuriteComponent } from './pages/securite/securite.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { Popup1Component } from './pages/popup1/popup1.component';
import { FicheDeSyntheseComponent } from './pages/fiche-de-synthese/fiche-de-synthese.component';
import { ProjetReformeComponent } from './pages/projet-reforme/projet-reforme.component';
import { SuiviFinancierComponent } from './pages/suivi-financier/suivi-financier.component';
import { TdbFinancierComponent } from './pages/tdb-financier/tdb-financier.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { PhotosVideosComponent } from './pages/photos-videos/photos-videos.component';
import { AlertesComponent } from './pages/alertes/alertes.component';
import { IndicateursComponent } from './pages/indicateurs/indicateurs.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { CompositionsComponent } from './pages/compositions/compositions.component';
import { AutresComponent } from './pages/autres/autres.component';
import { ActeursComponent } from './pages/acteurs/acteurs.component';
import { StructuresComponent } from './pages/structures/structures.component';
import { GestionDesUtilisateursComponent } from './pages/gestion-des-utilisateurs/gestion-des-utilisateurs.component';
import { LogsComponent } from './pages/logs/logs.component';
import { LimiteDateSaisieComponent } from './pages/limite-date-saisie/limite-date-saisie.component';
import { LimiteRemonteProblemeComponent } from './pages/limite-remonte-probleme/limite-remonte-probleme.component';

const routes: Routes = [
  {
    path: 'avancement-detaille',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AvancementDetailleComponent
  },
  {
    path: 'gestion-chating',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: GestionChatingComponent
  },
  {
    path: 'gestiondesalertes',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: GestiondesalertesComponent
  },
  {
  
    path: 'issue-log',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: IssueLogComponent
  },
  {
    path: 'mediatheque',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: MediathequeComponent
  },
  {
    path: 'messageries',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: MessageriesComponent
  },
  {
    path: 'parametrage',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ParametrageComponent
  },
  {
    path:'popup1',
    pathMatch:'full',
    canActivate:[AuthGuard],
    component:Popup1Component
  },

  {
    path: 'referentiel',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ReferentielComponent
  },
  {
    path: 'securite',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: SecuriteComponent
  },
  {
    path: 'statistiques',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: StatistiquesComponent
  },
  {
    path: 'finances',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: FinancesComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: 'synthese',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: FicheDeSyntheseComponent
  },
  {
    path: 'reforme',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ProjetReformeComponent
  },
  {
    path: 'suivi',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: SuiviFinancierComponent  
  },
  {
    path: 'tdb-financier',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: TdbFinancierComponent  
  },
  {
    path: 'rapports',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: RapportsComponent  
  },
  {
    path: 'photosvideos',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: PhotosVideosComponent  
  },
  {
    path: 'alerte',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AlertesComponent  
  },
  {
    path: 'indicateurs',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: IndicateursComponent  
  },
  {
    path: 'documents',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DocumentsComponent  
  },
  {
    path: 'budget',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: BudgetsComponent  
  },
  {
    path: 'composition',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: CompositionsComponent  
  },
  {
    path: 'autre',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AutresComponent  
  },
  {
    path: 'acteur',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ActeursComponent  
  },
  {
    path: 'structure',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: StructuresComponent  
  },
  {
    path: 'gestionUsers',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: GestionDesUtilisateursComponent  
  },
  {
    path: 'logs',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: LogsComponent  
  },
  {
    path: 'limiteRemonte',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: LimiteRemonteProblemeComponent  
  },
  {
    path: 'typography',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
  },
  {
    path: 'tables',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'ui',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
