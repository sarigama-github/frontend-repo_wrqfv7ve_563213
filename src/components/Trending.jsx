import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL || ''

function Rating({ value }) {
  const full = Math.round(value)
  return (
    <div className="flex items-center gap-1">
      {Array.from({length:5}).map((_,i)=> (
        <span key={i} className={`inline-block h-3 w-3 rounded-sm ${i<full?'bg-yellow-400':'bg-gray-200'}`} />
      ))}
      <span className="ml-2 text-xs" style={{color:'#444444'}}>{value.toFixed(1)}</span>
    </div>
  )
}

export default function Trending() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${api}/api/products?featured=true`).then(r=>r.json()).then(setItems).catch(()=>{})
  }, [])

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold" style={{color:'#0A1A2F'}}>Trending now</h2>
            <p className="text-sm mt-1" style={{color:'#444444'}}>Editor-curated products scoring high on value and performance.</p>
          </div>
          <a href="#/compare" className="text-sm font-semibold" style={{color:'#1F67D1'}}>See comparisons →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <div key={p.slug} className="rounded-2xl border overflow-hidden hover:shadow-sm transition" style={{borderColor:'#E5E7EB'}}>
              <img src={p.image_url} alt={p.title} className="h-52 w-full object-cover"/>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold" style={{color:'#222222'}}>{p.title}</h3>
                  {p.price && <div className="text-sm font-medium" style={{color:'#444444'}}>${p.price}</div>}
                </div>
                {p.review && <div className="mt-2"><Rating value={p.review.rating}/></div>}
                {p.review?.verdict && <p className="mt-2 text-sm" style={{color:'#444444'}}>{p.review.verdict}</p>}
                <ul className="mt-3 grid grid-cols-2 gap-2 text-xs" style={{color:'#444444'}}>
                  {p.review?.pros?.slice(0,2).map((x,i)=> <li key={i} className="rounded-md px-2 py-1 bg-gray-50">+ {x}</li>)}
                  {p.review?.cons?.slice(0,1).map((x,i)=> <li key={`c-${i}`} className="rounded-md px-2 py-1 bg-gray-50">- {x}</li>)}
                </ul>
                {p.affiliate_url && (
                  <a href={p.affiliate_url} target="_blank" rel="noopener" className="mt-4 inline-block rounded-lg px-4 py-2 text-white font-semibold" style={{background:'#1F67D1'}}>Check price</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gray-100" />
    </section>
  )
}
