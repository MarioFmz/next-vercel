import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  }
];

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
        {
          menuItems.map( ({ text, href }) => (
            <ActiveLink key={ href } text={ text } href={ href } />    
          ))

        }
    </nav>
  );
};