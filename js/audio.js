function loopSound(sound) {
    sound.play({
        volume: 100,
        onfinish: function() {
            loopSound(sound);
            console.log('finish soundtrack, looping');
        }
    });
}
//play soundtrack
function playSoundTrack (){
    var mySound = soundManager.createSound({
        id: 'soundtrack',
        url: "audio/music.mp3"
        
    });
 
    loopSound(mySound);
}

//load huhs audio
function loadAudioHuhs (){
     soundManager.createSound({
        id: 'huh1',
        url: "audio/huhs/huh1.wav"
        
    });
    soundManager.createSound({
        id: 'huh2',
        url: "audio/huhs/huh2.wav"
        
    });
    soundManager.createSound({
        id: 'huh3',
        url: "audio/huhs/huh3.wav"
        
    });
}

//load audio commentator
function loadAudioCommentator (){
    soundManager.createSound({
        id: 'loose',
        url: "audio/commentator/loose.wav"
 
    });
    soundManager.createSound({
        id: 'perfect',
        url: "audio/commentator/perfect.wav"
        
    });
    soundManager.createSound({
        id: 'win',
        url: "audio/commentator/win.wav"
        
    });
    soundManager.createSound({
        id: 'you',
        url: "audio/commentator/you.wav"
        
    });
} 
//load audio swooshes
function loadAudioSwooshes (){
     soundManager.createSound({
        id: 'swoosh1',
        url: "audio/swooshes/Swoosh1.mp3"
        
    });
      soundManager.createSound({
        id: 'swoosh3',
        url: "audio/swooshes/Swoosh3.mp3"
        
    });
     soundManager.createSound({
        id: 'swooshingsound',
        url: "audio/swooshes/Swooshingsound.mp3"
        
    });
}
//load audio hits 
function loadAudioHits(){
    soundManager.createSound({
        id: 'hit1',
        url: "audio/hits/1.wav"
    });
    
    soundManager.createSound({
        id: 'hit2',
        url: "audio/hits/2.wav"
    });
    
    soundManager.createSound({
        id: 'hit3',
        url: "audio/hits/3.wav"
    });
    
    soundManager.createSound({
        id: 'hit4',
        url: "audio/hits/4.wav"
    });
    
    soundManager.createSound({
        id: 'hit5',
        url: "audio/hits/5.wav"
    });
    
    soundManager.createSound({
        id: 'hit6',
        url: "audio/hits/6.wav"
    });
    
    soundManager.createSound({
        id: 'hit7',
        url: "audio/hits/7.wav"
    });
    
    soundManager.createSound({
        id: 'kung_fu_punch',
        url: "audio/hits/kung_fu_punch.mp3"
    });
}
function loadAudioHado (){
     soundManager.createSound({
        id: 'hado',
        url: "audio/hado-shoryu_ken/hado.wav"
        
    });
    soundManager.createSound({
        id: 'ken',
        url: "audio/hado-shoryu_ken/ken.wav"
        
    });
    soundManager.createSound({
        id: 'shoryu',
        url: "audio/hado-shoryu_ken/shoryu.wav"
        
    });
}

//load audio crowd
function loadAudioCrowd (){
    soundManager.createSound({
        id: 'crowd1',
        url: "audio/crowd/1.wav"
        
    });
    soundManager.createSound({
        id: 'crowd2',
        url: "audio/crowd/2.wav"
        
    });
}
//soundmanager setup for all audio
soundManager.setup({
    url:'audio/soundmanager2.swf',
    debugMode:true
});

//on ready setup all audio 
soundManager.onready(function() {
    playSoundTrack();
    loadAudioHuhs();
    loadAudioHits();
    loadAudioSwooshes();
    loadAudioHado();
    loadAudioCommentator();
    loadAudioCrowd();
    randomCrowd();
});

function randomCrowd(){
    //every 30 sec call crowd sound 
}