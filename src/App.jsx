import { useEffect } from 'react'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import Trending from './components/Trending'
import Comparison from './components/Comparison'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

function App() {
  useEffect(()=>{
    document.title = 'Affiliate Hub — Honest Reviews & Comparisons'
  },[])

  return (
    <div className="min-h-screen bg-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b" style={{borderColor:'#E5E7EB'}}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#/" className="font-extrabold tracking-tight" style={{color:'#0A1A2F'}}>Affiliate Hub</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm" style={{color:'#444444'}}>
            <a href="#/category/tech">Tech</a>
            <a href="#/category/fashion">Fashion</a>
            <a href="#/category/kitchen">Kitchen</a>
            <a href="#/category/fitness">Fitness</a>
            <a href="#/category/beauty">Beauty</a>
            <a href="#/category/home">Home</a>
            <a href="#/blog">Blog</a>
          </nav>
          <a href="#/compare" className="rounded-md px-3 py-2 text-white text-sm font-semibold" style={{background:'#1F67D1'}}>Best picks</a>
        </div>
      </header>

      <main>
        <Hero onPrimaryClick={() => window.location.hash = '#/compare'} />
        <CategoryGrid />
        <Trending />
        <Comparison />
        <BlogSection />
      </main>

      {/* Trusted badges */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {['Independent Reviews','Transparent Criteria','Fast & Lightweight','Mobile First'].map((x,i)=> (
            <div key={i} className="rounded-xl border p-4" style={{borderColor:'#E5E7EB'}}>
              <div className="text-sm font-semibold" style={{color:'#0A1A2F'}}>{x}</div>
              <div className="text-xs mt-1" style={{color:'#444444'}}>No spam. No fluff.</div>
            </div>
          ))}
        </div>
        <div className="h-px bg-gray-100" />
      </section>

      <Footer />
    </div>
  )
}

export default App
