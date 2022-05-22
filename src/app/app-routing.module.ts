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
