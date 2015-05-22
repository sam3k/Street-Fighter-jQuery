var $ken = $('.ken'),
    $guile = $('.guile'),
    $kenPos, $guilePos, $fireballPos;
    

var isCollision = function(){
    console.log("Ken", $ken.position());
    console.log("Guile", $guile.position());
    
    var ken_left = $ken.position().left;
    var guile_left = $guile.position().left;
            console.log(guile_left - ken_left)
    if (
        (guile_left - ken_left <= 40) && (guile_left - ken_left >= -40)
        )
    {

        return true;
    }    
    return false;
};


// moves
// ----------------------------------- \
var punch = function(){
    $ken.addClass('punch'); 
    if (isCollision()) { 
        $guile.addClass('hit1');
    }
    setTimeout(function() { 
        $ken.removeClass('punch'); 
        $guile.removeClass('hit1');
    }, 150);
};
var kick = function(){
    $ken.addClass('kick');
    if (isCollision()) { 
        
    }
    setTimeout(function() { $ken.removeClass('kick'); }, 500);
};
var rkick = function(){
    $ken.addClass('reversekick');
    if (isCollision()) { 
        
    }
    setTimeout(function() { $ken.removeClass('reversekick'); }, 500); 
};
var tatsumaki = function(){
    //soundManager.play('tatsumaki');
    $ken.addClass('tatsumaki');
    if (isCollision()) { 
    }
    setTimeout(function() { $ken.addClass('down'); }, 1500); 
    setTimeout(function() { $ken.removeClass('tatsumaki down'); }, 2000);
};
var hadoken = function(){
    $ken.addClass('hadoken'); 
    setTimeout(function() { $ken.removeClass('hadoken'); }, 500); 
    setTimeout(function() {
        // 1
        var $fireball = $('<div/>', { class:'fireball' });
        $fireball.appendTo($ken);

        var isFireballCollision = function(){ 
            return false;
        };

        var explodeIfCollision = setInterval(function(){

            $fireballPos = $fireball.offset();

            if (isFireballCollision()) {
            }

        }, 50);

        // 2
        setTimeout(function() { $fireball.addClass('moving'); }, 20);

        //3
        setTimeout(function() { 
            $fireball.remove(); 
            clearInterval(explodeIfCollision);
        }, 3020);

    }, (250));
};
var shoryuken = function(){
    if (isCollision()) { 
        
    }
    $ken.addClass('shoryuken');
    setTimeout(function() { $ken.addClass('down'); }, 500); 
    setTimeout(function() { $ken.removeClass('shoryuken down'); }, 1000);
};
var jump = function(){
    $ken.addClass('jump');
    setTimeout(function() { $ken.addClass('down'); }, 500); 
    setTimeout(function() { $ken.removeClass('jump down'); }, 1000); 
};
var kneel = function(){
    $ken.addClass('kneel');
};
var walkLeft = function(){
    $ken.addClass('walk').css({ left:'-=10px' });
};
var walkRight = function(){
    $ken.addClass('walk').css({ left:'+=10px' });
};

var guilehit1 = function(){
    $guile.addClass('hit1');
    setTimeout(function(){
       $guile.removeClass('hit1'); 
    }, 400 );
};

var guilehit2 = function(){
    $guile.addClass('hit2');
     setTimeout(function(){
       $guile.removeClass('hit2'); 
    }, 400 );
};

var guilehit3 = function(){
    $guile.addClass('hit3');
     setTimeout(function(){
       $guile.removeClass('hit3'); 
    }, 400 );
};


// on click events
// -----------------------------------
$('#a').click(punch);
$('#z').click(kick);
$('#e').click(rkick);
$('#q').click(tatsumaki);
$('#s').click(hadoken);
$('#d').click(shoryuken);
$('#up').click(jump);
$('#down').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { kneel(); }
    else { $ken.removeClass('kneel'); }
});
$('#left').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkLeft(); }
    else { $ken.removeClass('walk'); }
});
$('#right').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkRight(); }
    else { $ken.removeClass('walk'); }
});


// on keydown events
// ----------------------------------- 
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') { 
        
        // s - hadoken
        if (e.keyCode == 83 
            && !$ken.hasClass('tatsumaki') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
        ) { 
            hadoken();
        }

        // d - shoryuken
        if (e.keyCode == 68 
            && !$ken.hasClass('tatsumaki')
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
            && !$ken.hasClass('jump')
        ) { 
            shoryuken();
        }

        // q - tatsumaki senpuu kyaku
        if (e.keyCode == 81 
            && !$ken.hasClass('tatsumaki') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('reversekick')
            && !$ken.hasClass('jump')
        ) { 
            tatsumaki();
        }

        // a - punch
        if (e.keyCode == 65 
            && !$ken.hasClass('punch') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki') 
        ) { 
            punch(); 
        }

        // e - kick
        if (e.keyCode == 90 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            kick();
        }

        // r - reverse kick
        if (e.keyCode == 69 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            rkick();
        }

        // up - jump
        if (e.keyCode == 38 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            jump();
        }

        // down - kneel
        if (e.keyCode == 40 
            && !$ken.hasClass('kneel') 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('reversekick') 
            && !$ken.hasClass('kick') 
            && !$ken.hasClass('hadoken') 
            && !$ken.hasClass('shoryuken') 
            && !$ken.hasClass('tatsumaki')
        ) { 
            kneel();
        }
    
    
        // ← flip 
        // if (e.keyCode == 37) $ken.addClass('flip');
        // → unflip 
        // if (e.keyCode == 39) $ken.removeClass('flip');

        // ←← →→ walking
        if (e.keyCode == 37) { walkLeft(); }
        if (e.keyCode == 39) { walkRight(); }
        if (e.keyCode == 75) { guilehit1(); }
        if (e.keyCode == 76) { guilehit2(); } 
        if (e.keyCode == 79) { guilehit3(); } 
    }
    else { // keyup
        $ken.removeClass('walk kneel');
    }

    //console.log(e.keyCode);

 
    //return false;
});
