import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';







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
import { MatTabsModule } from '@angular/material/tabs';



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
    GestionChatingComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    MatIconModule,
    MatSelectModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    BrowserModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
