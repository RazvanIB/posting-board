import { PostsService } from 'src/app/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-make-a-post',
  templateUrl: './make-a-post.component.html',
  styleUrls: ['./make-a-post.component.scss']
})
export class MakeAPostComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  
  selectedFile: File = null;
  title: string = null;
  description: string = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('title', this.title);
    fd.append('description', this.description);
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.postsService.createNewPost(fd).subscribe(res => {
      console.log(res.status);
    });
  }

  ngOnInit() {
  }

}
