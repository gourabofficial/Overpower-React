import React from 'react'

export const Card = ({name}) => {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 ">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/1233952/pexels-photo-1233952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “I am softwere Engineer , now i am Learning React js ”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
           
            {name}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Softwere Engineer, India
      </div>
    </figcaption>
  </div>
</figure>
  )
}
