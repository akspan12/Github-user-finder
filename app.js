const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
  const userText = e.target.value;

  if(userText!==''){
    github.getUser(userText)
    .then(data=>{
      if (data.profile.message === 'Not Found') {
        //alert
        ui.showAlert('User Not Found','alert alert-danger');
      } else {
        //profile 
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else{
    //clear
    ui.clearProfile();
  }
});