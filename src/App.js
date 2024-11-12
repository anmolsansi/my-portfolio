import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationContactFooter from './components/EducationContactFooter';
import Footer from './components/Footer';

function App() {
  return (
    <ReactFullpage
      anchors={['about', 'skills', 'experience', 'projects', 'education', 'contact', 'footer']}
      navigation
      scrollingSpeed={300}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="about">
              <About />
            </div>
            <div className="section" data-anchor="skills">
              <Skills />
            </div>
            <div className="section" data-anchor="experience">
              <Experience />
            </div>
            <div className="section" data-anchor="projects">
              <Projects />
            </div>
            <div className="section" data-anchor="education-contact-footer">
              <EducationContactFooter />
            </div>
            {/* <div className="section" data-anchor="footer">
              <Footer />
            </div> */}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
