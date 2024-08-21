import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { apiurls } from '../../api.url';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}


  createCourseService(course:any): Observable<any[]> {
    return this.http.post<any>(`${apiurls.courseServiceApi}`,course).pipe(
      catchError(this.handleError)
    );
  }

  getCourseByIdService(courseId:Number): Observable<any[]> {
    return this.http.get<any>(`${apiurls.courseServiceApi}/${courseId}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error : any): Observable<any>{
    console.error("An error occured: ",error);
    return throwError(()=> new Error('Something went wrong; please try again later.'));
  };


}
