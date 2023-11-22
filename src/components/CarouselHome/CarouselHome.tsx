import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="/assets/images/slide1.jpg" 
        alt="slide1" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>S
      <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://img.freepik.com/premium-photo/mixed-team-software-developers-analyzing-source-code-pointing-screens-comparing-algorithm-with-user-interface-digital-tablet-programmers-working-coding-group-project-sitting-desk_482257-43991.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais" 
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
        src="/assets/images/slide3.jpg" 
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