import { Component, OnInit } from '@angular/core';
import{ Genre } from '../Genre';
import{SongsService}from '../SongsService';
import{Songs}from '../Song';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-addsongs',
  templateUrl: './addsongs.component.html',
  styleUrls: ['./addsongs.component.scss']
})
export class AddsongsComponent implements OnInit {
  objsongs:Songs;
  Songtitle:string;
  SongDurations: string;
  genre:Genre[];
  selectedGenere:string;
  constructor(public songservice:SongsService,private snackBar:MatSnackBar) {
    this.objsongs=new Songs(null,"","","");
    this.SongDurations='';
    this.Songtitle='';
    this.genre=[];
    this.genre.push(new Genre("Slow",false));
    this.genre.push(new Genre("Romance",false));
    this.genre.push(new Genre("Remixed",false));    
    this.selectedGenere='';
   }
   get Valid(){
     return !(this.SongDurations!='' && this.Songtitle!='');
   }

  ngOnInit(): void {
  }
  OnSave(){
    this.genre.filter((s)=>{
      if(s.checked){
        if(this.selectedGenere=='')
      this.selectedGenere=s.name;
      else
      this.selectedGenere=this.selectedGenere+' | '+s.name;
      }
    })
    //debugger;
    this.objsongs.title=this.Songtitle;
    this.objsongs.duration=this.SongDurations;
    this.objsongs.genre=this.selectedGenere;
    if(this.objsongs!=null){
      this.songservice.addSong(this.objsongs)
      .subscribe((obj:Songs)=>{
        this.SongDurations='';
        this.Songtitle='';
        this.genre.filter(g=>g.checked=false);
        this.snackBar.open("Song added in play list successfully!","",{
          duration:3000
        });
      });
      
      }
  
}

}


