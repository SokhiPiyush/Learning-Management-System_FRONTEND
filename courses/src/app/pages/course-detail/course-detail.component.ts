import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { log } from 'node:console';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { url } from 'node:inspector';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  courseId:Number;
  course:any;
  thumbnail!:String|null;
  courseName!:String;
  description!:String;
  categories!:String;
  level!:String;
  price!:Number;
  estimatedPrice!:Number;
  courseData!:Array<any>;


  isOpen = false;

  safeUrl:SafeHtml;
  urlw:String='750';
  urlh:String='350';
  constructor(
    private route:ActivatedRoute,
    private courseService : CourseService,
    private sanitizer:DomSanitizer,
  )
  
  {
    this.courseId= Number(this.route.snapshot.paramMap.get('id'));//returns either a string or a null//therefor type casting to number
    
    
    const iframeCode = `<iframe width=${this.urlw} height=${this.urlh} src="https://www.youtube.com/embed/Rcot3MYZh_g" title="No-Code is Trash" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    this.safeUrl=this.sanitizer.bypassSecurityTrustHtml(iframeCode);
  }

  
  
  ngOnInit(): void {
  this.getCourse();
  

  }

  getCourse(): void {
    this.courseService.getCourseByIdService(this.courseId).subscribe({
      next: (data)=>{this.course = data,
        console.log("fetched data --> ",this.course);
        this.loadData();
      },
      error:(err)=>console.log("an error occured: ",err)

    })
  };

  loadData(): void {
    this.courseName=this.course.name
    this.description=this.course.description
    this.thumbnail=this.course.thumbnail.url;
    // this.thumbnail=null;
    this.categories=this.course.categories
    this.level=this.course.level
    this.price=this.course.price
    this.estimatedPrice=this.course.estimatedPrice;
    this.courseData=this.course.courseData;
    console.log("Data after being loaded --> ",this.courseName,this.description,this.thumbnail,this.categories,this.level,this.price,this.estimatedPrice)
    console.log("array data -->",this.courseData);
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }



  
}






// Object { id: 1, name: "Introduction to Java", description: "A comprehensive course on Java programming.", categories: "Programming", price: 199.99, estimatedPrice: 150, tags: "Java, Programming", level: "Beginner", demoUrl: "http://example.com/demo", ratings: 4.5, … }
// ​
// benefits: Array(4) [ {…}, {…}, {…}, … ]
// ​​
// 0: Object { id: 1, title: null, courseId: 1 }
// ​​
// 1: Object { id: 2, title: null, courseId: 1 }
// ​​
// 2: Object { id: 5, title: "Learn Java basics", courseId: 1 }
// ​​
// 3: Object { id: 6, title: "Understand OOP principles", courseId: 1 }
// ​​
// length: 4
// ​​
// <prototype>: Array []
// ​
// categories: "Programming"
// ​
// courseData: Array [ {…} ]
// ​​
// 0: Object { id: 1, videoUrl: "http://example.com/video.mp4", title: "Java Basics", … }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// courseRefId: null
// ​
// demoUrl: "http://example.com/demo"
// ​
// description: "A comprehensive course on Java programming."
// ​
// estimatedPrice: 150
// ​
// id: 1
// ​
// level: "Beginner"
// ​
// materialIncluded: Array [ {…}, {…} ]
// ​​
// 0: Object { id: 1, title: "Lecture slides", courseId: 1 }
// ​​
// 1: Object { id: 2, title: "Code examples", courseId: 1 }
// ​​
// length: 2
// ​​
// <prototype>: Array []
// ​
// name: "Introduction to Java"
// ​
// prerequisites: Array [ {…} ]
// ​​
// 0: Object { id: 1, title: "Basic computer knowledge", courseId: 1 }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// price: 199.99
// ​
// purchased: 150
// ​
// ratings: 4.5
// ​
// reviews: Array [ {…} ]
// ​​
// 0: Object { id: 1, rating: 5, comment: "Great course!", … }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// tags: "Java, Programming"
// ​
// targetAudience: Array [ {…} ]
// ​​
// 0: Object { id: 1, title: "Aspiring developers", courseId: 1 }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// thumbnail: Object { publicId: null, url: "http://example.com/thumbnail.jpg" }
// ​​
// publicId: null
// ​​
// url: "http://example.com/thumbnail.jpg"