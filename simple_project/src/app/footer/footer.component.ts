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
  courseList : any[] = [{CourseID:1,CourseName:"Angular",CourseDuration:"3months",Price:"25000"},
{CourseID:2,CourseName:"Dotnet",CourseDuration:"5months",Price:"30000"},
{CourseID:3,CourseName:"Java",CourseDuration:"6months",Price:"35000"},
{CourseID:4,CourseName:"Python",CourseDuration:"2months",Price:"20000"},
    {CourseID:5,CourseName:"React",CourseDuration:"4months",Price:"15000"}
  ];
 enableDisable(){
  this.isVisible = !this.isVisible;
 }

}
