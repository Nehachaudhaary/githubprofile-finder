// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup' , (e) => {
//  Get input text
const userText = e.target.value;
if(userText!== ""){
    // Make http call
    github.getUser(userText)
    .then(data => {
        if(data.profile.message === 'Not Found'){
            // Show alert
            ui.showAlert("user not found", "alert alert-danger");
        }
        else{
            // show profile
            ui.showProfile(data.profile);
            // show repos
            ui.showRepos(data.repos);

        }
    })
} else{
    // Clear profile
    ui.clearProfile();
}
});