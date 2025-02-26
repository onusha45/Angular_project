import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isVisible : boolean = true;
  isActive : boolean = true;
  courseList : any[] = [{CourseID:1,Totalstudents:60,CourseName:"Angular",CourseDuration:"3months",Price:"25000",status: true},
{CourseID:2,Totalstudents:56, CourseName:"Dotnet",CourseDuration:"5months",Price:"30000",status:false},
{CourseID:3,Totalstudents:20, CourseName:"Java",CourseDuration:"6months",Price:"35000",status:true},
{CourseID:4,Totalstudents:40, CourseName:"Python",CourseDuration:"2months",Price:"20000",status:true},
{CourseID:5,Totalstudents:85, CourseName:"React",CourseDuration:"4months",Price:"15000",status:false},
{CourseID:6,Totalstudents:65, CourseName:"Vue.js",CourseDuration:"3months",Price:"12000",status:true},
{CourseID:7,Totalstudents:98, CourseName:"Tailwind",CourseDuration:"1months",Price:"16000",status:false}
  ];
  
 enableDisable(){
  this.isVisible = !this.isVisible;
 }

}
