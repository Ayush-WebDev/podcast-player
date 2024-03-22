
<script src="https://cdn.plyr.io/3.7.8/plyr.js"></script>
<script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>
 <!-- [Attributes by Finsweet] CMS Load -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js"></script>
<script>
const player = new Plyr('#player',{
settings: [""],
});
 
document.addEventListener("DOMContentLoaded",()=>{

let imagePodcast = document.querySelectorAll(".image-podcast-thumbnail");
let episodeImage = document.querySelector("img.episode-image");
let episodeTitle = document.querySelector(".episode-title");
let episodeSubTitle= document.querySelector(".episode-sub-title.thumbnail");
let singleEpisode = document.querySelectorAll(".single-episode-wrap");
let audioPlayer = document.querySelector("#player");
let backPlay = document.querySelector("#backplay");
let forwardPlay = document.querySelector("#forwardplay");
//let animationWaves = document.querySelectorAll(".music-waves-animation");
let episodePlayBtn = document.querySelectorAll(".play-button-wrapper");
let closePodcast = document.querySelector(".close-podcast");
let openPodcast = document.querySelector(".podcast-open-button");
let loadMore = document.querySelector(".load-more-episodes");

loadMore.addEventListener("click",()=>{
setTimeout(()=>{
let newEpisodes = document.querySelectorAll(".single-episode-wrap");
singleEp(newEpisodes);
},1000) 
})

if(player.playing){localStorage.setItem("playing",true)}

closePodcast.addEventListener("click",()=>{player.pause()});
openPodcast.addEventListener("click",()=>{player.play()});
player.on("loadeddata", onDataLoaded);
 let time= parseInt(localStorage.getItem("timePodcast")) || 0;
 player.source = {
  type: 'audio',
  sources: [
    {
      src: localStorage.getItem("sourcePodcast")|| "https://traffic.omny.fm/d/clips/a7021922-ab64-4d79-bb3f-aed50086962c/ffe258f7-6be9-4674-a120-aed500aaf733/092fe599-5e90-409f-b748-aed500ba5436/audio.mp3",
      type: 'audio/mp3',
    }
  ],
};
  episodeImage.src =localStorage.getItem("imagePodcast") || "https://assets-global.website-files.com/651cefd048b2738217b0d470/65f9054ba05bf721ba598994_600x600-HealthTechX-1.jpg";
 	episodeTitle.innerText = localStorage.getItem("titlePodcast") ||  "Designing customer-centric healthcare eXperiences - Diana YounanDiana Younan is the Customer Success Manager at coreplus";
  episodeSubTitle.innerText = localStorage.getItem("subtitlePodcast") || "Reimagining Healthcare";

setInterval(()=>{localStorage.setItem("timePodcast",player.currentTime);},1000);

// the seconds you want to jump to
 function onDataLoaded() {
       player.currentTime = time;
}
if(singleEpisode.length <= 10){
singleEp(singleEpisode);
}

function singleEp (newEpisodes){
newEpisodes.forEach((episode)=>{
/// single episode start ///
	episode.addEventListener("click",()=>{
   let animationWaves = document.querySelectorAll(".music-waves-animation");
  let imgSrc = episode.children[0].src;
  let linkPodcast = episode.children[2].children[2].innerText;
  animationWaves.forEach(animation=>animation.style.display="none");
  episode.children[1].children[0].style.display= "block";
  episodeImage.src = imgSrc;
 	episodeTitle.innerText = episode.children[2].children[0].children[0].innerText;
  episodeSubTitle.innerText = episode.children[2].children[1].innerText;
  player.source = {
  type: 'audio',
  sources: [
    {
      src: linkPodcast,
      type: 'audio/mp3',
    }
  ],
};
time = 0;
localStorage.setItem("titlePodcast",episode.children[2].children[0].children[0].innerText);
localStorage.setItem("subtitlePodcast",episode.children[2].children[1].innerText);
localStorage.setItem("imagePodcast",episode.children[0].src);
localStorage.setItem("showPodcast",true);
localStorage.setItem("sourcePodcast",linkPodcast);
localStorage.setItem("timePodcast",time);

player.play();
 
 
  })
})

}

 

/// single episode /////

// Forward and backward play buttons

backPlay.addEventListener("click",()=>{
	player.rewind();
})
forwardPlay.addEventListener("click",()=>{
	player.forward();
})
})
</script>
