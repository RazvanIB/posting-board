import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'passwordRecovery', component: PasswordRecoveryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-of-users', component: ListOfUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
