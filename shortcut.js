document.addEventListener('keydown', (e) => {
    // play/pause
    if(e.keyCode === 32){
        e.preventDefault();
        document.getElementsByClassName('ytp-iv-video-content')[0].click();
    }

    //forward 15 sec
    if(e.keyCode === 39){
        e.preventDefault();
        document.getElementsByClassName('ytp-forward-button')[0].click()
    }

    //backward 15 sec
    if(e.keyCode === 37){
        e.preventDefault();
        document.getElementsByClassName('ytp-replay-button')[0].click();
    }

    //speed 2x
    if(e.keyCode === 83){
        e.preventDefault();
        document.querySelector('div[click-args="2"]').click();
    }

    //next button
    if(e.keyCode === 78){
        e.preventDefault();
        document.querySelector('.next-button').click();
    }

    //previous button
    if(e.keyCode === 80){
        e.preventDefault();
        document.querySelector('.previous-button').click();
    }


})


document.addEventListener('keydown', (e) => {
    //Dark theme
    if(e.keyCode === 66){
        e.preventDefault();
        [...document.querySelectorAll('body, nav, header, main, footer, div.py-4, div.row, div.MuiPaper-root, p, h1, h2, h3, span, button')].map(tag => {
            if(tag.style.backgroundColor === ''){
                tag.style.background = '#272727';
                tag.style.color = 'rgba(255, 255, 255, 0.2)'
            }
            else{
                tag.style.background = '';
                tag.style.color = '';
            }
        });
    }
    //Fun
    if(e.keyCode === 65){
        e.preventDefault();
        alert('Cracking in progress #@%35045#$$(#*)%343334*%% 1337 h3h3');
        [...document.querySelectorAll('div, p, h1, h2, h3, span, img, button')].map(tag => {
            const n = Math.random()*10;
            if(tag.style.transform === ''){
                tag.style.transform = 'rotate3d(1,1,1,'+n+'deg)';
                tag.src = 'https://webstockreview.net/images/emoji-clipart-hand-18.png';
            }
            else{
                tag.style.transform = '';
                tag.src = '';
            }
        })
    }
})

