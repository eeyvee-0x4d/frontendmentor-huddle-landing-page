import './App.css'

import brandLogo from '../images/logo.svg'
import heroImage from '../images/illustration-mockups.svg'

function App() {
  return (
    <div className="App min-h-screen bg-no-repeat bg-violet text-white xs:px-8 xs:py-4 sm:px-12 md:bg-cover lg:px-[5%] flex flex-col">
        <div className="wrapper flex-1 flex flex-col justify-between gap-16 xl:gap-8">
            {/* HEADER */}
            <header className="header">
                <div className="brand-logo xs:w-32 lg:w-64 md:py-4">
                    <img className="w-full" src={brandLogo} alt="" />
                </div>
            </header>
            <section className="hero-section flex justify-center items-center gap-16 xs:flex-col lg:flex-row lg:gap-4 xl:gap-8">
                <div className="hero-img lg:basis-2/3 xl:basis-1/2 xl:grow">
                    <img src={heroImage} alt=""/>
                </div>
                <div className="hero-content flex flex-col justify-center items-center gap-6 xs:text-center lg:basis-1/3 xl:basis-1/2 xl:grow lg:items-start lg:text-left">
                    <h1 className="content-title font-semibold text-2xl lg:text-3xl xl:text-5xl">
                        Build the Community Your Fans Will Love
                    </h1>
                    <p className="content-text lg:text-lg xl:text-2xl">
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>
                    <button className="register-button bg-white text-violet rounded-full py-2 w-48 hover:bg-soft-magenta hover:text-white">Register</button>
                </div>
            </section>
            <footer className="socials flex items-center justify-center py-4 md:py-16 xl:py-8 lg:justify-end">
                <div className="socials-container flex justify-center items-center gap-4">
                    <a href="https://www.facebook.com" target="__blank" className="flex justify-center items-center w-8 h-8 border rounded-full border-white text-center"><ion-icon size="small" name="logo-facebook"></ion-icon></a>
                    <a href="https://www.twitter.com" target="__blank" className="flex justify-center items-center w-8 h-8 border rounded-full border-white text-center"><ion-icon size="small" name="logo-twitter"></ion-icon></a>
                    <a href="https://www.instagram.com" target="__blank" className="flex justify-center items-center w-8 h-8 border rounded-full border-white text-center"><ion-icon size="small" name="logo-instagram"></ion-icon></a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="__blank" className="flex justify-center items-center w-8 h-8 border rounded-full border-white text-center"><ion-icon size="small" name="logo-youtube"></ion-icon></a>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default App
