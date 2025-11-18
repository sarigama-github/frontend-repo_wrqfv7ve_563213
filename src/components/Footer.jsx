export default function Footer(){
  const link = 'text-sm hover:underline';
  const grey = {color:'#444444'};
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-lg font-bold" style={{color:'#0A1A2F'}}>Affiliate Hub</div>
            <p className="mt-2 text-sm" style={grey}>We help you choose with confidence through honest reviews and comparisons.</p>
          </div>
          <div>
            <div className="font-semibold" style={{color:'#222222'}}>Company</div>
            <ul className="mt-3 space-y-2" style={grey}>
              <li><a className={link} href="#/about">About</a></li>
              <li><a className={link} href="#/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold" style={{color:'#222222'}}>Legal</div>
            <ul className="mt-3 space-y-2" style={grey}>
              <li><a className={link} href="#/affiliate-disclosure">Affiliate Disclosure</a></li>
              <li><a className={link} href="#/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold" style={{color:'#222222'}}>Get updates</div>
            <form className="mt-3 flex gap-2">
              <input className="flex-1 rounded-lg border px-3 py-2" style={{borderColor:'#E5E7EB'}} placeholder="Email address" />
              <button className="rounded-lg px-4 py-2 text-white font-semibold" style={{background:'#1F67D1'}}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 h-px bg-gray-100"/>
        <div className="mt-6 text-xs" style={grey}>© {new Date().getFullYear()} Affiliate Hub. Reviews may contain affiliate links. We may earn a commission at no extra cost to you.</div>
      </div>
    </footer>
  )
}
