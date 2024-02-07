import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BeatPageComponent } from './components/beat-page/beat-page.component';
import { MixMasterPageComponent } from './components/mix-master-page/mix-master-page.component';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';


export const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'Beat-Page', component: BeatPageComponent},
    {path: 'Mix-Master-Page', component: MixMasterPageComponent},
    {path: 'About-Me-Page', component: AboutMePageComponent},
    {path: 'Login-Page', component: LoginPageComponent},
    {path: 'Register-Page', component: RegisterPageComponent},
    {path: 'Cart-Page', component: CartPageComponent},
    {path: 'Payment-Page', component: PaymentPageComponent},
    {path: 'Confirmation-Page', component: ConfirmationPageComponent},
    {path: 'Dashboard', component: DashboradComponent}
];
