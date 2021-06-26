import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <Link className={classes.navlinks} href='/'><a>React Meetups</a></Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={classes.navlinks} href='/'><a>Meetups</a></Link>
          </li>
          <li>
            <Link className={classes.navlinks} href='/new-meetup'><a>Add</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
