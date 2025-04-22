# GitHub User Profile Search

A sleek and responsive GitHub user search app built with **Next.js** and **TypeScript**. Users can search for any GitHub username and instantly view their profile, including avatar, bio, public repositories, and followers — all powered by the GitHub public API.

## Features
- Search for a GitHub user by username.
- Displays user avatar, bio, repositories count, and followers count.
- Shows error message if user is not found.
- Fully responsive for both desktop and mobile screens.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Majeedatwahab/github-user-search.git
   ```

2. Navigate to the project folder:

   ```bash
   cd github-user-search
   ```
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

  
## Technologies Used
1. React (with functional components)
2. Next.js (for server-side rendering and routing)
3. TypeScript (for static typing)
4. TailwindCSS (for styling)
5. GitHub API (for fetching user data)

## Thought Process
The goal was to build a clean, modern, and intuitive UI that lets users search for any GitHub profile and get the most important data at a glance. I focused on keeping the component structure clean, using hooks for state management, and ensuring smooth user experience with clear loading/error states.



## Challenges Faced
1. Handling API errors gracefully, such as when the user doesn't exist.

2. Ensuring the UI is responsive and looks good on both small and large screens.

3. Implementing smooth state management using React hooks and functional components.

