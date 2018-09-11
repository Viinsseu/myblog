import { Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: Post;
  // @Input() title: string;

  constructor() { }

  ngOnInit() {
    console.log('title : ' + this.postItem.title);
  }
  onLoveIt(counter: number) {
    this.postItem.loveIts = this.postItem.loveIts + counter;
    console.log(this.postItem.title + ' : ' + this.postItem.loveIts);
  }
}
