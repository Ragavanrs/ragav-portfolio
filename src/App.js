import React, { Component } from 'react';
import ReactGA from 'react-ga';
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
      .then(data => this.setState({ resumeData: data }))
      .catch(err => console.error('Failed to load resume data:', err));
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
