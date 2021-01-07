class GitHub{
    constructor(){
        this.client_id='4b47e80d51329c429c37';
        this.client_secret ='3a65560a01ddb3d2f2c7190fdba8c99866e0fbce';
        this.repos_count= 5;
        this.repos_sort ="created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos= await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}