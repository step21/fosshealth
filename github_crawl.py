from github import Github

# Access token for authentication
access_token = 'your_access_token_here'
g = Github(access_token)

# Get the public repositories of a user
user = g.get_user('your_username')
repos = user.get_repos()

for repo in repos:
    print(repo.full_name)

def filter_blockchain_repos(repos):
    blockchain_repos = []
    for repo in repos:
        topics = repo.get_topics()
        if 'blockchain' in topics:
            blockchain_repos.append(repo)
    return blockchain_repos