import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://1.bp.blogspot.com/-lkWPaYzbd44/XjtPeL1DP7I/AAAAAAAAEUQ/cAgG5gFhi1kgz428JohnPOJ1EO9yauXnQCLcBGAsYHQ/s640/tiny-twitch.png" 
        alt="slide1" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEUj-GjgwRmmpV-EDGpOnhpEPPjOUuUkAGAiPmQZsTIh57yzGcQpnmD1QKXZWdMxUYUYXcV69xOHCS1VsYbmkrrWYCCmDuiWIqFMEva0TVtPxtFZkTD1GDvwYUQmUyh1ylRiqLVerNkHerftvZWkQiSDWkuRK99FBdGKXrMT4We3GvLv3MNsTf6L3R-HY/w640-h360/mercadoPlay.png" 
        alt="slide1" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUhlkwJLct71W8Fhu6OqI-pPwo3Dxcz3-Px8K3fd2MHjNLBB9fDJL_GTrEA6NjMtkhq2UOoSMIylskPEa6X7yKJQOOA38vp5XZzu0GmLNIee4SbZxJel_2eNPgbbRu3yFgVXljyiNXWEdONo-I1cOyWEY-GjM8j8tz_a_wnJ9cE4d1GYdzfbNvLalZ/s16000/chatgpt-mundocyberia.png" 
        alt="slide1" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselHome