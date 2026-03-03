import land from './assets/land-1.png'


function App() {
  return (
    <section >
      <div className='grid gap-8 justify-items-center 
                      max-2xl:bg-blue-100 
                        md:grid-cols-2'>
        <div className='pt-5 px-5'>
          <img 
            src={land} 
            alt="Land" 
            className="w-full max-w-[400] h-auto rounded-lg shadow-lg" 
          />
        </div>

        <div className='pt-5 px-5 md:pl-0 pr-10'>
          <h1 className='text-4xl font-medium'>Headline</h1>
          <p className="my-5">
            Morbi non suscipit felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed dui blandit, faucibus mauris id, laoreet elit. Cras dictum ultrices iaculis. In imperdiet euismod egestas. Phasellus placerat eleifend lacus, vel porta enim volutpat non. Quisque suscipit sit amet nisi id maximus. Curabitur id venenatis velit, et congue leo. Nulla scelerisque feugiat enim non suscipit.
          </p>
          <p className="">
            Nam purus sapien, tincidunt ac nisi vitae, fringilla condimentum tortor. Morbi elementum venenatis turpis, eu pharetra odio porttitor sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem leo, rutrum non turpis quis, faucibus ullamcorper quam. Integer sit amet auctor nulla. Maecenas convallis condimentum ipsum, quis pharetra ex. Sed pulvinar eget augue et porttitor. Integer fermentum diam in magna dapibus bibendum. Quisque quis ipsum lectus. 
          </p>
        </div>

      </div>

      <div className='flex justify-end p-5 max-2xl:bg-yellow-100 '>
        <div>
          <a href='#' >Login</a>
          <a href='#' className='ml-2'>Signup</a>
        </div>
      </div>

      <div class="flex justify-center items-end">
        <div class="bg-red-500 h-4 w-6"></div>
        <div class="bg-blue-500 h-8 w-6"></div>
        <div class="bg-green-500 h-12 w-6"></div>
      </div>

      <div class="flex justify-center items-end">
        <div className="bg-red-500 h-4 w-4 rounded-full"></div>
        <div className="bg-blue-500 h-8 w-8 rounded-full"></div>
        <div className="bg-green-500 h-12 w-12 rounded-full"></div>
      </div>

      <div class="mt-12 flex justify-center">
        <div class="bg-secondary-100 text-secondary-200">Load more</div>
      </div>  
      
    </section>

  )
}

export default App
