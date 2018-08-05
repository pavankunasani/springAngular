import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: LoginComponentComponent },
  { path: 'register', component: RegisterComponentComponent },
  { path: 'showdata', component: ShowDataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
