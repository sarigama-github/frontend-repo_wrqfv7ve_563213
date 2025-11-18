import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL || ''

export default function BlogSection(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{ fetch(`${api}/api/blog`).then(r=>r.json()).then(setPosts).catch(()=>{}) }, [])

  return (
    <section id="blog" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold" style={{color:'#0A1A2F'}}>Latest guides</h2>
          <p className="text-sm mt-1" style={{color:'#444444'}}>Actionable, research-backed buying advice.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p.slug} href={`#/blog/${p.slug}`} className="rounded-2xl border overflow-hidden hover:shadow-sm transition" style={{borderColor:'#E5E7EB'}}>
              {p.hero_image && <img src={p.hero_image} alt="" className="h-44 w-full object-cover"/>}
              <div className="p-5">
                <h3 className="font-semibold" style={{color:'#222222'}}>{p.title}</h3>
                <p className="mt-2 text-sm" style={{color:'#444444'}}>{p.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold" style={{color:'#1F67D1'}}>Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="h-px bg-gray-100" />
    </section>
  )
}
