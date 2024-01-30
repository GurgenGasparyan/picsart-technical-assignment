# Picsart technical assignment

## Overview

This projects contain 3 pages, `Users`, `User details` and `Posts`.

### Posts

In the Posts page, you can view all the posts made by users. Additionally, you have the option to filter the posts by selecting a specific user from the dropdown menu. Furthermore, you can edit or delete posts by clicking on the corresponding action button on the post.

### Users

In the 'Users' page, you can find a table displaying all users. You have the ability to sort the users by 'Id' and 'Name' by clicking on the corresponding column headers. Additionally, you can search for a user by name by typing into the search input located at the top of the table. If you wish to view the details of a user, you can click on the 'View' button at the end of each row, which will navigate you to the 'User Details' page.

### User details

In the User details page you can find the detailed info for the user. As mentioned before you can navigate to this page by clicking view button in the users lists in users page. If you need to go back to the users list you can click back button located on the left of the page.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Architecture](#architecture)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/GurgenGasparyan/picsart-technical-assignment.git
```

2. Install dependencies

```bash
npm i
```

## Usage

### Development

Start the development server

```bash
npm run dev
```

### Production

Build the project

```bash
npm run build
```

Install [Http-Server](https://www.npmjs.com/package/http-server) package or alternative globally

Run the project

```bash
cd dist
http-server
```

Open provided url from http-server

### Analyzing bundles

```bash
npm run analyze
```

### Testing

```bash
npm run test
```

## Folder Structure

`api` - All the methods for fetching data from external API  
`context` - All the providers for contexts, like `ThemeProvider`  
`hooks` - All the hooks to access data from the store  
`models` - All models for entities, like `UserModel`  
`pages` - Main pages of our application  
`store` - All zustand stores for keeping application state
`utils` - All utility helper functions
`components` - All reusable components.

## Architecture

### Routing

Our application contains 3 high level routes, `Users`, Posts, User details.

`Users` => `/`  
`User details` => `/users/:id`  
`Posts` => `/posts`

### State management

We use Zustand for our state management. Each entity has its own store, such as `usersStore` and `postsStore`. We have custom hooks, like `useUsers` or `useTheme`, to select values from these stores without directly accessing them in our components. This approach is implemented to facilitate a smooth migration to another state manager in the future if needed.

### Unit tests

Currently only covers main reusable components in `components` folder.

### Reusable components

You can find all reusable components on `components` folder.

### Optimizations

1. We use `React.lazy` to split our bundle for every high level route.
2. Users data is converted from Array to HashMap to optimize complexity of working with user objects.
3. For production, we utilize `splitChunks` in Webpack to decouple our libraries and source code bundles. This is done to enable caching of the bundles, and the user's browser will only download the bundle containing new changes to the source code. This optimization is particularly effective because libraries are not updated as frequently as the source code.
