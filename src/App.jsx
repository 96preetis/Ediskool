import './index.css'
import Header from './components/common/Header'
import HeroSection from './components/sections/HeroSection'
import LiveWebinarCountdown from './components/sections/LiveWebinarCountdown'
import CourseList from './components/sections/CourseList'
import WhyChooseEditskool from './components/sections/WhyChooseEditskool'
import MeetYourMentor from './components/sections/MeetYourMentor'
import WhatYouWillLearn from './components/sections/WhatYouWillLearn'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import ContactUs from './components/sections/ContactUs'
import Footer from './components/sections/Footer'

function App() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <LiveWebinarCountdown />
      <CourseList />
      <WhyChooseEditskool />
      <MeetYourMentor />
      <WhatYouWillLearn />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
