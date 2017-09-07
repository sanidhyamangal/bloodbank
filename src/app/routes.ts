import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

export const appRoutes:Routes =[
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
]