import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia inventore debitis asperiores reprehenderit distinctio, animi in obcaecati explicabo nihil dolorum repellat illum libero doloribus beatae incidunt a quas ratione soluta, magnam ducimus recusandae molestias. Doloribus, ullam quo odio eos minus dolores expedita harum ipsa sunt nostrum dignissimos dolore adipisci.</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil corrupti minus totam animi pariatur facilis nostrum. Corporis, minus voluptas consequatur autem ea magnam cum tempora quas amet voluptate suscipit possimus. Voluptates earum autem id adipisci sint nostrum, cum qui eius, recusandae rerum architecto laudantium! Harum assumenda maxime modi recusandae!</p>
        </div>
    </div>
  )
}

export default About