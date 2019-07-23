import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { BlogService } from '../blog.service';




@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {


  // empty object
  public currentBlog;

  // declare a dummy blog variable here
  
  constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService ) {
    console.log("blog-view constructor is called");

  }

  ngOnInit() {
    console.log("blog view ngOnInit called");
    //getting the log id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogID');
    console.log(myBlogId);
    // calling the fiunction to get the blog with the blogId out of the overall array
    this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
  
  }


  ngOnDestroy() {
    console.log("blog view destroyed")
  }

 

}
