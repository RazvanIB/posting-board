import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeAPostComponent } from './components/make-a-post/make-a-post.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'passwordRecovery', component: PasswordRecoveryComponent},
  {path: 'home', component: HomeComponent, canActivate: [UserGuard]},
  {path: 'list-of-users', component: ListOfUsersComponent, canActivate: [UserGuard]},
  {path: 'make-a-post', component: MakeAPostComponent, canActivate: [UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
