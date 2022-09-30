import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author/author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagetileComponent } from './pagetile/pagetile.component';
import { LikeComponent } from './like/like.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { StudentRegformComponent } from './student-regform/student-regform.component';
import { StudentRegReactiveComponent } from './student-reg-reactive/student-reg-reactive.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'posts',component:PostsComponent},
  {path:'followers',component:GithubFollowersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    PagetileComponent,
    LikeComponent,
    AddressDetailsComponent,
    StudentRegformComponent,
    StudentRegReactiveComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    NavBarComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
    
    ],
  providers: [CourseService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
