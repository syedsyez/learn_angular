import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author/author.component';
import { FormsModule } from '@angular/forms';
import { PagetileComponent } from './pagetile/pagetile.component';
import { LikeComponent } from './like/like.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { StudentRegformComponent } from './student-regform/student-regform.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    PagetileComponent,
    LikeComponent,
    AddressDetailsComponent,
    StudentRegformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [CourseService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
