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

Parent repo: [code-collabo/node-mongo](https://github.com/code-collabo/node-mongo)

#

This is the manual download option for the API boilerplate templates generated by [@code-collabo/node-mongo-cli](https://github.com/code-collabo/node-mongo-cli). 

#
**Features:**
* Three (3) API boilerplate templates to choose from i.e. typescript, es module, or common js templates (a.k.a. ts, esm, cjs) for your nodejs mongoDB development, depending on your preference.
* API boilerplate templates now use the MVC architecture pattern i.e. separated route, model, controller, and service files.
* Development environment already set up with @babel (for esm template only), eslint, and server watch.
* The default connection setup type is MongoDB Atlas. You get to choose if you want to use Atlas or switch to the Local mongoDB connection setup type, and you also get to save your preferred connection setup type for when next you run the automated development server.
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
- Ensure you have internet connection
- Have a monogDB atlas cluster set up in the cloud
- Get your atlas mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT_ATLAS` environment variable to your preferred port number in the .env file
- Add your atlas mongoDB uri string to the `MONGODB_ATLAS_URI` environment variable in the .env file

#### Step 4
Start the automated development server and choose ATLAS connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) development server alternative for connection to mongoDB atlas:
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
- Change `PORT_LOCAL` environment variable to your preferred port number in the .env file
- Add your local mongoDB uri string to the `MONGODB_LOCAL_URI` environment variable in the .env file

#### Step 4
Start the automated development server and choose LOCAL connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) development server alternative for connection to local mongoDB:
````
npm run dev:local
````

## Automated development server and commands
- `npm run dev` is the command that starts the automated development server. It prompts you to choose your preferred connection setup type the first time you use it, and saves the chosen connection setup type for every other time you come back to use it. It also automatically installs or set up the db and server files for the chosen connection setup type.
- `npm run dev:restore` resets the automated development server back to first time usage condition i.e. it removes your previously saved connection setup type and the development server will now assume that you are a first timer. After using this command, you will now have the option to set your preferred connection type again the next time you start the server with the `npm run dev` command.
- `npm run dev:change` is useful for when you are not a first time user and want to change your connection set up type without restoring the automated development server to first time usage condition. It will prompt you to choose your connection setup type, but it will not install the db and server files for the chosen connection setup type.

## Testing with the demo setup
A demo setup (i.e. collection, endpoints etc) already exists to help you get started with using the node-mongo API boilerplate templates. Running the demo setup will help you understand how to create your own collection endpoints etc. The API design and API call requests and responses sections below will help you understand how the demo setup works.

## API design

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|GET /demo|Get all demo items in the database| No Request Body |
|POST /demo|Create/add new demo item to the database|name, age|
|GET /demo/:demoId|Get a demo item stored in the database by its ID|No Request Body|
|PATCH /demo/:demoId|Update the value of one property of an already existing demo item in the database, using the demo item's ID|propName, value|
|PUT /demo/:id|Update all properties of an existing demo item in the database, using the demo item's ID|name, age|
|DELETE /demo/:demoId|Delete a demo item from the database, using the demo item's ID|No request body|

## API call requests and responses

<details>
<summary>GET /demo</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "count": number,
    "items": [
        {
            "_id": "string",
            "name": "string",
            "age": number,
            "request": {
                "type": "string",
                "url": "string"
            }
        },
        // etc.
    ]
}
</pre>
</details>



<details>
<summary>POST /demo</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "name": "string",
    "age": number
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "newItem": {
        "_id": "string",
        "name": "string",
        "age": number,
        "request": {
            "type": "string",
            "url": "string"
        }
    }
}
</pre>
</details>



<details>
<summary>GET /demo/:demoId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "_id": "string",
    "name": "string",
    "age": number,
    "request": {
        "type": "string",
        "description": "string",
        "url": "string"
    }
}
</pre>
</details>



<details>
<summary>PATCH /demo/:demoId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
[
    { "propName": "string", "value": "string" }
]
</pre>

OR

<pre>
[
    { "propName": "string", "value": number }
]
</pre>
i.e. propName can be string "name" or "age". Value is a string when name is the propName, while value is a number when age is the propName.
<br/>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "request": {
        "type": "string",
        "description": "string",
        "url": "string"
    }
}
</pre>
</details>



<details>
<summary>PUT /demo/:id</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "name": "string",
    "age": number
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "request": {
        "type": "string",
        "description": "string",
        "url": "string"
    }
}
</pre>
</details>



<details>
<summary>DELETE /demo/:demoId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "request": {
        "type": "string",
        "description": "string",
        "url": "string",
        "body": {
            "name": "string",
            "age": "string"
        }
    }
}
</pre>
</details>

## Documentation
See the links to the official documentation of the node-mongo project and community building it below:
- [Node Mongo documentation](https://code-collabo.gitbook.io/node-mongo-v2.0.0)
- [Code Collabo documentation](https://code-collabo.gitbook.io/community-doc-v1.0.0)

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
