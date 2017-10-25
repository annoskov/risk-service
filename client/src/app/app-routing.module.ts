import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RiskListComponent } from './risk-list/risk-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-page/admin-dashboard/admin-dashboard.component';
import { AdminPageRoutingModule } from './admin-page/admin-page.routing.module';
import { RiskListRoutingModule } from './risk-list/risk-list-routing.module';
// Temp

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuard] },
    /* AdminPageComponent */
    {
        path: 'risklist',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RiskListComponent }
        ]
    },
    {
        path: 'admin',
        children: [
            {path: '', component: AdminPageComponent},
        ]
    },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AdminPageRoutingModule,
        RiskListRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
