import React from 'react';

const Home =()=>{
    return(
        <>This is Home page<br/>
        
        So far, our site is only navigable by typing the URLs. To add clickable links to the site, we use the Link element from React Router and set up a new Navbar component. Once again, don't forget to import the new component into the app.

        Now add a Link for each component in the app and use to="URL" to link them.
        
        {/* function Navbar() {
          return (
            <div>
              <Link to="/">Home </Link>
              <Link to="/about">About Us </Link>
              <Link to="/shop">Shop Now </Link>
            </div>
          );
        }; */}
        Your site now has clickable links that can navigate you around your single-page app!
        
        Conclusion
        So there we have it. If you want to easily navigate around a React app, forget the anchor tags and add React Router. It's clean, it's organized, and it makes adding and deleting pages a whole lot easier.
        
        To learn more about React Hooks and other great features of React, you can join the waitlist for my upcoming advanced React course.
        
        Or if you're looking for something more beginner friendly, you can check out my introductory course on React.
        
        Happy coding ;)</>
    )
}

export default Home;
