import { Injectable } from '@angular/core';
//importing http clent to make the request

import {HttpClient,HttpErrorResponse} from  '@angular/common/http';


// import observable related code.
import { Observable } from "rxjs";
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
public allBlogs;
public currentBlog;
public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
public authToken = '/all?authToken=NTZmZDVkOWU4MWEyNmY3MjgwOGQ1MTZiYjIxYmFkMDhlMGM4MzUzZWJmNGY1MjlkMWZhMTI3MmNhNmE5ZTkzZTYzODc2MDg0YWNmMGEzYWJjOTYwYjdjZDcyNmViYjk5N2UyOTk4MjhlYmE1Y2NkNDc1YjY2OTQ4M2VmNjM2NjljYw=='

  constructor(private _http:HttpClient) {
    console.log("blog-http service was called");
   }

  private handleError(err : HttpErrorResponse){
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message)
  
  }

   public getAllBlogs(): any{
     let myResponse = this._http.get(this.baseUrl+'/all?authToken=NTZmZDVkOWU4MWEyNmY3MjgwOGQ1MTZiYjIxYmFkMDhlMGM4MzUzZWJmNGY1MjlkMWZhMTI3MmNhNmE5ZTkzZTYzODc2MDg0YWNmMGEzYWJjOTYwYjdjZDcyNmViYjk5N2UyOTk4MjhlYmE1Y2NkNDc1YjY2OTQ4M2VmNjM2NjljYw==' + this.authToken );
     console.log(myResponse);
     return myResponse;
    
   }
    

  
// method to get a perticular blog

  public getSingleBlogInformation(currentBlogId): any {
    // using a for of loop here from type script
  let myResponse = this._http.get(this.baseUrl + '/view'+'/'+ currentBlogId + '?authToken=' + this.authToken )
  return myResponse;

  }// end get blog informaion function

}

