"use strict";

// document.addEventListener('click',()=>{
//    audioTag2.play();
// });

document.addEventListener('dblclick',()=>{
    audioTag2.pause() ;
});

document.addEventListener('click',()=>{
    audioTag3.play();
});
 
// document.addEventListener('dblclick',()=>{
//      audioTag3.pause() ;
// });

// document.addEventListener('click',()=>{
//     audioTag4.play();
// });
 
// document.addEventListener('dblclick',()=>{
//      audioTag4.pause() ;
// });

button.onclick = () =>{
    const audioTag2 = new Audio();
    audioTag2.src  ="https://dll.z2.fm/music/4/31/ruki_vverh_x_hammali__navai_-_poslednij_poceluj_vadim_adamov__hardphol_remix.mp3?download=force";
    audioTag2.play();
};

// const audioTag3 = new Audio();
// audioTag3.src = "https://dll.z2.fm/music/d/87/klava_koka_-_ne_so_mnoj_dfm_mix_(zf.fm).mp3?download=force";

// const audioTag4 = new Audio();
// audioTag4.src = "https://dll.z2.fm/music/4/d3/kalush_feat__alyona_alyona_-_gori_karmv_remix.mp3?download=force ";




















