import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddenumeratorComponent } from './addenumerator/addenumerator.component';
import { EnumeratorComponent } from './enumerator/enumerator.component'
import { from } from 'rxjs';
import { EditenumeratorComponent } from './editenumerator/editenumerator.component';
import { SurveyComponent } from './survey/survey.component';
import { AddsdataComponent } from './addsdata/addsdata.component';
import { ViewsdataComponent } from './viewsdata/viewsdata.component';
import { EditsdataComponent } from './editsdata/editsdata.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addenumerator',component:AddenumeratorComponent,canActivate:[AuthGuard]},
  {path:'enumerator',component:EnumeratorComponent,canActivate:[AuthGuard]},
  {path:'editenumerator',component:EditenumeratorComponent,canActivate:[AuthGuard]},
  {path:'survey',component:SurveyComponent,
  children:[
    {path:'adddata',component:AddsdataComponent},
    {path:'viewdata',component:ViewsdataComponent}
    ]},
    {path:'editsdata',component:EditsdataComponent},
    {path:'report',component:ReportComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
