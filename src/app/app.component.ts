import { Component, VERSION, OnInit } from '@angular/core';

// import {Observable} from "rxjs/Observable";

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import * as _ from 'lodash';

import { of } from 'rxjs';

interface Course {
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;
  name = 'Angular ' + VERSION.major;
  Employee?: any;
  // apiURL ='https://lovetoshopmall.com/apiservice/itAsset/GetByPageNo/A1002.php';

  // apiURL =
  //   'https://lovetoshopmall.com/apiservice/itAsset/GetByPageNo/A1002.php'; 

  apiURL ='https://go999-nutv99.vercel.app/api/getbyid/A001/2' ;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getEmployees().subscribe((data: any) => {
    //   this.Employee = data.DataResult;
    //   console.log(this.Employee);
    // });
    this.postData()
  }

  // testPost() {
  //   const apiURL2 ='https://go999-nutv99.vercel.app/api/login' ;
  //   const payload = {
  //     "UserName" : "Admin",
  //     "Password" : "mellow"
  //   } 

  //   const auth_token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc3NTg1MjgsInVzZXJJZCI6NzM3fQ.ckfxl3gBWg2LBkWWadzQomlw5GRE4r0mh1b1vvxaXnA"
  //   const headers = new Headers({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${auth_token}`,
  //   });

    
  //    this.http.post(apiURL2,payload,headers).subscribe((data:any) => {
  //       console.log(data)
  //    }

  //    ) 


  // }

  postData() { 
    //const apiURL2 ='https://go999-nutv99.vercel.app/api/login' ;
    //const apiURL2 ='https://go999-nutv99.vercel.app/api/admin';
    const apiURL2 ='https://go999-nutv99.vercel.app/api/testcorspost';

    const payload = {
          "UserName" : "Admin",
          "Password" : "mellow"
    } 

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc4MjYxNjEsInVzZXJJZCI6NzM3fQ.FpR5xSqQIn15B6gRfRWPHrttcLyZ4oXiYvls_ods8lI'

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8',
      'Authorization': 'Bearer ' + token
    });

        this.http.post<any>(apiURL2, payload,{headers}).subscribe((result) => {
               console.log("result----",result)
        }
     
      // this.http.get<any>(apiURL2).subscribe((result) => {
      //   console.log(result)
      // }
    
     ) 

     
  }




  getEmployees(): Observable<Course> {
    return this.http
      .get<Course>(this.apiURL + '')
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    alert('ll');
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
