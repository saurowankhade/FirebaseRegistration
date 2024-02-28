const outterDiv = document.querySelector('.outerDiv');



// on click password will visible

function passwordVisible(){
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
}



// on click login btn
function showLoginPage(){
const login_btn = document.querySelector('.login_btn');
const innerDiv = document.querySelector('.innerDiv');

login_btn.addEventListener('click',()=>{
    outterDiv.classList.add('opacityStart');
    outterDiv.style.visibility = 'visible';

    innerDiv.innerHTML = ` <span><i class="fas fa-times closed"></i></span>
    <h4>Login</h4>
    <form>
        <div> <span><i class="far fa-envelope"></i></span><input type="email"  id="userEmail" placeholder="Enter you email" ></div>
        <div>
            <span><i class="fa-solid fa-lock"></i></span>
            <input type="password"  id="password" placeholder="Enter your password">
            <span>
                <i class="fa-solid fa-eye-slash eye"></i>
            </span>
        </div>
        <div class="forgot_div">
            <p>Forgot Password</p>
        </div>
        <div class="btn">
            <input type="button" value="Login">
        </div>
        <div class="signup_text">
            <p>Don&#8217;t have an account?  <span class="signup_btn" onclick="signupBtn()">&nbsp;Signup</span></p>
        </div>
    </form>

    `;

    closedDilogBox();
    

    outterDiv.addEventListener('animationend',()=>{
        outterDiv.classList.remove('opacityStart');
    });
});

}

showLoginPage();




// on click closed btn 
function closedDilogBox(){
    const cross = document.querySelector('.closed');
    cross.addEventListener('click',()=>{
    outterDiv.classList.add('opacityEnd');

    setTimeout(()=>{
        outterDiv.style.visibility = 'hidden';
    },1900);

    console.log(cross)

    outterDiv.addEventListener('animationend',()=>{
        outterDiv.classList.remove('opacityEnd');
    });
});
}



// signup click
function signupBtn(){
    let innerDiv = document.querySelector('.innerDiv');
    innerDiv.innerHTML = `
    <span><i class="fas fa-times closed"></i></span>
    <h4>Sign Up</h4>
    <form>
        <div> <span><i class="far fa-envelope"></i></span><input type="email"  id="userEmail" placeholder="Enter you email" ></div>
        <div>
            <span><i class="fa-solid fa-lock"></i></span>
            <input type="password"  id="createPass" placeholder="Create password">
            <span>
                <i class="fa-solid fa-eye-slash eye"></i>
            </span>
        </div>
        <div>
            <span><i class="fa-solid fa-lock"></i></span>
            <input type="password"  id="comfirmPass" placeholder="Confirm password">
            <span>
                <i class="fa-solid fa-eye-slash eye"></i>
            </span>
        </div>

        <div class="btn" id="signUp">
            <input type="button" value="Sign Up">
        </div>
        <div class="login_text">
            <p>Alreay have a account?  <span class="btn_login" onclick="showLoginPage()">&nbsp;Login</span></p>
        </div>
    </form>

    `;

    closedDilogBox();
    passwordVisible();

}


