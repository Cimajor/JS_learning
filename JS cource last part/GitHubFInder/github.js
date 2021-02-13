class GitHub{
    constructor(){
        this.client_id = "88a0aaf57c3033df6112"
        this.client_secret = "4a8edd1de54c446f23e52c77a08a28d9f97ab85c"
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profileData = await profileResponse.json()
        const repos = await profileRepo.json()

        return{
            profile: profileData,
            repos: repos
        }
    }


}