1. Install React Router
    First, if you haven't already installed react-router-dom, you can do so using npm or yarn:

    bash
    Copy code
    npm install react-router-dom
    # oryarn add react-router-dom


2. Create the Components
   create three components that we will navigate between: Home, About, and Contact.


3. Set Up Routing in Your App
    In the main App.js file, set up the routing using react-router-dom.


4. Run Your App
    Now, when you run your application, you should be able to navigate between the Home, About, and Contact pages using the links.
    Summary:
    	• <Router> wraps your entire application.
    	• <Link> is used to create navigation links.
    	• <Routes> contains all the routes, with each <Route> defining a specific path and the component to render.
    	• path="/" defines the root path (Home page), and other paths like /about and /contact correspond to the About and Contact pages.
    This setup gives you a basic React Router configuration for navigating between different components/pages in your React application.

