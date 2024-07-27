// Get Elements--
const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');
const mslong = document.querySelector('.msg-long');

// Submit age form
age_form.onsubmit = (e) => {
    e.preventDefault();

    // get fields value
    let name = age_form.querySelector('input[name="name"]');
    let age = age_form.querySelector('input[name="age"]');
    let gender = age_form.querySelectorAll('input[name="gender"]');

    //get gender name
    let gender_name ='';
    gender.forEach(item => {
    if(item.checked){
        gender_name = item.value;
    }
   });
   

   // form validaation 
   if(name.value == '' || age.value == '' || gender_name == ''){
    msg.innerHTML = setAlert('All fields are required');

   }else if(numberCheck(age.value) == false){
    msg.innerHTML = setAlert('Your age is invalid','warning');

   }else{
    mslong.innerHTML = marriageAgeCheck(name.value , age.value, gender_name);
   }



//    //Marrage function
//    let marriage_age = gender_name == 'Male' ? 21 : 18;// Using Tarnary operator 
//    if(gender_name == 'Male'){

//         if(age.value >= marriage_age){
//             mslong.innerHTML = setAlert(`Hi ${name.value} vaiya, your marriage age is okay`,'success');
//         }else{
//             mslong.innerHTML = setAlert(`Hi ${name.value} vaiya, your marriage age is not okay, You have to wait ${marriage_age - age.value} years`);
//         }

//    }else{

    
//     if(age.value >= marriage_age){
//         mslong.innerHTML = setAlert(`Hi ${name.value} apu, your marriage age is okay`,'success');
//     }else{
//         mslong.innerHTML = `Hi ${name.value} apu, your marriage age is not okay, You have to wait ${marriage_age - age.value} years`;
//     }
    
//    }

}
