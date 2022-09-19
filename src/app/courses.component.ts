import { Component } from "@angular/core";
import { CourseService } from "./courses.service";

@Component({
    selector:'courses',
    templateUrl:'./courses.component.html',
    })
export class CoursesComponent{
    title ="List of courses";
    url="https://picsum.photos/200/300?grayscale";
    courses:string[];
    constructor(service:CourseService){
        this.courses = service.getCourse();
    }

    addCourseOnClick(){
       
        let courseName = "course "+(this.courses.length+1);
        this.courses.push(courseName);
        console.log("course is getting added",courseName);
    }
    remove(course:string){
        let index = this.courses.indexOf(course);
        this.courses.splice(index);
    }

}