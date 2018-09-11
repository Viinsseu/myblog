import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() lesposts: Post[];

  constructor() {
  }

  ngOnInit() {
    for (const post of this.lesposts) {
      console.log('post list ' + post.title);
    }
  }

}
