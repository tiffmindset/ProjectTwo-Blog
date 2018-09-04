import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @ViewChild('title') titleDom: ElementRef;
  @ViewChild('content') contentDom: ElementRef;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  onClick() {
    const title: string = this.titleDom.nativeElement.value;
    const content: string = this.contentDom.nativeElement.value;
    const blog: Blog = {
      title: title,
      date: new Date().toDateString().toString(),
      content: content
    };

    this.blogService.postBlog(blog).subscribe(
      resp => console.log("resp", resp)
    );
  }
}
