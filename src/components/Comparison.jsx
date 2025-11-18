const api = import.meta.env.VITE_BACKEND_URL || ''
import { useEffect, useState } from 'react'

export default function Comparison() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`${api}/api/products`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])

  const cols = ["title","price","category"]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold" style={{color:'#0A1A2F'}}>Top picks comparison</h2>
          <p className="text-sm mt-1" style={{color:'#444444'}}>Quickly compare specs and value at a glance.</p>
        </div>

        <div className="overflow-x-auto rounded-xl border" style={{borderColor:'#E5E7EB'}}>
          <table className="min-w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold" style={{color:'#444444'}}>Product</th>
                <th className="px-4 py-3 text-sm font-semibold" style={{color:'#444444'}}>Price</th>
                <th className="px-4 py-3 text-sm font-semibold" style={{color:'#444444'}}>Category</th>
                <th className="px-4 py-3 text-sm font-semibold" style={{color:'#444444'}}>Rating</th>
                <th className="px-4 py-3 text-sm font-semibold" style={{color:'#444444'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p => (
                <tr key={p.slug} className="border-t" style={{borderColor:'#F3F4F6'}}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image_url} alt="" className="h-10 w-10 rounded object-cover"/>
                      <a href={`#/product/${p.slug}`} className="font-medium" style={{color:'#222222'}}>{p.title}</a>
                    </div>
                  </td>
                  <td className="px-4 py-3" style={{color:'#444444'}}>{p.price ? `$${p.price}` : '—'}</td>
                  <td className="px-4 py-3 text-sm" style={{color:'#444444'}}>{p.category}</td>
                  <td className="px-4 py-3 text-sm" style={{color:'#444444'}}>{p.review?.rating ?? '—'}</td>
                  <td className="px-4 py-3">
                    {p.affiliate_url && <a href={p.affiliate_url} target="_blank" rel="noopener" className="rounded-md px-3 py-2 text-white text-sm font-semibold" style={{background:'#1F67D1'}}>View deal</a>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-px bg-gray-100" />
    </section>
  )
}
