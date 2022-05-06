import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthModule } from './pages/auth/auth.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { AvancementDetailleComponent } from './pages/avancement-detaille/avancement-detaille.component';
import { IssueLogComponent } from './pages/issue-log/issue-log.component';
import { FinancesComponent } from './pages/finances/finances.component';
import { MediathequeComponent } from './pages/mediatheque/mediatheque.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { GestiondesalertesComponent } from './pages/gestiondesalertes/gestiondesalertes.component';
import { MessageriesComponent } from './pages/messageries/messageries.component';
import { ReferentielComponent } from './pages/referentiel/referentiel.component';
import { SecuriteComponent } from './pages/securite/securite.component';
import { ParametrageComponent } from './pages/parametrage/parametrage.component';
import { GestionChatingComponent } from './pages/gestion-chating/gestion-chating.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AvancementDetailleComponent,
    IssueLogComponent,
    FinancesComponent,
    MediathequeComponent,
    StatistiquesComponent,
    GestiondesalertesComponent,
    MessageriesComponent,
    ReferentielComponent,
    SecuriteComponent,
    ParametrageComponent,
    GestionChatingComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
