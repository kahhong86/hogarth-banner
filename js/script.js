const Animation = () => {
    const tl = gsap.timeline();
    tl.to('.bg',{
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
    tl.to('.text1',{
        opacity:0,duration:2
    });
    tl.to('.text2',{
        opacity:1,duration:2
    });
    tl.to('.text2',{
        opacity:0,duration:2
    });
    tl.to('.text3',{
        opacity:1,duration:2
    });
    tl.to('.text3',{
        opacity:0,duration:2,
    });
    tl.to('.text4',{
        opacity:1,duration:2,
    });
}

const handleClick = () => {
    Animation();
}

Animation();