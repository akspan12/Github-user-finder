class Github{
  constructor(){
    this.client_id = '31c8d86a380b5663c18c';
    this.client_secret = '540938ce2cf3a63b73f907b811f366d57c25e735';
    this.repos_count = 5;
    this.sort = 'created:asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}