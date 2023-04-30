# @code-collabo/node-mongo-api-boilerplate-templates

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://code-collabo.gitbook.io/node-mongo-v2.0.0/contribution-guide/node-mongo) [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/code-collabo/node-mongo-api-boilerplate-templates/blob/develop/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/code-collabo/node-mongo?color=red)](https://github.com/code-collabo/node-mongo/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/code-collabo/node-mongo-api-boilerplate-templates?color=goldenrod)](https://github.com/code-collabo/node-mongo-api-boilerplate-templates/pulls)

#

> **Note** 
> 
> node-mongo projects require you to have Node.js or Node Version Manager (NVM) installed on your computer 


#

**Supported Node.js versions:** Node.js v12.x to v18.x

#

Parent repo: [code-collabo/node-mongo](https://github.com/code-collabo/node-mongo)

#

This is the manual download option for the API boilerplate templates generated by [@code-collabo/node-mongo-cli](https://github.com/code-collabo/node-mongo-cli). 

#
**Features:**
* Three (3) API boilerplate templates i.e. typescript, es module, or common js (a.k.a. ts, esm, cjs) templates for your nodejs mongoDB development, depending on your preference.
* API boilerplate templates now use the MVC architecture pattern i.e. separated route, model, controller, and service files.
* Development environment already set up with @babel (for esm template only), eslint, and server watch.
* The default connection setup type is MongoDB Atlas. But you get to choose if you want to use it or switch to the Local mongoDB connection setup type.
* Improved user experience with the newly added walk-through prompts in the terminal: quick to setup, easy to use, with automated and improved user support.

#

> **Note** 
> 
> Change directory (i.e. cd) into any of the 3 folders ts, esm or cjs before installing or running the API as shown below.

#

## Connection option 1: Running the development server (mongoDB Atlas)
#### Step 1 
Install dependencies:
````
npm install
````

#### Step 2
- Have a monogDB atlas cluster set up in the cloud
- Get your atlas mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT` environment variable from `8080` to preferred port number in the .env file
- Add your atlas mongoDB uri string to the `MONGODB_ATLAS_URI` environment variable in the .env file

#### Step 4
Start dev server for connection to mongoDB atlas:
````
npm run dev:atlas
````


## Connection option 2: Running the development server (mongoDB local)
#### Step 1 
Install dependencies:
````
npm install
````

#### Step 2
- Have mongoDB installed and running on your computer
- Get your local mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT` environment variable from `8080` to preferred port number in the .env file
- Add your local mongoDB uri string to the `MONGODB_LOCAL_URI` environment variable in the .env file

#### Step 4
Start dev server for connection to local mongoDB:
````
npm run dev:local
````

<!--
#
> TODO 1: Fix further help and contributors sections
> TODO 2: Fix Contributors welcome badge link
-->

## Documentation
See the links to the official documentation of the node-mongo project and community building it below:
- [Node Mongo documentation](https://code-collabo.gitbook.io/node-mongo-v2.0.0)
- [Code Collabo documentation](https://code-collabo.gitbook.io/doc/)

## Contributors ✨

Thanks to these amazing contributors to the node-mongo-api-boilerplate-templates project. This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. See [emoji key](https://allcontributors.org/docs/en/emoji-key). Contributions of any kind welcome!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/Ifycode"><img src="https://avatars.githubusercontent.com/u/45185388?v=4?s=100" width="100px;" alt="@Ifycode"/><br /><sub><b>@Ifycode</b></sub></a><br /><a href="https://github.com/code-collabo/node-mongo-api-boilerplate-templates/commits?author=Ifycode" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://allcontributors.org"><img src="https://avatars.githubusercontent.com/u/46410174?v=4?s=100" width="100px;" alt="All Contributors"/><br /><sub><b>All Contributors</b></sub></a><br /><a href="#infra-all-contributors" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/Dkingofcode"><img src="https://avatars.githubusercontent.com/u/91491738?v=4?s=100" width="100px;" alt="David Oladepo"/><br /><sub><b>David Oladepo</b></sub></a><br /><a href="https://github.com/code-collabo/node-mongo-api-boilerplate-templates/commits?author=Dkingofcode" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/samuko-things"><img src="https://avatars.githubusercontent.com/u/75276934?v=4?s=100" width="100px;" alt="Obiagba Samuel"/><br /><sub><b>Obiagba Samuel</b></sub></a><br /><a href="https://github.com/code-collabo/node-mongo-api-boilerplate-templates/commits?author=samuko-things" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://www.blessingolaleye.xyz/"><img src="https://avatars.githubusercontent.com/u/70102539?v=4?s=100" width="100px;" alt="Olaleye Blessing"/><br /><sub><b>Olaleye Blessing</b></sub></a><br /><a href="https://github.com/code-collabo/node-mongo-api-boilerplate-templates/commits?author=Olaleye-Blessing" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
