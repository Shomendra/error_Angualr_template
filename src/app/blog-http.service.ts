import { Injectable } from '@angular/core';
//importing http clent to make the request

import {HttpClient,HttpErrorResponse} from  '@angular/common/http';


// import observable related code.
import { observable } from "rxjs";
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
public allBlogs;
public currentBlog;
public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
public authToken = 'NTY2NzIxMTIxZmVhOGZlNDU0NDgzNmQ1ZjU5ZDljMWU4ODNmZTFiNjFjYzNiY2JhM2MyNDQ5NmE2OTQyOGU4ZWM1MDEzMDUxMDZhMDM1MmRmYjk2ZjRlMzgzMDlmNzA2M2RlZDY0NWIyOWU1Yzg1ZmUyYWMwZTJmMDA0NzQxZDkxNw=='

  constructor(private _http:HttpClient) {
    console.log("blog-http service was called");
   }
    
  // Exception Handler
  private handleError(err: HttpErrorResponse){
   console.log("Handle error Http calls")
   console.log(err.message);
   return observable.throw(err.message)
   
  }

   


    // method to return sll blog
  
    public getAllBlogs(): any {
     let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken );
     console.log(myResponse);
     return myResponse;
    
   }
    

    // method to get a perticular blog
    public getSingleBlogInformation(currentBlogId): any {
    // using a for of loop here from type script
        let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken )
        return myResponse;

    }// end get blog informaion function

}

