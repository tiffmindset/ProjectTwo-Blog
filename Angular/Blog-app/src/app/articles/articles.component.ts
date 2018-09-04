import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  blogs: Blog[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    // const handler = (incomingBlogs: Blog[]) => {
    //   this.blogs = incomingBlogs;
    //   console.log("we get: ", this.blogs);
    // }

    const observable: Observable<Blog[]> = this.blogService.getBlogs();
    // observable.subscribe(handler);
    observable.subscribe(incomingBlogs => this.blogs = incomingBlogs);
    // observable.subscribe(this.handler);
    console.log("this in init", this);
  }

  handler(incomingBlogs: Blog[]) {
    this.blogs = incomingBlogs;
    console.log("we get: ", this.blogs);
    console.log("this in handler", this);
  }

}



