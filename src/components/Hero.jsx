import { motion } from 'framer-motion'

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{color:'#0A1A2F'}}>
              Find the best products across every niche
            </h1>
            <p className="mt-5 text-base sm:text-lg" style={{color:'#222222'}}>
              Honest, expert-backed reviews and comparisons to help you buy with confidence.
            </p>
            <div className="mt-8 flex gap-3">
              <button onClick={onPrimaryClick} className="rounded-lg px-5 py-3 text-white font-semibold shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{background:'#1F67D1'}}>
                Explore top picks
              </button>
              <a href="#blog" className="rounded-lg px-5 py-3 font-semibold border" style={{borderColor:'#E5E7EB', color:'#444444'}}>
                Read buying guides
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm" style={{color:'#444444'}}>
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full" style={{background:'#1F67D1'}}></span> Trusted by savvy shoppers</div>
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-green-500"></span> Independently researched</div>
            </div>
          </div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="relative">
            <img alt="Hero" className="w-full rounded-2xl border" style={{borderColor:'#E5E7EB'}} src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZXJvfGVufDB8MHx8fDE3NjM0NTU5MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"/>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-100" />
    </section>
  )
}
