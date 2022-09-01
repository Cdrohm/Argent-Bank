import logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userInfosSelector } from '../utils/selectors'



/**
 * header with the logo, 
 * -if the user isn't connected the home page link + a link to sign-in 
 * -if the user is connected the home page link + a link to sign-out      
 * @returns header + home page + link sing-in/sign-out.
 */
const Header = () => {
  const connected = useSelector(state => state.user.status === 'connected')
  const { firstName } = useSelector(state => userInfosSelector(state))

  return (
    <header className='main-nav'>
      <Link to="/" className='main-nav-logo'>
        <img className='main-nav-logo-image' src={logo} alt='logo' />
      </Link>
      {connected ? (
        <Link to='/' className='main-nav-item'>
          <FontAwesomeIcon className='fa fa-circle-user' icon="circle-user" />
          {firstName}
          <FontAwesomeIcon className='fa fa-sign-out' icon="sign-out" />
          Sign Out
        </Link>
      ) : (
        <Link to="/signin" className='main-nav-item'>
          <FontAwesomeIcon className='fa fa-circle-user' icon="circle-user" />
          Sign In
        </Link>
      )}
    </header>
  )
}

export default Header