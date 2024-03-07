import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='m-6'>
        <button className="animate-rotate-x animate-duration-[4000ms]">
  Hej, look at me!
</button>

<button className="animate-jump-in animate-delay-300 animate-once">
  Wait a bit, then jump right in.
</button>
    </div>
  )
}

export default About