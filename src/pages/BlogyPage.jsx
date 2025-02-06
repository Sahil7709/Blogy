import React from 'react'
import Hero from '../components/blogy/hero/Hero'
import Stories from '../components/blogy/cards/stories/Stories'
import Lately from '../components/blogy/cards/lately/Lately'
import Recommended from '../components/blogy/cards/recommended/Recommended'

function BlogyPage() {
  return (
    <div>
      
      <Hero/>
      <Stories/>
      <Lately/>
      <Recommended/>
    
    </div>
  )
}

export default BlogyPage