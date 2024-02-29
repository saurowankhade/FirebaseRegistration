const outterDiv = document.querySelector('.outerDiv');

const innerDiv = document.querySelector('.innerDiv');

let checkEye = true;



// on click password will visible

function passwordVisible(eyeName,passName){
const eyeBtn = document.querySelector(`.${eyeName}`);

    const password = document.getElementById(`${passName}`);
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
}



// on click login btn
function showLoginPage(){
const login_btn = document.querySelector('.login_btn');

login_btn.addEventListener('click',()=>{
    outterDiv.classList.add('opacityStart');
    outterDiv.style.visibility = 'visible';

   setInnerLoginPage();

    closedDilogBox();
    

    outterDiv.addEventListener('animationend',()=>{
        outterDiv.classList.remove('opacityStart');
    });
});

}

showLoginPage();


function setInnerLoginPage(){

    innerDiv.innerHTML = ` <span><i class="fas fa-times closed"></i></span>
    <h4>Login</h4>
    <form>
        <div> <span><i class="far fa-envelope"></i></span><input type="email"  id="userEmail" placeholder="Enter you email" required></div>
        <div>
            <span><i class="fa-solid fa-lock" ></i></span>
            <input type="password"  id="password" placeholder="Enter your password" required>
            <span>
                <i class="fa-solid fa-eye-slash eye" onclick=" passwordVisible('eye','password')"></i>
            </span>
        </div>
        <div class="forgot_div">
            <p>Forgot Password</p>
        </div>
        <div class="btn">
            <input type="button" value="Login" onclick="loginClick()">
        </div>
        <div class="signup_text">
            <p>Don&#8217;t have an account?  <span class="signup_btn" onclick="signupBtn()">&nbsp;Signup</span></p>
        </div>
    </form>

    `;

    closedDilogBox();
}

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
        <div> <span><i class="far fa-envelope"></i></span><input type="email"  id="userEmail" placeholder="Enter you email" required></div>
        <div>
            <span><i class="fa-solid fa-lock"></i></span>
            <input type="password"  id="createPass" placeholder="Create password" required>
            <span>
                <i class="fa-solid fa-eye-slash eye createeye" onclick=" passwordVisible('createeye','createPass')"></i>
            </span>
        </div>
        <div>
            <span><i class="fa-solid fa-lock"></i></span>
            <input type="password"  id="comfirmPass" placeholder="Confirm password" required>
            <span>
                <i class="fa-solid fa-eye-slash eye confirEye" onclick=" passwordVisible('confirEye','comfirmPass')"></i>
            </span>
        </div>

        <div class="btn" id="signUp">
            <input type="button" value="Sign Up" onclick="loginClick()">
        </div>
        <div class="login_text">
            <p>Alreay have a account?  <span class="btn_login" onclick="setInnerLoginPage()">&nbsp;Login</span></p>
        </div>
    </form>

    `;

    closedDilogBox();
   

}


function loginClick(){
    const uEmail = document.getElementById('userEmail').value;
    const uPass = document.getElementById('password').value;
    if(uEmail === ''){
        console.log('User email empty!');
    } else if(uPass === ''){
        console.log('User password empty!');
    } else if(uPass.length < 7){
        console.log('password less than 7!');
    } else{
        console.log(`UserEmail : ${uEmail} nad UserPass : ${uPass}`);
    }
}


