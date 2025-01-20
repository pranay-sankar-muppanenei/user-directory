###User Management App
  This is a React.js application that fetches and displays a list of users from an API. 
  It includes features like searching, filtering, sorting, and navigating between pages to view detailed user information.

###Features
  ###Home Page
    > Fetches and displays a list of users from the JSONPlaceholder API.
    > Displays user details including name, email, and city.
    > Search bar to filter users by their name.
    > Sorting functionality to arrange users alphabetically (A-Z or Z-A).
    > Clicking on a user redirects to their detail page(User Card).

###User Card Page
    Displays detailed information about a user, including:
      > Name
      > Email
      > Phone
      > Company Name
      > Website
      > Includes a "Go Back" button to navigate back to the home page.

###Additional Features
  > State Management: Implemented using React Context API.
  > Error Handling: Displays error messages for any issues during data fetching.
  > Loading State: Shows a loading indicator while fetching data.
  > Responsive Design: Fully responsive layout for both desktop and mobile devices.

###Bonus Features
  > Implementd Dark/Light mode toggle.
  >Pagination for better user navigation.

###Technologies Used
  > React.js: Functional components with hooks.
  > React Router: For navigation between pages.
  > CSS Styling framework or custom CSS and Styled Components.

###JSONPlaceholder API: Used as the data source.
  > API: https://jsonplaceholder.typicode.com/users

###Installation and Setup
  > Clone the repository:
    git clone <repository-url>
  > Navigate to the project folder:
    cd jobbyApp
  > Install dependencies:
    npm install
  > Start the development server:
    npm start
  > Open the app in your browser:
    http://localhost:3000


###Project Structure

    src/
    ├── components/
    │   ├── HomePage                // Home page component
            |-index.js
            |-index.css
            |-styledComponent.js        
    │   ├── User.js                 // User display in Home
            |-index.js
            |-index.css
            |-styledComponent.js   
    │   ├── NotFound                // NotFound component
            |-index.js
            |-index.css
            |-styledComponent.js
    │   ├── UserCard.js             // User detailed card 
            |-index.js
            |-index.css
            |-styledComponent.js
    ├── context/
    │   ├── LanguageContext.js      // React Context API for state management
    ├── styles/
    │   ├── index.css               // Main CSS file in every folder
    ├── utils/
    │   ├── api.js                  // API handling logic
    │   ├── helpers.js              // Sorting and utility functions
    └── App.js                      // Main application component