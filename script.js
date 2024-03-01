

        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
        
        import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBskySUeEu2wWBn0DEoq-onBB45b7aa6-I",
          authDomain: "hackathon-62a08.firebaseapp.com",
          projectId: "hackathon-62a08",
          storageBucket: "hackathon-62a08.appspot.com",
          messagingSenderId: "1068367832541",
          appId: "1:1068367832541:web:7a423144016e337e824234",
          measurementId: "G-J7TF4KCLRV"
        };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        
        const db = getDatabase();
        const auth = getAuth(app);



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
        <div> <span><i class="fa-solid fa-envelope"></i></span><input type="email"  id="userEmail" placeholder="Enter you email" required></div>
        <div>
            <span><i class="fa-solid fa-lock" ></i></span>
            <input type="password"  id="password" placeholder="Enter your password" required>
            <span>
                <i class="fa-solid fa-eye-slash eye" onclick="passwordVisible('eye','password')"></i>
            </span>
        </div>
        <div class="forgot_div">
            <p>Forgot Password</p>
        </div>
        <div class="btn">
            <input type="button" value="Login" onclick="loginClick()">
        </div>
        <div class="signup_text">
            <p>Don&#8217;t have an account?  <span class="signup_btn" >&nbsp;Signup</span></p>
        </div>
    </form>
    `;

    closedDilogBox();

    document.querySelector('.signup_text').addEventListener('click',signupBtn);
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
        <div> <span><i class="fa-solid fa-envelope"></i></span><input type="email"  id="userEmail" placeholder="Enter you email" required></div>
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
                <i class="fa-solid fa-eye-slash eye confirEye"></i>
            </span>
        </div>

        <div class="btn" id="signUp">
            <input type="button" value="Sign Up">
        </div>
        <div class="login_text">
            <p>Alreay have a account?  <span class="btn_login">&nbsp;Login</span></p>
        </div>
    </form>

    `;

    closedDilogBox();

    // onclick handle
    document.querySelector('.login_text').addEventListener('click',setInnerLoginPage);
    document.querySelector('#signUp').addEventListener('click',CreateNewAccount);
    document.querySelector('.confirEye').addEventListener('click',passwordVisible('confirEye','comfirmPass'));

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


function CreateNewAccount(){
    const uEmail = document.getElementById('userEmail').value;
    const crePass = document.getElementById('createPass').value;
    const comPass = document.getElementById('comfirmPass').value;

    if(uEmail === ''){
        console.log('User email empty!');
    } else if(crePass === ''){
        console.log('User password empty!');
    } else if(crePass.length < 7){
        console.log('password less than 7!');
    } else if(comPass === ''){
        console.log('User password empty!');
    } else if(comPass.length < 7){
        console.log('password less than 7!');
    } else if(crePass !== comPass){
        console.log('Password not match');
    } else{
        // account create !!
        console.log(app)
    }
}

