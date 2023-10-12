import React, {useState,  useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    //fetchPhoto()
    setApod({
      "date": "2023-10-12",
      "explanation": "Mu Cephei is a very large star. An M-class supergiant some 1500 times the size of the Sun, it is one of the largest stars visible to the unaided eye, and even one of the largest in the entire Galaxy. If it replaced the Sun in our fair Solar System, Mu Cephei would easily engulf Mars and Jupiter. Historically known as Herschel's Garnet Star, Mu Cephei is extremely red. Approximately 2800 light-years distant, the supergiant is seen near the edge of reddish emission nebula IC 1396 toward the royal ...",
      "hdurl": "https://apod.nasa.gov/apod/image/2310/MuCephei_apod.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Mu Cephei",
      "url": "https://apod.nasa.gov/apod/image/2310/MuCephei_apod1024.jpg"
  })
  }, [])
  if (!apod) return 'Fetching Photo of the day...'
  return (
    <section>
     <Card
     title={apod.title}
     text={apod.explanation}
     imageURL={apod.url}
     date={apod.date}

     />
    </section>
  )
}

export default App
