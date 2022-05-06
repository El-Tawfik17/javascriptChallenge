// this part make Declaration for recuoeration later
const nameShow=document.querySelector('#name');
const emailShow=document.querySelector('#email');
const satisfactionShow=document.querySelector('#satisfaction');
const experienceShow=document.querySelector('#experience');
const boutonShow=document.querySelector('#bouton');
const userName=document.querySelector('#userName');
const userEmail=document.querySelector('#userEmail');
const userComment=document.querySelector('#userComment');
const mySelect=document.querySelector('select');
// this part show users request 
boutonShow.addEventListener('click', () => {
    // this part show users name
    userName.innerText=`${nameShow.value}`;
    // this part show users email
    userEmail.innerText=`${emailShow.value}`;
    // this show users satisfaction value
    userSatisfaction.innerText=`${satisfactionShow.value}`;
    //this part bring you users selected(coach)

     for(var i=0;i<mySelect.options.length;i++){
         if(mySelect.options[i].selected=== true) break;
     }
    //  this part show users Coach
     userCoach.innerText=`${mySelect.options[i].label}`
    //  this part show users experiences
    userComment.innerText=`${experienceShow.value}`;   
});