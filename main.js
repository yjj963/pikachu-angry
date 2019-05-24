!function(){
    var pageWidth = window.innerWidth/10
    document.write('<style>html{font-size:'+pageWidth+'px;}</style>')

    var interval=1
    let timer=null
    $('.actions').on('click','button',function(e){
        //获取到目标元素，需要jquery元素
        let $button=$(e.currentTarget)
        //判断按钮的文本，设置相应的速度值，添加类
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        let btnContext=$button[0].innerText
        switch(btnContext){
            case '快速':
                interval=0.1
                break;
            case '正常':
                interval=30
                break
            case '慢速':
                interval=100
        }
    })
    function writeCode(code){
        let styleTag=document.getElementById('styleTag')
        let codeWrapper=document.getElementById('code')
        let n=0
        timer=setTimeout(function run(){
            n++;        
            styleTag.innerHTML=code.substring(0,n)
            codeWrapper.innerHTML=code.substring(0,n)
            codeWrapper.scrollTop=codeWrapper.scrollHeight
            if(n<code.length){
                timer=setTimeout(run,interval)
            }
        },interval)
    }
    let code=`
    /* 先画头部
    ================================================== */

    .head {
        position: relative;
        margin: 0 auto;
        background-color: #FFFF00;
        border: solid 4px #000000;
    }
    
    .head-up {
        border-bottom: 4px solid #FFFF00;
        border-radius: 110px;
        height: 195px;
        left: 8px;
        position: absolute;
        top: 2px;
        width: 218px;
        z-index: 1;   
    }
    
    .head-down {
        height: 154px;
        left: 2px;
        top: 65px;
        width: 234px;
    }
    
    .head-middle {
        position: absolute;
        z-index: 2;
        top: 76px;
        left: 7px;
        height: 123px;
        width: 231px;
        border: none;
    }
    
    /* 现在画耳朵
    ================================================== */

    .ear {
        position: absolute;
        background: #FFFF00;
        border: 5px solid #000000;
        overflow: hidden;
    }
    
    .ear-left {
        left: -35px;
        top: -65px;
        width: 100px;
        height: 110px;
    
        border-radius: 10px 125% 10px 125%;    
    
        transform: rotate(-26deg) skewX(25deg) skewY(0deg);
    
        transform-origin: 100% 100%;
    
        /* animation */
        animation: ear_left 4.5s infinite linear 0s;
    }
    
    .ear-left:before {
        background-color: #000000;
        content: "";
        position: absolute;
        top: -5px;
        left: -32px;
        width: 60px;
        height: 60px;
        transform: rotate(18deg);
    }
    
    .ear-right {
        width: 140px;
        height: 80px;
        right: -77px;
        top: 70px;
    
        border-radius: 10px 125% 10px 125%;
    
        box-shadow: 11px -9px 0 2px rgba(0, 0, 0, 0.2) inset;
    
        transform: rotate(-90deg) skewX(27deg) skewY(0deg);
    
        transform-origin: 0 0;
    
        /* animation */
        animation: ear_right 3s infinite linear 0s;
    }
    
    .ear-right:before {
        background-color: #000000;
        content: "";
        height: 60px;
        position: absolute;
        right: -5px;
        top: 62px;
        width: 65px;
    
        transform: rotate(-15deg);
    }

    /* 接着是眼睛
    ================================================== */
    
    .eye {
        background-color: #000000;
        height: 42px;
        overflow: hidden;
        position: absolute;
        top: 84px;
        width: 42px;
    }
    
    .eye-left {
        left: 36px;
    }
    
    .eye-right {
        right: 36px;
    }
    
    .iris {
        background-color: #FFFFFF;
        border-radius: 50%;
        height: 16px;
        position: absolute;
        top: 7px;
        width: 16px;
    }
    
    .iris-small {
        width: 6px;
        height: 11px;
    }
    
    .eye-left .iris-small {
        left: 7px;
        top: 32px;
        transform: rotate(27deg);
    }
    
    .eye-right .iris-small {
        left: 25px;
        top: 33px;
        transform: rotate(-25deg);
    }
    
    .iris-left {
        right: 7px;
        /* animation */    
        animation: pisca 3s infinite step-start 0s;
    }
    
    .iris-right {
        left: 7px;
        /* animation */    
        animation: pisca 3s infinite step-start 0s;
    }

    /* 然后是眉毛，生气了会皱眉哦
    ================================================== */
    .eyebrow {
        width: 45px;
        height: 2px;
        background: #000000;
        position: absolute;
        top: 85px;
        z-index: 2;
    }
    
    .eyebrow-left {
        left: 35px;
        transform: rotate(22deg);
    }
    
    .eyebrow-right {
        right: 35px;
        transform: rotate(-22deg);
    }
    
    .eyebrow:before {
        background: #FFFF00;
        height: 20px;
        width: 50px;
        content: '';
        position: absolute;
        top: -20px;
    }
    
    /* 小鼻子也要认真画哦
    ================================================== */
    
    .nose-top {
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
        height: 2px;
        background-color: #000000;
        border-radius: 34% 34% 22% 22%;
    }
    
    .nose-bottom {
        position: absolute;
        top: -10px;
        height: 17px;
        width: 16px;
        background-color: #000000;
        border-radius: 34% 33% 33% 33%;
        transform: rotate(135deg);
    }
     
    /* 脸颊上也有生气的表现呢
    ================================================== */
    
    .cheek {
        background-color: #EC0000;
        border: 2px solid #000000;
        height: 50px;
        position: absolute;
        top: 126px;
        width: 50px;
    }
    
    .cheek-left {
        left: 4px;
    }
    
    .cheek-right {
        right: -3px;
    }
    
    .light {
        position: absolute;
        top: 88px;
        width: 130px;
        height: 130px;
        
        background-image:
            -webkit-gradient(radial, 50% 50%, 2, 50% 50%, 30, from(white), color-stop(0.1, rgba(255,240,174,.5)), to(rgba(255, 255, 253, 0.1))),
            -webkit-gradient(radial, 50% 50%, 1, 50% 50%, 30, from(white), color-stop(0.1, rgba(255,186,170,.4)), to(transparent)),
            -webkit-gradient(radial, 50% 50%, 1, 50% 50%, 40, from(rgba(255,255,255,.9)), color-stop(0.05, rgba(251,255,186,.3)), to(transparent)),
            -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 30, from(rgba(255,255,255,.4)), color-stop(0.03, rgba(253,255,219,.2)), to(transparent));
    
        opacity: 0;
        animation: light 5s infinite step-start 2s;
        
    }
    
    .light-left {
        left: -35px;
    }
    
    .light-right {
        right: -43px;
    }
    /* 看，很快就气出惊雷了
    ================================================== */
    .hold-thunder {
        height: 35px;
        position: absolute;
        width: 30px; 
        z-index: 1; 
        opacity: 0;
        /* animation */    
        animation: light 5s infinite step-start 2s;
    }
    
    .thunder {
        position: absolute;
        background: #FFFFFF;
        height: 1px;
    }
    
    .hold-thunder1 {
        left: 0px;
        top: -4px;
    }
    
    .thunder1 {
        width: 10px;
        left: 15px;
        top: 28px;
    }
    
    .thunder2{
        left: 8px;
        top: 25px;
        width: 10px;
        transform: rotate(41deg);
    }
    
    .thunder3{
        left: 3px;
        top: 24px;
        width: 8px;
        transform: rotate(-40deg);
    }
    
    .hold-thunder2 {
        left: 25px;
        top: 4px;
        transform: rotate(111deg);
    }
    
    .hold-thunder3 {
        left: 25px;
        top: 4px;
        transform: rotate(25deg);
    }
    
    /* 嘴巴也是紧闭着的
    ================================================== */
    
    .hold-mouth {
        position: relative;
        top: 150px;
        left: 70px;
        height: 9px;
        width: 100px;
        overflow: hidden;
    }
    
    .mouth {
        position: absolute;
        border: solid 2px #000000;
        border-radius: 20px;
    }
    
    .mouth-left {
        height: 40px;
        left: 16px;
        top: -35px;
        width: 30px;
    }
    
    .mouth-right {
        height: 40px;
        right: 16px;
        top: -35px;
        width: 30px;
    }
    
    .mouth-center {
        height: 40px;
        right: 34px;
        top: 0px;
        width: 30px;
        background-color: #FFFF00;
        z-index: 2;
    }    
    `
    writeCode(code)
}.call()