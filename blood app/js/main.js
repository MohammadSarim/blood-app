// var overlay = document.getElementById('overlay');
// setInterval(load, 3000)


//     function load () {
        
        
//         // document.body.removeChild(overlay);
//         document.querySelector('div').style.display = 'none';
//     }
  
// *****************************************************************************************************************************

// Animations init
new WOW().init();
// *******************************************************************************************************************************
// var home = document.getElementById('targetHomeBtn').style.display ='none';
var provider = new firebase.auth.GoogleAuthProvider();


function googelSignIn(){
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        var targetHomeBtn = document.getElementById('targetHomeBtn');

        // console.log(user)
        // console.log('token', token);
        console.log('user', user);
        console.log('email', user.email);
        console.log('name', user.displayName);
        localStorage.setItem('userObject', JSON.stringify(user));
        // ...
        
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error.code);
        console.log(error.message);
        
        // ...
        
      })
    }
    
    // function objData(){
    // let a = document.getElementById('objData');
    // // a.addEventListener('load' , 
    //     a.innerHTML = user.email;
    // }
    
    // *******************************************************************************************************************************
    // let targetBtn = document.getElementById('target');
    let targetBtn =  document.getElementsByClassName('targetbloodGroup')
    let bloodGroup = document.getElementById('bloodGroup');
    // targetBtn.addEventListener('click', 
    for(let i = 0 ; i<targetBtn.length; i++){
      
        
        targetBtn[i].addEventListener('click',    function blood(){ 
          
          bloodGroup.innerHTML = this.innerHTML;
          // console.log(this);
          
          
          // console.log(targetBtn);
          
        })
      }
    //  console.log( bloodGroup.innerText  = targetBtn);
  // )
  
  
// *******************************************************************************************************************************
// for hide content

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', function h(){
  //   btn1.style.display = 'none';
  // } )
  
  // *******************************************************************************************************************************
  
  // window.addEventListener('load', 
// function chUer(){
  //     let targetHome = document.getElementById('targetHomeBtn');
  //     let flag = false;
  
  //     if(flag === true){
    
    //       targetHome.style.visibility = 'visible';
//     }
//     else{
  //       targetHome.style.visibility = 'hidden';
  
  //     }
  
  // })
  
  // *******************************************************************************************************************************
  const auth = firebase.auth()
  const firebaseDb = firebase.database()
  
  
  // post  function
  function post() {
      let postName = document.getElementById('PostName').value;
      let postNumber = document.getElementById('postNumber').value;
      let postBottle = document.getElementById('postBottle').value;
      let postBloodGroup = document.getElementById('postBloodGroup').value;
        // console.log(postName, postNumber,postBottle,postBloodGroup);
         let postErrorName =  document.getElementById('postErrorName');
         let postErrorNumber = document.getElementById('postErrorNumber');
          let postErrorBottles = document.getElementById('postErrorBottles');
        let postErrorBloodGroup = document.getElementById('postErrorBloodGroup');


  
        if(postName.length >= 3 ){
          postErrorName.style.color = '#2BBBAD'
        postErrorName.innerHTML = 'Good!'
            
        }
        
          else 
          
           { postErrorName.style.color = '#ffbb33'
           postErrorName.innerHTML = 'Name must be 3 characters!'
           return false
          
          }

        if(postNumber.length === 11   ){
          postErrorNumber.style.color = '#2BBBAD'
          postErrorNumber.innerHTML = 'Good!'
        }
        else{
          postErrorNumber.style.color = '#ffbb33'
          postErrorNumber.innerHTML = 'numbers must be 11 '
          return false
        }
        
        if(!postBottle === "" ){
          alert('good');
          postErrorBottles.style.color = '#2BBBAD'
          postErrorBottles.innerHTML = 'Good!'
        }
        else{
        //  alert('d');
        
          postErrorBottles.style.color = '#ff4081'
          postErrorBottles.innerHTML = "Select any one"
        }


      }
    
    // else{

    // }
    //   // if (name === '' || name === " ") {
      //       // swal({
        //           // title: "Warning!",
  //           // text: "Please enter you name.",
  //           // icon: "warning",
  //       // });
  //   }
  //   else if (password.length < 6) {
    //       swal({
  //           title: "Warning!",
  //           text: "Please enter atleast 6 number",
  //           icon: "warning",
  //       });
  //   } else {
    //       auth.createUserWithEmailAndPassword(email, password)
//           .then((data) => {
  //               var uid = data.user.uid;
  //               var objData = {
    //                   email: email,
    //                   password : password,
    //                   uid : uid,
//               }
//               console.log('success');
//               console.log('uid', uid);
//               firebaseDb.ref("BloodUsers/" + uid + '/').set(objData)
//                   .then(()=> {
  //                       swal({
    //                           title: "Success!",
    //                           text: "congratulations",
    //                           icon: "success",
    //                       });
    //                       // location = 'index.html'
    //                   })
    //           .catch((error) => {
      //             console.log(error.message)
      //               // Handle Errors here.
      //               swal({
        //                   title: "Warning!",
        //                   text: error.message,
    //                   icon: "warning",
    //               });
    //               // ...
    //           });
    //   }
    // }
    
    // *******************************************************************************************************************************
    
    // Material Select Initialization
    // $(document).ready(function() {
      //     $('.mdb-select').material_select();
      //           })
      //   });
      
      
      // function formRegister(){
        //    let targetRegisterBtnForLink = document.getElementById('targetRegisterBtnForLink').innerHTML = 'Login';
        //    targetRegisterBtnForLink.setAttribute('id' , 'targetLoginBtnForLink' )
        //    let targetLoginBtn = document.getElementById('targetLoginBtn').innerHTML = 'Register';
        // //    targetLoginBtn.setAttribute('id' , 'targetRegisterBtn')
//     let targetLogin=  document.getElementById('targetLogin').innerHTML = 'Register';
//     }


// function changeValueOfSignUp(){
  //     let targetLogin = document.getElementById('targetLogin');
  //     let targetLoginBtn = document.getElementById('targetLoginBtn').style.display='none';
  //     let targetRegisterBtn = document.getElementById('targetRegisterBtn').style.display = "inline";
  //     let password = document.getElementById('password');
  //     let targetRegisterBtnForLink = document.getElementById('targetRegisterBtnForLink').style.display = 'none';
  //     let targetLoginBtnForLink = document.getElementById('targetLoginBtnForLink').style.display = 'inline';
  //     targetLogin.innerHTML =` <div class="text-center ">
//     <h3 class="white-text " id="targetLogin"><i class="fa fa-user white-text"></i> Register:</h3>

// </div>`
// targetLoginBtn.style.display = 'none';

// }

// for hiding register form
// function btnLoad(){
  //     let targetRegisterBtn = document.getElementById('targetRegisterBtn').style.display ="none";
  //     let targetLoginBtnForLink = document.getElementById('targetLoginBtnForLink').style.display = 'none';
  
  // }
  
  // *******************************************************************************************************************************
  // *******************************************************************************************************************************
  // *******************************************************************************************************************************
  // *******************************************************************************************************************************
  // *******************************************************************************************************************************
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
  .register('../sw.js')
  .then(function () { console.log('Service Worker Registered'); })
}
// *******************************************************************************************************************************

// home.style.display = 'none';
var obj= localStorage.getItem('userObject')
var userData = JSON.parse(obj) ;
var flag = false;
// if(obj === true ){
//   console.log('good');
  // home.style.display = 'inline';
// }
console.log(userData,"=============");
// var home = document.getElementById('targetHomeBtn').
