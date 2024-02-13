import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ReportComponent } from './components/report/report.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './views/main/main.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'report',
        component: ReportComponent
      }
    ]
  }

];
