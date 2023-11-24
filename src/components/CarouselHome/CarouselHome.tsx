import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="/assets/images/slide1.jpeg" 
        alt="slide1" 
        />
        <Carousel.Caption>
          <h3>Front End</h3>
          <p>Desarrollo de la parte de un sitio web o aplicación que los usuarios ven y con la que interactúan directamente.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='d block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://img.freepik.com/premium-photo/mixed-team-software-developers-analyzing-source-code-pointing-screens-comparing-algorithm-with-user-interface-digital-tablet-programmers-working-coding-group-project-sitting-desk_482257-43991.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais" 
        alt="slide1" 
        />
        <Carousel.Caption>
          <h3>Back End</h3>
          <p>Desarrollo de la parte no visible de un sitio web o aplicación, donde se encuentra la lógica subyacente que permite su funcionamiento.</p>
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
          <h3>Full Stack</h3>
          <p>
          Trabajar tanto con el front-end como con el back-end en el desarrollo de una aplicación web.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselHome