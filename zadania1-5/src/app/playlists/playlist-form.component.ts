import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
    <form #playlistForm="ngForm" (ngSubmit)="submit($event, playlistForm)">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" [ngModel]="playlist.name" class="form-control" name="name">
          </div>
          <div class="form-group">
            <label>Utwory:</label>
            <input type="text" [value]="playlist.tracks + ' utwory'" disabled class="form-control" name="tracks">
          </div>
          <div class="form-group">
            <label>Kolor:</label>
            <input type="color" [ngModel]="playlist.color" name="color">
          </div>
          <div class="form-group">
            <label><input type="checkbox" [ngModel]="playlist.favourite" name="favourite"> 
            Ulubiona</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right">Zapisz</button>
          </div>
       </form>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

@Input('playlist')
  //set serPlaylist(playlist){
  //this.playlist = playlist;

  playlist;

@ViewChild('playlistForm')
  playlistForm;

@Output('saved')
onSave = new EventEmitter();

submit(event, playlistForm){
  event.preventDefault();
  console.log(playlistForm)
  
  let playlist = playlistForm.value;
  playlist.id = this.playlist.id;

  this.save( playlist )
}
save(playlist){

  this.onSave.emit(playlist)
}
  constructor() { }

  ngOnInit() {
  }
ngAfterViewInit(){
  console.log(this.playlistForm)
}
}
