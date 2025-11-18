import { Cpu, Shirt, Utensils, Dumbbell, Sparkles, Home, Star, Heart, Gamepad2 } from 'lucide-react'

const categories = [
  { name: 'Tech', slug: 'tech', icon: Cpu },
  { name: 'Fashion', slug: 'fashion', icon: Shirt },
  { name: 'Kitchen', slug: 'kitchen', icon: Utensils },
  { name: 'Fitness', slug: 'fitness', icon: Dumbbell },
  { name: 'Beauty', slug: 'beauty', icon: Sparkles },
  { name: 'Home', slug: 'home', icon: Home },
  { name: 'Lifestyle', slug: 'lifestyle', icon: Star },
  { name: 'Personal Care', slug: 'personal-care', icon: Heart },
  { name: 'Gaming', slug: 'gaming', icon: Gamepad2 },
]

export default function CategoryGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold" style={{color:'#0A1A2F'}}>Browse top categories</h2>
          <p className="text-sm mt-1" style={{color:'#444444'}}>We cover every niche so you can find the right pick faster.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(({name, slug, icon:Icon}) => (
            <a key={slug} href={`#/category/${slug}`} className="group rounded-xl border p-4 hover:shadow-sm transition" style={{borderColor:'#E5E7EB'}}>
              <div className="flex items-center gap-3">
                <div className="rounded-lg p-2" style={{background:'#F3F4F6'}}>
                  <Icon className="h-5 w-5" color="#1F67D1" />
                </div>
                <div>
                  <div className="font-semibold" style={{color:'#222222'}}>{name}</div>
                  <div className="text-xs" style={{color:'#444444'}}>See picks</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="h-px bg-gray-100" />
    </section>
  )
}
