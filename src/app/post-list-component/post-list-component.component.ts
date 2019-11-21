import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;

  @Input() loveIts: number;
  @Input() cmpt: number;
  @Input() initialValue: number;
  
  @Input() createdAt: Date;

  onLike(){
    this.initialValue= this.getNumber ()
    this.cmpt= this.initialValue + 1
    
    this.loveIts = this.cmpt;
    return this.loveIts
  }

  onDislike(){
    this.initialValue= this.getNumber ()
    this.cmpt= this.initialValue - 1
    this.loveIts = this.cmpt;
    return this.loveIts
  }

  constructor() { 
    this.loveIts=0;
    this.cmpt = 0;
  }

  getNumber () {
    return this.loveIts;
  }

  ngOnInit() {
  }

}
