// Method in an object it's call a method-uses this.
// function not in an object-this-> references global object(windows in JS, globalin in Node)
//video object
const video = {
    //title property
    title: "a",
    //method in video objet
    play() {
        console.log(this);
    },
    //methods inside video object
};
// video.stop = function(){
//     console.lot
// }
// // /call
// // video.play();
function playVideo() {
    console.log(this);
}
// playVideo();
// //constructor function
function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video("a");
