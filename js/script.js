const tl = gsap.timeline();
const bg_tl = gsap.timeline();
const tl_finale = gsap.timeline();

const Animation = () => {
    tl.to('.caption',{
        opacity:0.8,duration:2
    }, 0)
    .to('.logo',{
        opacity:1,duration:2
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
    bg_tl.set('.bg',{
        width:300,height:250,backgroundImage:"url(images/banner.jpg)"
    })
    .fromTo('.bg',{
        width:300,height:250
    },{
        opacity:1,x:-10,y:-10,duration:3,scale:1.2
    }, "<")
    .set('.bg',{
        backgroundImage:"url(images/home-panel-02-edit.jpg)"
    })
    .fromTo('.bg',{
        x:0,y:0,scale:1
    },{
        x:-10,y:-10,duration:3,scale:1.2,
    })
    .set('.bg',{
        backgroundImage:"url(images/home-panel-03-m.jpg)",
    })
    .fromTo('.bg',{
        x:0,y:0,scale:1
    },{
        x:-10,y:-10,duration:3,scale:1.2,
    })
    .set('.bg',{
        backgroundImage:"url(images/home-panel-04.jpg)",
    })
    .fromTo('.bg',{
        x:0,y:0,scale:1
    },{
        x:-10,y:-10,duration:3,scale:1.2,
    });

    tl_finale.to('.content',{
        delay:12,opacity:0,duration:0.5
    })
    .to('.finale',{
        opacity:1,display:"block",
    },"<")
    .to('.bg1',{
        duration:0.5,opacity:1,
    })
    .to('.bg2',{
        duration:0.5,opacity:1,backgroundImage:"url(images/home-panel-02-edit.jpg)",width:225,height:250
    })
    .to('.bg1',{
        width:75,duration:0.5,backgroundPosition:"center center"
    },"<")
    .to('.bg3',{
        duration:0.5,opacity:1,backgroundImage:"url(images/home-panel-03-m.jpg)",width:150,height:250
    })
    .to('.bg2',{
        width:75,duration:0.5,backgroundPosition:"57% center"
    },"<")
    .to('.bg4',{
        duration:0.5,opacity:1,backgroundImage:"url(images/home-panel-04.jpg)",width:75,height:250,backgroundPosition:"center center"
    })
    .to('.bg3',{
        width:75,duration:0.5,backgroundPosition:"center center"
    },"<")
    .to('button',{
        opacity:1,duration:0.5,display:"block"
    })
    ;
}

const handleClick = () => {
    tl.restart();
    bg_tl.restart();
    tl_finale.restart();
}  

Animation();