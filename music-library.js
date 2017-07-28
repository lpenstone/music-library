function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.playlist = function(playlist){
    this.playlists.push(playlist)
  }
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.track = function(track){
    this.tracks.push(track)
  }
  this.playlistDuration = function(){
    let length = 1;
      for (let track of this.tracks){
        length += track.tracklength;
      }
    this.playlistDuration = length;
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.tracklength = length;
}

//Define Library
let libraryLaura = new Library("Laura's Music", "Laura");

//Defining playlists
let playlistLaura = new Playlist("Songs Laura 2017");
let playlistSteve = new Playlist("Songs Steve 2017");

//Defining tracks
let trackOne = new Track("Welcome to the Jungle", 4, 120);
let trackTwo = new Track("Let it Go", 5, 140);
let trackThree = new Track("Bonjour", 3, 200);
let trackFour = new Track("Rolling in the Deep", 5, 180);
let trackFive = new Track("Worst of All", 5, 20);

//Adding tracks to playlists
playlistLaura.track(trackOne);
playlistLaura.track(trackTwo);
playlistLaura.track(trackThree);
playlistSteve.track(trackThree);
playlistSteve.track(trackFour);
playlistSteve.track(trackFive);

//Calculating playlist lengths
playlistLaura.playlistDuration();
playlistSteve.playlistDuration();

//Adding playlists to library
libraryLaura.playlist(playlistLaura);
libraryLaura.playlist(playlistSteve);

//Display
console.log(playlistLaura);
console.log(libraryLaura);


