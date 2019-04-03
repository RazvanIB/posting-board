import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { HomeComponent } from './components/home/home.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { PostsService } from './services/posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    PasswordRecoveryComponent,
    HomeComponent,
    ListOfUsersComponent,
    MenuCardComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})
export class AppModule { }
