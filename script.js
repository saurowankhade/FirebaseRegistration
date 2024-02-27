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