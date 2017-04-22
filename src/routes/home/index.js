import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

const title = 'Home';

export default {

  path: '/',

  action() {
    return {
      title,
      component: <Layout><Home title={title} /></Layout>,
    };
  },

};
