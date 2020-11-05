import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{SongsService} from '../SongsService';
import{Songs} from '../Song';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-listsongs',
  templateUrl: './listsongs.component.html',
  styleUrls: ['./listsongs.component.scss']
})
export class ListsongsComponent implements OnInit {
  

  constructor(public songService:SongsService,private snackBar:MatSnackBar ) { }

  ngOnInit() {
    this.songService.fetchSongs()
    .subscribe((obj:Songs[])=>{
      debugger;
    })
  }
  OnDelete(id:number){
    debugger
    this.songService.deleteSong(id);
    this.snackBar.open("Song removed from the play list successfully!","",{
      duration:3000
    });
  }

}
