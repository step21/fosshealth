all data has as reference point a repository on a source code forge
# base data
(not the metrics we care about, but useful for context etc)

* owner
* name
* stars
* forks
* watchers
* is_fork
* is_archived
* languages
* language_count
* topics
* topic_count
* disk_usage_kb
* pullrequests
* issues
* description
* primary_language
* created_at
* pushed_at
* default_branch_commit_count
* license
* assignable_user_count
* code_of_conduct
* forking_allowed
* name_with_owner
* parent

// LEGEND: 0 IGNORE (for now) + INCLUDE (but w/optional display) ++ SHOW (by default) 
# fosshealth - opinionated metrics
# chaoss based
### TODO: add aggregates etc
### Note: Only most relevant to fosshealth at least at first glance are included - and if not otherwise specified, these are all GET requests
### utility (omitted)
### 0risk
*  0http://ai.chaoss.io/api/unstable/metadata/repo_info 
(could be used to update base data though)
*  +average-issue-resolution  http://ai.chaoss.io/api/unstable/repos/:repo_id/average-issue-resolution-time 
*  0cii best practices   http://ai.chaoss.io/api/unstable/repos/:repo_id/cii-best-practices-badge
*   +http://ai.chaoss.io/api/unstable/repos/:repo_id/committers
*    +http://ai.chaoss.io/api/unstable/repos/:repo_id/license-coverage
*      0http://ai.chaoss.io/api/unstable/repos/:repo_id/license-declared
*    0http://ai.chaoss.io/api/unstable/repo-groups/:repo_id/license-count
### experimental
*     +http://ai.chaoss.io/api/unstable/repo-groups/:repo_id/annual-lines-of-code-count-ranked-by-repo-in-repo-group
*   (shorter time intervals, maybe small boxchart?)
*   +http://ai.chaoss.io/api/unstable/repos/:repo_id/issue-comments-mean
*   (compare against forks / lines of code?)
*    0http://ai.chaoss.io/api/unstable/repos/:repo_id/issue-comments-mean-std
*      ++http://ai.chaoss.io/api/unstable/repos/:repo_id/pull-request-acceptance-rate
*    ++http://ai.chaoss.io/api/unstable/repos/:repo_id/pull-requests-closed-no-merge
*     +http://ai.chaoss.io/api/unstable/repos/:repo_id/top-committers  (top comitters in % (0-1))
*   ++http://ai.chaoss.io/api/unstable/repo-groups/:repo_id/abandoned-issues
### evolution
* +nr of commits during a period   http://ai.chaoss.io/api/unstable/repos/:repo_id/code-changes
*     ++http://ai.chaoss.io/api/unstable/repos/:repo_id/contributors
*  +http://ai.chaoss.io/api/unstable/repos/:repo_id/contributors-new
*   ++http://ai.chaoss.io/api/unstable/repos/:repo_id/issue-backlog
*   (ratio maybe, e.g. open/closed?)
* repo_group_id    +http://ai.chaoss.io/api/unstable/repos/:repo_id/issue-participants
* (ratio % of contributors participating in issues?)
*     +http://ai.chaoss.io/api/unstable/repos/:repo_id/issue-throughput
*  ++http://ai.chaoss.io/api/unstable/repos/:repo_id/issues-active
*   ++http://ai.chaoss.io/api/unstable/repos/:repo_id/issues-closed-resolution-duration
*    0http://ai.chaoss.io/api/unstable/repos/:repo_id/issues-first-time-closed
*    (TODO - aggregate "first time" issues as accessibility/friendliness score?)
*     0http://ai.chaoss.io/api/unstable/repos/:repo_id/issues-first-time-opened
*  +http://ai.chaoss.io/api/unstable/repos/:repo_id/issues-maintainer-response-duration
*    ++http://ai.chaoss.io/api/unstable/repos/:repo_id/issues-open-age
*     0http://ai.chaoss.io/api/unstable/repos/:repo_id/pull-requests-merge-contributor-new
*  +http://ai.chaoss.io/api/unstable/repos/:repo_id/review-duration
*   ++http://ai.chaoss.io/api/unstable/repos/:repo_id/reviews-accepted
*    +http://ai.chaoss.io/api/unstable/repos/:repo_id/reviews-declined
*     +http://ai.chaoss.io/api/unstable/repo-groups/:repo_id/issue-duration
*  ++http://ai.chaoss.io/api/unstable/repos/:repo_id/releases
*  (frequency)
*   0http://ai.chaoss.io/api/unstable/repos/:repo_id/repo-messages
(### as value)
* ++http://ai.chaoss.io/api/unstable/repos/:repo_id/watchers-count
*  ++http://ai.chaoss.io/api/unstable/repos/:repo_id/stars-count
### visualizations
(omitted)
### complexity
(probably not relevant for fosshealth, or not sure how)
*  -http://ai.chaoss.io/api/unstable/complexity/project_lines
*   -http://ai.chaoss.io/api/unstable/complexity/project_file_complexity
*    -http://ai.chaoss.io/api/unstable/complexity/project_files
*     +http://ai.chaoss.io/api/unstable/complexity/project_languages
### login
(not sure for what parts this is needed, not for get requests)
*  post  -http://ai.chaoss.io/api/unstable/user/session/generate
    ```
{

    "status": "Validated",
    "username": "string",
    "access_token": "string",
    "refresh_token": "string",
    "token_type": "Bearer",
    "expires": 0

}
```
* post  http://ai.chaoss.io/api/unstable/user/session/refresh 
```
{
  "status": "Validated",
  "access_token": "string",
  "refresh_token": "string",
  "expires": 0
}
```

# OSSF Security Scorecard
* get scorecard results - api_url /projects/{platform}/{org}/{repo} such as https://api.securityscorecards.dev/projects/github.com/ethereum/eth-keyfile

# red-flag-score
* => 
(calculated by running red flag-checker on github repo and calculating the results into a score from 0 to 1)
based on
* cla_mention -1
* no cla found +1
* no_license -1
* last_commit_older_year -1
* only_commits_by_one_person -1
* main_dev_75_percent -0.5
* last_human_commit_older_90days -0.5
* last_human_commit_older_year_but_bots -0.5
* sum up and divide by 8?

# ossf security scorecard
* aggregate score
* or also use other scores? / potentially only as "details/not directly visible"

opensource.observer?
