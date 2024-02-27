const eyeBtn = document.querySelector('.eye');
let checkEye = true;
eyeBtn.addEventListener('click',()=>{
    const password = document.getElementById('password');
    if(checkEye){
        password.setAttribute('type','text');
        eyeBtn.classList.remove('fa-eye-slash');
        eyeBtn.classList.add('fa-eye');
        checkEye = false;
    } else{
        password.setAttribute('type','password');
        eyeBtn.classList.remove('fa-eye');
        eyeBtn.classList.add('fa-eye-slash');
        checkEye = true;
    }
});


// on click login btn

const login_btn = document.querySelector('.login_btn');
const outterDiv = document.querySelector('.outerDiv');
const cross = document.querySelector('.closed');
login_btn.addEventListener('click',()=>{
    outterDiv.classList.add('opacityStart');
    outterDiv.style.visibility = 'visible';

    outterDiv.addEventListener('animationend',()=>{
        outterDiv.classList.remove('opacityStart');
    });
});

cross.addEventListener('click',()=>{
    outterDiv.classList.add('opacityEnd');
    // 

    setTimeout(()=>{
        outterDiv.style.visibility = 'hidden';
    },1900);

    outterDiv.addEventListener('animationend',()=>{
        outterDiv.classList.remove('opacityEnd');
    });
});