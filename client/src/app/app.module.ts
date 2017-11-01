import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RiskListModule } from './risk-list/risk-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RiskListComponent } from './risk-list/risk-list.component';

import { AuthGuard } from './guard/auth.guard';
import { ProfileService } from './service/profile/profile.service';
import { RiskListService } from './service/risk-list/risk-list.service';
import { AuthService } from './service/auth/auth.service';
import { ValidateService } from './service/validator/validate.service';
import { TableService } from './service/table/table.service';
import { ValidatorService } from './service/validator/validator.service';
import { SharedModule } from './share/shared.module';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminService } from './service/admin/admin.service';
import { AdminPageModule } from './admin-page/admin-page.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterService } from './service/footer/footer.service';
import { NavbarService } from './service/navbar/navbar.service';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RiskListModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminPageModule,
    ProfileModule,
    ChartsModule
  ],
  exports: [],
  providers: [
    ValidateService,
    AuthService,
    RiskListService,
    TableService,
    ProfileService,
    ValidatorService,
    AdminService,
    NavbarService,
    FooterService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
