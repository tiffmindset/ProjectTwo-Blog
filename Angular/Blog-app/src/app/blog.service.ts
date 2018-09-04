import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Blog } from './blog'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>("http://localhost:8080/blogs");
  }

  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  postBlog(blog: Blog): Observable<HttpResponse<void>> {
    return this.http.post<HttpResponse<void>>("http://localhost:8080/blogs", blog);
  }
}
