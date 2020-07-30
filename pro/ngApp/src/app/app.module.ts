import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ArealistService } from './arealist.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
// import { ArealistComponent } from './arealist/arealist.component';
import { AddenumeratorComponent } from './addenumerator/addenumerator.component';
import { EnumeratorComponent } from './enumerator/enumerator.component';
import { EditenumeratorComponent } from './editenumerator/editenumerator.component';
import { SurveyComponent } from './survey/survey.component';
import { AddsdataComponent } from './addsdata/addsdata.component';
import { ViewsdataComponent } from './viewsdata/viewsdata.component';
import { EditsdataComponent } from './editsdata/editsdata.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    // ArealistComponent,
    AddenumeratorComponent,
    EnumeratorComponent,
    EditenumeratorComponent,
    SurveyComponent,
    AddsdataComponent,
    ViewsdataComponent,
    EditsdataComponent,
    ReportComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArealistService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
