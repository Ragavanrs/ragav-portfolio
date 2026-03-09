import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Package from './Components/package';
import EngineeringImpact from './Components/EngineeringImpact';
import TechnicalExpertise from './Components/TechnicalExpertise';
import ArchitectureProjects from './Components/ArchitectureProjects';
import CaseStudies from './Components/CaseStudies';
import Blog from './Components/Blog';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData() {
    fetch('/resumeData.json')
      .then(response => response.json())
      .then(data => {
        // Re-initialise scroll animations after data loads so that cards
        // rendered by the setState re-render are also observed.
        this.setState({ resumeData: data }, () => this.initScrollAnimations());
      })
      .catch(err => console.error('Failed to load resume data:', err));
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      observer.observe(el);
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <EngineeringImpact data={this.state.resumeData.engineeringImpact} />
        <TechnicalExpertise data={this.state.resumeData.technicalExpertise} />
        <About data={this.state.resumeData.main} />
        <ArchitectureProjects data={this.state.resumeData.architectureProjects} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <CaseStudies data={this.state.resumeData.caseStudies} />
        <Package data={this.state.resumeData.npm} />
        <Blog data={this.state.resumeData.blog} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
