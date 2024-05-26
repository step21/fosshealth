# Sources

## opensauced.pizza

```GET https://api.opensauced.pizza/v2/repos/heyxyz/hey?range=90```

Output:

```
{
    "id": 471728341,
    "size": 49820,
    "issues": 59,
    "stars": 22288,
    "forks": 1430,
    "watchers": 22288,
    "subscribers": 105,
    "network": 1430,
    "is_fork": false,
    "is_private": false,
    "is_template": false,
    "is_archived": false,
    "is_disabled": false,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "has_discussions": true,
    "created_at": "2022-03-19T15:01:46.000Z",
    "updated_at": "2024-05-25T20:32:20.643Z",
    "pushed_at": "2024-04-11T14:06:01.000Z",
    "default_branch": "main",
    "node_id": "R_kgDOHB4A1Q",
    "git_url": "git://github.com/heyxyz/hey.git",
    "ssh_url": "git@github.com:heyxyz/hey.git",
    "clone_url": "https://github.com/heyxyz/hey.git",
    "svn_url": "https://github.com/heyxyz/hey",
    "mirror_url": "",
    "name": "hey",
    "full_name": "heyxyz/hey",
    "description": "Hey is a decentralized and permissionless social media app built with Lens Protocol 🌿",
    "language": "TypeScript",
    "license": "GNU Affero General Public License v3.0",
    "url": "https://api.github.com/repos/heyxyz/hey",
    "homepage": "https://hey.xyz",
    "topics": [
        "arweave",
        "blockchain",
        "crypto",
        "dapp",
        "graphql",
        "hacktoberfest",
        "ipfs",
        "irys",
        "lens-protocol",
        "nextjs",
        "polygon",
        "react",
        "social-media",
        "tailwindcss",
        "turborepo",
        "typescript",
        "vite",
        "vitest",
        "wagmi",
        "web3"
    ],
    "votesCount": 0,
    "submissionsCount": 0,
    "stargazersCount": 0,
    "starsCount": 0,
    "opened_issues_count": 6,
    "closed_issues_count": 18,
    "issues_velocity_count": 84,
    "open_prs_count": 231,
    "pr_active_count": 237,
    "merged_prs_count": 224,
    "spam_prs_count": 0,
    "draft_prs_count": 6,
    "closed_prs_count": 18,
    "pr_velocity_count": 1,
    "fork_velocity": 1.1444444444444444,
    "activity_ratio": 1.8051352371299756,
    "contributor_confidence": 0.03897308640330425,
    "health": 1.8051352371299756,
    "last_pushed_at": "2024-05-25T10:06:36.000Z",
    "last_main_pushed_at": "2024-05-25T09:24:10.000Z"
}
```

## github api

getting the top web3 projects

```https://api.github.com/search/repositories?q=topic:web3&per_page=1&page=1```

Output:

```
{
    "total_count": 9500,
    "incomplete_results": false,
    "items": [
        {
            "id": 471728341,
            "node_id": "R_kgDOHB4A1Q",
            "name": "hey",
            "full_name": "heyxyz/hey",
            "private": false,
            "owner": {
                "login": "heyxyz",
                "id": 103585522,
                "node_id": "O_kgDOBiyW8g",
                "avatar_url": "https://avatars.githubusercontent.com/u/103585522?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/heyxyz",
                "html_url": "https://github.com/heyxyz",
                "followers_url": "https://api.github.com/users/heyxyz/followers",
                "following_url": "https://api.github.com/users/heyxyz/following{/other_user}",
                "gists_url": "https://api.github.com/users/heyxyz/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/heyxyz/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/heyxyz/subscriptions",
                "organizations_url": "https://api.github.com/users/heyxyz/orgs",
                "repos_url": "https://api.github.com/users/heyxyz/repos",
                "events_url": "https://api.github.com/users/heyxyz/events{/privacy}",
                "received_events_url": "https://api.github.com/users/heyxyz/received_events",
                "type": "Organization",
                "site_admin": false
            },
            "html_url": "https://github.com/heyxyz/hey",
            "description": "Hey is a decentralized and permissionless social media app built with Lens Protocol 🌿",
            "fork": false,
            "url": "https://api.github.com/repos/heyxyz/hey",
            "forks_url": "https://api.github.com/repos/heyxyz/hey/forks",
            "keys_url": "https://api.github.com/repos/heyxyz/hey/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/heyxyz/hey/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/heyxyz/hey/teams",
            "hooks_url": "https://api.github.com/repos/heyxyz/hey/hooks",
            "issue_events_url": "https://api.github.com/repos/heyxyz/hey/issues/events{/number}",
            "events_url": "https://api.github.com/repos/heyxyz/hey/events",
            "assignees_url": "https://api.github.com/repos/heyxyz/hey/assignees{/user}",
            "branches_url": "https://api.github.com/repos/heyxyz/hey/branches{/branch}",
            "tags_url": "https://api.github.com/repos/heyxyz/hey/tags",
            "blobs_url": "https://api.github.com/repos/heyxyz/hey/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/heyxyz/hey/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/heyxyz/hey/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/heyxyz/hey/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/heyxyz/hey/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/heyxyz/hey/languages",
            "stargazers_url": "https://api.github.com/repos/heyxyz/hey/stargazers",
            "contributors_url": "https://api.github.com/repos/heyxyz/hey/contributors",
            "subscribers_url": "https://api.github.com/repos/heyxyz/hey/subscribers",
            "subscription_url": "https://api.github.com/repos/heyxyz/hey/subscription",
            "commits_url": "https://api.github.com/repos/heyxyz/hey/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/heyxyz/hey/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/heyxyz/hey/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/heyxyz/hey/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/heyxyz/hey/contents/{+path}",
            "compare_url": "https://api.github.com/repos/heyxyz/hey/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/heyxyz/hey/merges",
            "archive_url": "https://api.github.com/repos/heyxyz/hey/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/heyxyz/hey/downloads",
            "issues_url": "https://api.github.com/repos/heyxyz/hey/issues{/number}",
            "pulls_url": "https://api.github.com/repos/heyxyz/hey/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/heyxyz/hey/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/heyxyz/hey/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/heyxyz/hey/labels{/name}",
            "releases_url": "https://api.github.com/repos/heyxyz/hey/releases{/id}",
            "deployments_url": "https://api.github.com/repos/heyxyz/hey/deployments",
            "created_at": "2022-03-19T15:01:46Z",
            "updated_at": "2024-05-25T12:50:09Z",
            "pushed_at": "2024-05-25T10:06:35Z",
            "git_url": "git://github.com/heyxyz/hey.git",
            "ssh_url": "git@github.com:heyxyz/hey.git",
            "clone_url": "https://github.com/heyxyz/hey.git",
            "svn_url": "https://github.com/heyxyz/hey",
            "homepage": "https://hey.xyz",
            "size": 49647,
            "stargazers_count": 22519,
            "watchers_count": 22519,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": false,
            "has_pages": true,
            "has_discussions": true,
            "forks_count": 1465,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 56,
            "license": {
                "key": "agpl-3.0",
                "name": "GNU Affero General Public License v3.0",
                "spdx_id": "AGPL-3.0",
                "url": "https://api.github.com/licenses/agpl-3.0",
                "node_id": "MDc6TGljZW5zZTE="
            },
            "allow_forking": true,
            "is_template": false,
            "web_commit_signoff_required": false,
            "topics": [
                "arweave",
                "blockchain",
                "crypto",
                "dapp",
                "graphql",
                "hacktoberfest",
                "ipfs",
                "irys",
                "lens-protocol",
                "nextjs",
                "polygon",
                "react",
                "social-media",
                "tailwindcss",
                "turborepo",
                "typescript",
                "vite",
                "vitest",
                "wagmi",
                "web3"
            ],
            "visibility": "public",
            "forks": 1465,
            "open_issues": 56,
            "watchers": 22519,
            "default_branch": "main",
            "score": 1
        }
    ]
}
```


## openssf

```docker run -e GITHUB_AUTH_TOKEN=<token> gcr.io/openssf/scorecard:stable --show-details --format=json --repo=https://github.com/ossf/scorecard```

Output:

```
{
    "date": "2024-05-25T20:38:05Z",
    "repo": {
        "name": "github.com/ossf/scorecard",
        "commit": "d99ae690a90ece02d0fd74c3c5875190c4da76d7"
    },
    "scorecard": {
        "version": "v5.0.0-rc2-24-gd99ae690",
        "commit": "d99ae690a90ece02d0fd74c3c5875190c4da76d7"
    },
    "score": 9.6,
    "checks": [
        {
            "details": null,
            "score": 10,
            "reason": "no binaries found in the repo",
            "name": "Binary-Artifacts",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#binary-artifacts",
                "short": "Determines if the project has generated executable (binary) artifacts in the source repository."
            }
        },
        {
            "details": [
                "Info: 'allow deletion' disabled on branch 'main'",
                "Info: 'force pushes' disabled on branch 'main'",
                "Warn: required approving review count is 1 on branch 'main'",
                "Warn: codeowners review is not required on branch 'main'",
                "Info: status check found to merge onto on branch 'main'",
                "Info: PRs are required in order to make changes on branch 'main'"
            ],
            "score": 8,
            "reason": "branch protection is not maximal on development and all release branches",
            "name": "Branch-Protection",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#branch-protection",
                "short": "Determines if the default and release branches are protected with GitHub's branch protection settings."
            }
        },
        {
            "details": null,
            "score": 10,
            "reason": "30 out of 30 merged PRs checked by a CI test -- score normalized to 10",
            "name": "CI-Tests",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#ci-tests",
                "short": "Determines if the project runs tests before pull requests are merged."
            }
        },
        {
            "details": null,
            "score": 5,
            "reason": "badge detected: Passing",
            "name": "CII-Best-Practices",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#cii-best-practices",
                "short": "Determines if the project has an OpenSSF (formerly CII) Best Practices Badge."
            }
        },
        {
            "details": null,
            "score": 10,
            "reason": "all changesets reviewed",
            "name": "Code-Review",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#code-review",
                "short": "Determines if the project requires human code review before pull requests (aka merge requests) are merged."
            }
        },
        {
            "details": [
                "Info: avahi contributor org/company found, kubernetes-client contributor org/company found, inclusivenaming contributor org/company found, IBM contributor org/company found, fosdem-testingautomation contributor org/company found, lockheed martin contributor org/company found, Conservatory contributor org/company found, systemd contributor org/company found, bit-broker contributor org/company found, media-streaming-mesh contributor org/company found, ibm contributor org/company found, helm contributor org/company found, falcosecurity contributor org/company found, systemd-ci-incubator contributor org/company found, dbus-fuzzer contributor org/company found, kubernetes-csi contributor org/company found, lndreviews contributor org/company found, googlers contributor org/company found, google contributor org/company found, todogroup contributor org/company found, ko-build contributor org/company found, chainguard-images contributor org/company found, kubeflow contributor org/company found, ossf contributor org/company found, chainguard-dev contributor org/company found, chainguard contributor org/company found, openclarity contributor org/company found, https://adalogics.com contributor org/company found, metamath contributor org/company found, linux foundation contributor org/company found, kubernetes-nightly contributor org/company found, wolfi-dev contributor org/company found, w3c contributor org/company found, astropy contributor org/company found, adam@adalogics.com contributor org/company found, slsa-framework contributor org/company found, kubernetes-sigs contributor org/company found, cisco-open contributor org/company found, open-feature contributor org/company found, multi-factor-auth-users contributor org/company found, jaegertracing contributor org/company found, distroless contributor org/company found, openvex contributor org/company found, defenseunicorns contributor org/company found, util-linux contributor org/company found, kubernetes contributor org/company found, dexidp contributor org/company found, paycom contributor org/company found, sigstore contributor org/company found, honk-ci contributor org/company found, "
            ],
            "score": 10,
            "reason": "project has 50 contributing companies or organizations",
            "name": "Contributors",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#contributors",
                "short": "Determines if the project has a set of contributors from multiple organizations (e.g., companies)."
            }
        },
        {
            "details": null,
            "score": 10,
            "reason": "no dangerous workflow patterns detected",
            "name": "Dangerous-Workflow",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#dangerous-workflow",
                "short": "Determines if the project's GitHub Action workflows avoid dangerous patterns."
            }
        },
        {
            "details": [
                "Info: detected update tool: Dependabot: .github/dependabot.yml:1"
            ],
            "score": 10,
            "reason": "update tool detected",
            "name": "Dependency-Update-Tool",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#dependency-update-tool",
                "short": "Determines if the project uses a dependency update tool."
            }
        },
        {
            "details": [
                "Info: OSSFuzz integration found",
                "Info: GoBuiltInFuzzer integration found: checks/raw/fuzzing_test.go:179"
            ],
            "score": 10,
            "reason": "project is fuzzed",
            "name": "Fuzzing",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#fuzzing",
                "short": "Determines if the project uses fuzzing."
            }
        },
        {
            "details": [
                "Info: project has a license file: LICENSE:0",
                "Info: FSF or OSI recognized license: Apache License 2.0: LICENSE:0"
            ],
            "score": 10,
            "reason": "license file detected",
            "name": "License",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#license",
                "short": "Determines if the project has defined a license."
            }
        },
        {
            "details": null,
            "score": 10,
            "reason": "30 commit(s) and 10 issue activity found in the last 90 days -- score normalized to 10",
            "name": "Maintained",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#maintained",
                "short": "Determines if the project is \"actively maintained\"."
            }
        },
        {
            "details": [
                "Info: Project packages its releases by way of GitHub Actions.: .github/workflows/goreleaser.yaml:29"
            ],
            "score": 10,
            "reason": "packaging workflow detected",
            "name": "Packaging",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#packaging",
                "short": "Determines if the project is published as a package that others can easily download, install, easily update, and uninstall."
            }
        },
        {
            "details": [
                "Warn: third-party GitHubAction not pinned by hash: .github/workflows/goreleaser.yaml:88",
                "Warn: third-party GitHubAction not pinned by hash: .github/workflows/slsa-goreleaser.yml:47",
                "Info:  56 out of  56 GitHub-owned GitHubAction dependencies pinned",
                "Info:  44 out of  46 third-party GitHubAction dependencies pinned",
                "Info:  25 out of  25 containerImage dependencies pinned",
                "Info:   1 out of   1 goCommand dependencies pinned"
            ],
            "score": 9,
            "reason": "dependency not pinned by hash detected -- score normalized to 9",
            "name": "Pinned-Dependencies",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#pinned-dependencies",
                "short": "Determines if the project has declared and pinned the dependencies of its build process."
            }
        },
        {
            "details": [
                "Info: SAST configuration detected: CodeQL",
                "Info: all commits (30) are checked with a SAST tool"
            ],
            "score": 10,
            "reason": "SAST tool is run on all commits",
            "name": "SAST",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#sast",
                "short": "Determines if the project uses static code analysis."
            }
        },
        {
            "details": [
                "Info: security policy file detected: SECURITY.md:1",
                "Info: Found linked content: SECURITY.md:1",
                "Info: Found disclosure, vulnerability, and/or timelines in security policy: SECURITY.md:1",
                "Info: Found text in security policy: SECURITY.md:1"
            ],
            "score": 10,
            "reason": "security policy file detected",
            "name": "Security-Policy",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#security-policy",
                "short": "Determines if the project has published a security policy."
            }
        },
        {
            "details": [
                "Info: provenance for release artifact: multiple.intoto.jsonl: https://api.github.com/repos/ossf/scorecard/releases/assets/166588008",
                "Info: provenance for release artifact: multiple.intoto.jsonl: https://api.github.com/repos/ossf/scorecard/releases/assets/161822912",
                "Info: provenance for release artifact: multiple.intoto.jsonl: https://api.github.com/repos/ossf/scorecard/releases/assets/131611370",
                "Info: provenance for release artifact: multiple.intoto.jsonl: https://api.github.com/repos/ossf/scorecard/releases/assets/129384784",
                "Info: provenance for release artifact: multiple.intoto.jsonl: https://api.github.com/repos/ossf/scorecard/releases/assets/120644220"
            ],
            "score": 10,
            "reason": "5 out of the last 5 releases have a total of 5 signed artifacts.",
            "name": "Signed-Releases",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#signed-releases",
                "short": "Determines if the project cryptographically signs release artifacts."
            }
        },
        {
            "details": [
                "Info: jobLevel 'actions' permission set to 'read': .github/workflows/codeql-analysis.yml:45",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/codeql-analysis.yml:46",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/docker.yml:33",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/docker.yml:68",
                "Info: jobLevel 'actions' permission set to 'read': .github/workflows/goreleaser.yaml:74",
                "Info: jobLevel permissions set to 'read-all': .github/workflows/goreleaser.yaml:85",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:221",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:330",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:365",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:37",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:143",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:260",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:302",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:95",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/main.yml:172",
                "Info: jobLevel 'contents' permission set to 'read': .github/workflows/publishimage.yml:32",
                "Warn: jobLevel 'packages' permission set to 'write': .github/workflows/publishimage.yml:34",
                "Info: jobLevel permissions set to 'read-all': .github/workflows/slsa-goreleaser.yml:44",
                "Info: jobLevel 'actions' permission set to 'read': .github/workflows/slsa-goreleaser.yml:33",
                "Warn: jobLevel 'checks' permission set to 'write': .github/workflows/verify.yml:24",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/codeql-analysis.yml:37",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/depsreview.yml:18",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/docker.yml:16",
                "Info: topLevel permissions set to 'read-all': .github/workflows/gitlab.yml:17",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/goreleaser.yaml:23",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/integration.yml:24",
                "Info: topLevel 'pull-requests' permission set to 'read': .github/workflows/lint.yml:12",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/lint.yml:11",
                "Info: topLevel 'contents' permission set to 'read': .github/workflows/main.yml:18",
                "Info: topLevel permissions set to 'read-all': .github/workflows/publishimage.yml:17",
                "Info: topLevel permissions set to 'read-all': .github/workflows/scdiff.yml:6",
                "Info: topLevel permissions set to 'read-all': .github/workflows/scorecard-analysis.yml:11",
                "Info: topLevel permissions set to 'read-all': .github/workflows/slsa-goreleaser.yml:8",
                "Info: topLevel permissions set to 'read-all': .github/workflows/stale.yml:20",
                "Info: topLevel permissions set to 'read-all': .github/workflows/verify.yml:19"
            ],
            "score": 10,
            "reason": "GitHub workflow tokens follow principle of least privilege",
            "name": "Token-Permissions",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#token-permissions",
                "short": "Determines if the project's workflows follow the principle of least privilege."
            }
        },
        {
            "details": [
                "Warn: Project is vulnerable to: GO-2022-0646"
            ],
            "score": 9,
            "reason": "1 existing vulnerabilities detected",
            "name": "Vulnerabilities",
            "documentation": {
                "url": "https://github.com/ossf/scorecard/blob/d99ae690a90ece02d0fd74c3c5875190c4da76d7/docs/checks.md#vulnerabilities",
                "short": "Determines if the project has open, known unfixed vulnerabilities."
            }
        }
    ],
    "metadata": null
}```

