const tl = gsap.timeline();

const Animation = () => {
    tl.to('.bg',{
        width:300,height:250,opacity:1,duration:2,x:0,y:0
    })
    .to('.caption',{
        opacity:0.8,duration:2
    }, 0)
    .to('.logo',{
        opacity:1,duration:2
    }, 0)
    .to('.text1',{
        opacity:0,duration:2,
    }, 3)
    .to('.text2',{
        opacity:1,duration:2
    },"-=1")
    .to('.text2',{
        opacity:0,duration:2
    })
    .to('.text3',{
        opacity:1,duration:2
    },"-=1")
    .to('.text3',{
        opacity:0,duration:2,
    })
    .to('.text4',{
        opacity:1,duration:2,
    },"-=1")
    .to('button',{
        display:"block",opacity:1
    })
    .to('.bg',{
        x:-25,y:-25,duration:12,scale:1.2
    }, 0)
}

const handleClick = () => {
    tl.restart(); 
}  

Animation();