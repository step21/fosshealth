from db_utils import *
from config import *
import json

# Read the repo_metadata dataset to have base data (scraping ourselves would take too long with rate limiting)
with open('repo_metadata.json', 'r') as file:
    data = json.load(file)

# Create the database connection
conn = create_connection(sqlite_db_file)

q = """CREATE TABLE IF NOT EXISTS repo_metadata (id INTEGER PRIMARY KEY, owner TEXT, repo_name TEXT, repo_stars INTEGER, repo_forks INTEGER, repo_watchers INTEGER, is_fork BOOLEAN, is_archived BOOLEAN, languages TEXT, language_count INTEGER, topics TEXT, topic_count INTEGER, disk_usage_kb, pull_requests INTEGER, issues INTEGER, description TEXT, primary_language TEXT, created_at TEXT, pushed_at, TEXT, default_branch_commit_count INTEGER, assignable_user_count INTEGER, code_of_conduct TEXT, forking_allowed BOOLEAN, name_and_owner TEXT, parent TEXT);"""

execute_query(conn, q)

print(data[1])
number_records = 0

for record in data:
    number_records += 1
    print(f""">>> {number_records} of {len(data)} records processed""")
    qr = f"""INSERT INTO repo_metadata (id, owner, repo_name, repo_stars, repo_forks, repo_watchers, is_fork, is_archived, languages, language_count, topics, topic_count, disk_usage_kb, pull_requests, issues, description, primary_language, created_at, pushed_at, default_branch_commit_count, assignable_user_count, code_of_conduct, forking_allowed, name_and_owner, parent) VALUES (number_records, '{record['owner']}', '{record['name']}', {record['stars']}, {record['forks']}, {record['watchers']}, {record['isFork']}, {record['isArchived']}, '{record['languages']}', {record['languageCount']}, '{record['topics']}', {record['topicCount']}, {record['diskUsageKb']}, {record['pullRequests']}, {record['issues']}, '{record['description']}', '{record['primaryLanguage']}', '{record['createdAt']}', '{record['pushedAt']}', {record['defaultBranchCommitCount']}, '{record['assignableUserCount']}', '{record['codeOfConduct']}', {record['forkingAllowed']}, '{record['nameWithOwner']}', '{record['parent']}')"""
    execute_query(conn, qr)

# close the database connection
conn.close()

