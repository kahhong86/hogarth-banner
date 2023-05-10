// POLYFILL FOR IE 11 TO FIX foEach()
if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
  
/*************************************************************/
// GLOBAL VARIABLES
let adSize;
var tl = gsap.timeline();
let TOTAL_ASSETS_LOADED = 0;
let TOTAL_ASSETS_TO_PRELOAD;
let TOTAL_REPEAT = 0; // this will loop total of N+1 times, initial playthrough + N
// ADDITIONAL VARIABLES


/*************************************************************/
// CLICK HANDLERS
handleClick = () => {
    tl.restart();
}  

/*************************************************************/
initCreative = () => {
if(_logging){ console.log('initCreative()'); }
    adSize = getAdSize();
    setupAnimations();
}


/*************************************************************/
runCreative = () => {
    if(_logging){ console.log('runCreative()'); }

    tl.repeat( TOTAL_REPEAT ).play(0)

}

/*************************************************************/
// configure all animations here
// all timeline/tween variables must be global (defined up top)
setupAnimations = () => {
    const tl_text = gsap.timeline(); 
    const tl_bg = gsap.timeline();
    const tl_finale = gsap.timeline();

    gsap.set([
        'button'
      ], { autoAlpha:0 })

    tl_text.to('.caption',{
        opacity:0.8,duration:1.5  
    }, 0)
    .to('.logo',{
        opacity:1,duration:1.5
    }, 0)
    .to('.text1',{
        opacity:0,duration:1,
    }, 3)
    .to('.text2',{
        opacity:1,duration:1,
    },"-=1")
    .to('.text2',{
        opacity:0,duration:1,delay:2,
    })
    .to('.text3',{
        opacity:1,duration:1
    },"-=1")
    .to('.text3',{
        opacity:0,duration:1,delay:2,
    })
    .to('.text4',{
        opacity:1,duration:1,
    },"-=1");

    //Background Timeline
    tl_bg.set('.bg',{
        width:300,height:250,opacity:1
    })
    .fromTo('.bg .img1',{
        width:300,height:250,opacity:1,
    },{
        x:-10,y:-10,duration:3,scale:1.2,ease:"power2.out"
    }, "<")
    .fromTo('.starter',{
        width:300,height:250,backgroundColor:"white",opacity:1,
    },{
        opacity:0,duration:1
    },"<")
    .fromTo('.bg .img2',{
        x:0,y:0,scale:1,opacity:0
    },{
        x:-10,y:-10,duration:3,scale:1.2,ease:"power2.out",opacity:1
    })
    .fromTo('.bg .img3',{
        x:0,y:0,scale:1,opacity:0
    },{
        x:-10,y:-10,duration:3,scale:1.2,ease:"power2.out",opacity:1
    })
    .fromTo('.bg .img4',{
        x:0,y:0,scale:1,ease:"power2.out",opacity:0
    },{
        x:-10,y:-10,duration:3,scale:1.2,opacity:1
    });

    tl_finale.to('.content',{
        opacity:0,duration:0.5
    })
    .to('.finale',{
        opacity:1,display:"block",
    },"<")
    .to('.bg1',{
        duration:0.5,opacity:1,
    })
    .to('.bg2',{
        duration:0.5,opacity:1,width:225,height:250
    })
    .to('.bg1',{
        width:75,duration:0.5,
    },"<")
    .to('.bg1 img',{
        left:"-75px",position:"relative",duration:0.5
    },"<")
    .to('.bg3',{
        duration:0.5,opacity:1,width:150,height:250
    })
    .to('.bg2',{
        width:75,duration:0.5,
    },"<")
    .to('.bg2 img',{
        left:"-185px",position:"relative",duration:0.5
    },"<")
    .to('.bg4',{
        duration:0.5,opacity:1,width:75,height:250,
    })
    .to('.bg4 img',{
        left:"-110px",position:"relative",duration:0.5
    },"<")
    .to('.bg3',{
        width:75,duration:0.5,
    },"<")
    .to('.bg3 img',{
        left:"-75px",position:"relative",duration:0.5
    },"<")
    .to("#Layer_2",{
        opacity:1,duration:0.5,display:"block"
    });

    tl
      .addLabel("Caption", 0)
      .add ( tl_text )

      .addLabel("Background")
      .add ( tl_bg, 0)

      .addLabel("Finale")
      .add ( tl_finale, 12 )

    // when the timeline is done, show the replay button
    tl.eventCallback( "onComplete", function() {
        getReplayTween().play()
    })
    

}


/*************************************************************/
getReplayTween = () => {
    return gsap.fromTo( 'button', { duration: 1, autoAlpha:0}, { autoAlpha:1, display:"block"}, 15);
} 

/*************************************************************/
preloadCreative = () => {
    if(_logging){ console.log('preloadCreative()'); }
    if(_logging){ console.log('Preloading started'); }

    var datasets = document.querySelectorAll('[data-subload]');

    TOTAL_ASSETS_LOADED = 0;
    TOTAL_ASSETS_TO_PRELOAD = datasets.length;

    datasets.forEach( function( el ) {
        el.onload = function() {
        TOTAL_ASSETS_LOADED++;
        if(_logging){ console.log('Preloading %s/%s', TOTAL_ASSETS_LOADED, TOTAL_ASSETS_TO_PRELOAD); }
        
        if (TOTAL_ASSETS_LOADED == TOTAL_ASSETS_TO_PRELOAD ) {
            if(_logging){ console.log('Preloading complete'); }
            
            initCreative()
        }
        }
        el.src = el.dataset.subload;

    });
}


/*************************************************************/
getMasterTimeline = () => {
    if(_logging){ console.log('getMasterTimeline()'); }
    return tl;
}

/*************************************************************/
// this function returns and object of 'width' and 'height'
getAdSize = () => {
    const regex = /width=(\d+).+height=(\d+)/gm;
    const meta = document.querySelector('meta[name="ad.size"]').content

    matches = regex.exec(meta)

    if(matches && matches.length == 3) {
        return {
        'width' : matches[1],
        'height': matches[2]
        }
    }

    console.error("getAdSize: Unable to extract width and height. Did you set ad.size meta?")
    return false;

}


