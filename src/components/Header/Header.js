import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} height="38" alt="Hypertube" />
            <span className={s.brandTxt}>Hypertube</span>
          </Link>
          <div className={s.banner}>
            <p className={s.bannerDesc}>Watching torrent movies the easy way</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
