import errorImg from '../assets/error404.jpg'

const Error404 = () => {
    return (
      <div className='main'>
        <div className='error-text'>
          Oh no! This page seems not to exist...
        </div>
        <img className='error-image' src={errorImg} alt='error' />
      </div>
    )
  }
  
  export default Error404