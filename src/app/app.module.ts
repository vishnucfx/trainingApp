import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MDBBootstrapModule } from './typescripts/free';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidationService } from './validation.service';
//import { HttpClientModule } from '@angular/common/http'
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { ControlMessagesComponent} from "./control-messages.component";
import { FacebookModule } from "ngx-facebook";
//import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppComponent } from './app.component';
import { LoginComponent } from "./landingpage/login/login.component";
import { SignupComponent } from "./landingpage/signup/signup.component";
import { HeaderComponent } from "./layout/header/header.component";
import {LayoutComponent} from "./layout/layout.component";
import { HomepageComponent } from "./homepage/homepage.component";


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: '', component: HeaderComponent },
  { path: '', component: LayoutComponent },
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'homepage', component: HomepageComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    LayoutComponent,
    HomepageComponent,
    ControlMessagesComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FacebookModule.forRoot(),
  ],
  providers: [ValidationService],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
