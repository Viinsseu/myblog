export class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title: string) {
    this.loveIts = 0;
    this.title = title;
    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet...';
    this.created_at = new Date();
  }

}
