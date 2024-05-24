# Basic Idea

Project and Community health focused project to gather, analyse and display data about the current and future health (or 'quality') of FOSS projects, incorporating more meaningful types of metrics, such as those related to community engagement, diversity/inclusivity and liveliness, as well as security and licensing considerations.
This adds important value about projects that companies and users are evaluating by preventing them from adopting a dead project or one that might be rug-pulled via licensing or that has a hostile maintainer or community.

## Key components (outcomes & deliverables, use cases / features)

* Vision (document - some more [init] details https://github.com/ethb3rlin/find-a-team/issues/69)
    * Quickly & easily asess and discover healthy FOSS projects
    * Enables developers, companies and users to use / contribute to FOSS more quickly, impactfully, and sustainably.
* Data Exploration / Research
    * Data types / metrics, e.g. basic #PR stats, but also last commit, 'sentiment', etc
    * Exploring crawling / extraction?
    * Data infrastructure e.g. Blockchain (Unigrid
* Implementation
    * Functions
        * Sorted table ('leaderboard') of (Web3) FOSS Projects
        * Aggregate 'Health' score
        * Specific metrics (TBD - see 'study' above)
        * Filters and/or 'weighting' (update 'Health' & sorting in real time) / search / compare?
        * ...?
    * Backend
        * flask?
        * sqlite/postgres (central db)
        * Future? (see also 'study' above): OrbitDB / IPFS / Unigrid
    * Frontend / Design (mockups?)
        * any suggestions?
        * Local/distributed DB?
* Presentation

# Data

* Option 1) - crawl everything ourselves
* Option 2) - use existing data
    * chaoss api https://ai.chaoss.io/api/unstable/repos
    * red-flag-checker
    * github-api (unauthenticated has rate limits)
    * ossf scorecard
    * => combine into one or several aggregate metrics
* Option 3) - use only one of the above
* Option 4) - Something else

### Sources
* Github
    * pygithub lib
* Gitlab
* Other git sources
* https://ossinsight.io/docs/api/list-issue-creators (provides api without api key to retrive github data around repos)

For MVP: Existing Github dataset

## Metrics


* Basic git(hub/lab/other forge) info
basic aggregate metrics - score from 0-10, 10 is best
* enrich with red flag checker
    * red flags: CLA mention -1 / no CLA found +1 / no license or similar -1 / last commit older than 1 year -1 / only commits by one persion -1
    * yellow flag: main dev more than 75 % of contrib -0.5 / last human commit more than 90 days -0.5 / last human commit more than a year, but newer ones by bots -0.5
    * green flags:
        * DCO present (+1) / DCO mentioned in PR +1 / inbound=outbound mentioned +1 / contribution by multiple commiters +1 / last human commit less than 90 days old
* enrich with chaoss metrics
* OSSF scorecard - https://github.com/ossf/scorecard?tab=readme-ov-file#what-is-scorecard
* Future: sentiment analysis of issues / issue comments

* chaoss metrics overview https://docs.google.com/spreadsheets/d/1fThfrJzME-dWkGdIK2hoP4GzNNsDWQEZ53V8xhn1frM/edit#gid=1939338892

### Existing Projects / Inspiration
* CHAOSS [https://metrix.chaoss.io/](https://metrix.chaoss.io/) [https://ai.chaoss.io/repos/views/repo/1](https://ai.chaoss.io/repos/views/repo/1)
* red-flags https://github.com/dbsystel/oss-red-flag-checker
* https://chaoss.biterg.io/app/dashboards#/view/Git
    * The checker looks for the following data in remote repositories:
        * CLA (Contributor License Agreement) mentioned in files and pull requests
        * DCO (Developer Certificate of Origin) mentioned in files and pull requests
        * inbound=outbound mentioned in files
        * Existence of LICENSE/COPYING file
        * Human and bot contributors to the project (based on Github stats)
        * Last commits made by humans and bots
    * Red flags:
        * CLA mentioned in README or CONTRIBUTING files
        * CLA as part of pull request actions/statuses
        * No LICENSE/COPYING file in the repository
        * The project only contains contributions by one person
        * The last commit is more than 1 year old

    * Yellow flags:

        * The project's main developer made more than 75% contributions than the next 10 most active contributors
        * The last human commit is more than 1 year old but there have been newer commits made by bots (like dependabot or renovate)
        * The last human commit is more than 90 days old

    * Green flags:

        * DCO mentioned in README or CONTRIBUTING files
        * DCO as part of pull request actions/statuses
        * inbound = outbound mentioned in README or CONTRIBUTING files
        * The project has an acceptable contribition distribution by multiple active developers
        * The last human commit is less than 90 days old

* try to avoid alert fatigue and not to encourage "normalization of deviance"
* if 90 % of packages fail, is it a useful test?
* survey of FOSS quality tests based on how many top-1000 packages fail the test? (longer term research) (because those are actionable)

In other words, if 90% of packages fail a test, that's not a useful test. And AFAICT, that's the case with. most "quality" tests we have.

* CHAOSS Crawler
    * https://github.com/chaoss/augur
* OpenSauced (advertising as meant for finding projects to contribute to) [https://opensauced.pizza/](https://opensauced.pizza/)
* https://github.com/ossf/scorecard?tab=readme-ov-file#what-is-scorecard
* Metadata Dataset: https://www.kaggle.com/datasets/pelmers/github-repository-metadata-with-5-stars/download?datasetVersionNumber=9
* Rich filters & dataset (Dutch): https://tweakers.net/smartphones/vergelijken/

## Database Structure

General
* uuid / id
* owner
* project name
* project org
* repo url
* stars
* PRs / pullRequests
* forks
* watchers
* isFork
* isArchived
* languages
* languageCount
* topics
* topicCount
* diskUsageKb',
* issues
* description
* primaryLanguage
* createdAt',
* pushedAt
* defaultBranchCommitCount
* license
* assignableUserCount
* nameWithOwner
* parent'

## Database Structure

## Crawler / Extractor

* TBD

## UX

* questionnaire to find out what users' preferences are

# Design


