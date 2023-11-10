
import '../Styles/Home.css'

//Home page
 
function Home () {
    return(
        <main>
          <div class="intro">
            <h1>Welcome!</h1>
            <p>This is my page for fantasy football and sports analytics projects</p>
          </div>

          <div class="outline">
            <div class="work">
              <p class="work-heading">Fantasy Football</p>
              <p class="work-text"> I published 2023 Fantasy football rankings and practiced my python skills</p>
            </div>
            <div class="work">
              <p class="work-heading">Analytics and Models</p>
              <p class="work-text"> I have links to the sports analytics projects I have done so far, with many more to come!</p>
            </div>
            <div class="work">
              <p class="work-heading">Web Development</p>
              <p class="work-text">This page is my way of getting first-hand experience at web development</p>
            </div>
          </div>
        </main>

    );
    }

export default Home;