import { useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Counts from './components/Counts'
import Feature from './components/Features'
import Benifits from './components/Benifits'
import Note from './components/Note'
import BentoGrid from './components/BentoGrid'
import Counts2 from './components/Counts2'
import Learnmore from './components/Learnmore'
import FAQ from './components/FAQ'
import Services from './components/Services'
import AMAs from './components/AMAs'
import VideoSection from './components/VideoSection'
import Roadmap from './components/Roadmap'
import Roadmap1 from './components/Roadmap1'
import Build from './components/Build'
import Technical from './components/Technical'
import Animate from './components/Animate'
import Loader from './components/Loader'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  const location = useLocation()
  const isBlogPage = location.pathname === '/blog'
  const isBlogPostPage = location.pathname.startsWith('/blog/') && location.pathname !== '/blog'

  return (
    <>
      <Loader />
      {isBlogPostPage ? (
        <BlogPost />
      ) : isBlogPage ? (
        <Blog />
      ) : (
        <>
          <Nav />
          <Hero />
          <Animate />
          <Counts />
          <Feature />
          <Services />
          <VideoSection />
          <AMAs />
          <Benifits />
          <Technical />
          <Note />
          <BentoGrid />
          <Learnmore />
          <Roadmap1 />
          <Roadmap />
          <Build />
          <FAQ />
          <Footer />
        </>
      )}
    </>
  )
}

export default App

