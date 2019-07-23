import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T112:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T112:47:51.678Z",
      "created": "2017-10-21T12:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is blog body</h1><p>Small Text</p>",
      "description": "this is description of the example blog",
      "title": "This is an example blog"

    },

    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is blog body. This is the blog body</h1><p>Small Text</p>",
      "description": "this is description of the example blog",
      "title": "This is an 3rd blog example"

    }


  ]

  public currentBlog;

  constructor() {

    console.log("service constructor is called")

  }
// method to return all the blogs
  public getAllBlogs(): any {

    return this.getAllBlogs;
  }
// method to get a perticular blog

  public getSingleBlogInformation(currentBlogId): any {
    // using a for of loop here from type script

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }

    }

    console.log(this.currentBlog);

  }// end get blog informaion function

  
}

    

 