import { CoursesComponent } from "./courses.component";

export class CourseService{
    courses:string[]=['course1','course2','course3'];
    public getCourse(){
     return this.courses;
    }

}