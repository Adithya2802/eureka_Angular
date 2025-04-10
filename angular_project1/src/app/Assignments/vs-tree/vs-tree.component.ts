import { Component } from '@angular/core';
import  data from './data.json'

@Component({
  selector: 'app-vs-tree',
  imports: [],
  standalone:true,
  templateUrl: './vs-tree.component.html',
  styleUrl: './vs-tree.component.css'
})
export class VsTreeComponent {
  folderData = data;
  name!: string;
  isFolder!: boolean;
  items!: {name:string, isFolder:boolean}[];
  hideChild!:boolean;

  constructor(){
    this.isFolder = true;
    this.hideChild = true;
  }

  folder(b:boolean){
    
    if(b){
      this.isFolder = !this.isFolder; //1st true-onclikc - false
      this.hideChild = false;
    }else{
      this.hideChild = !this.hideChild;
    }
    
    

  } 
}
