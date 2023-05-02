const Animation = () => {
    gsap.from('.bg,.caption,.logo,.text1,.text2,.text3,.text4',{
        opacity:0
    });
    gsap.from('button',{
        display:"none",
    });
    gsap.to('.bg',{
        width:300,height:250,opacity:1,duration:2,
    });
    gsap.to('.caption',{
        opacity:0.8,duration:2
    })
    gsap.to('.logo',{
        opacity:1,duration:2
    });
    gsap.to('.bg',{
        x:-25,y:-25,duration:12,scale:1.2
    });
    gsap.to('.text1',{
        delay:3,opacity:0,duration:2
    });
    gsap.to('.text2',{
        delay:3,opacity:1,duration:2
    });
    gsap.to('.text2',{
        delay:6,opacity:0,duration:2
    });
    gsap.to('.text3',{
        delay:6,opacity:1,duration:2
    });
    gsap.to('.text3',{
        delay:9,opacity:0,duration:2,
    });
    gsap.to('.text4',{
        delay:9,opacity:1,duration:2,
    });
    gsap.to('button',{
        delay:12,duration:2,display:"block",opacity:1
    })
}

const handleClick = () => {
    Animation();
}

Animation();