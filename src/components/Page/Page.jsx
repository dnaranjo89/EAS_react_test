import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import classNames from 'classnames/bind';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import i18n from 'i18next';
import withMixpanel from '../withMixpanel/withMixpanel.jsx';
import { hotjar } from '../../services/hotjar';

import config from '../../config/config';
import defaultOgImage from './logo_og.png';
import STYLES from './Page.scss';

const c = classNames.bind(STYLES);

class Page extends Component {
  componentDidMount() {
    const { mixpanel, pageType, location, enableHotjar } = this.props;
    if (config.analiticsEnabled) {
      const page = location.pathname;
      ReactGA.pageview(page);
      mixpanel.track(`Page Loaded - ${pageType}`, { pageType });
    }
    if (config.hotjarEnabled && enableHotjar) {
      hotjar.initialize(1051921, 6);
    }
  }

  getMetaTags() {
    const {
      htmlTitle,
      htmlDescription,
      htmlKeywords,
      noIndex,
      ogImage,
      location,
      hostname,
    } = this.props;
    const shouldIndexPage = config.indexPages && !noIndex;
    const pageTitle = htmlTitle.substring(0, 60);
    const pageDescription = htmlDescription.substring(0, 155);
    const metaTags = [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: htmlKeywords },
      { property: 'og:title', content: pageTitle },
      { property: 'og:image', content: config.OGImagesFullDomain + ogImage },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: hostname + location.pathname },
    ];

    if (!shouldIndexPage) {
      metaTags.push({ name: 'robots', content: 'noindex' });
    }

    return metaTags;
  }

  render() {
    const { htmlTitle, className, location, children } = this.props;
    const canonicalLinks = config.isServer
      ? []
      : [
          {
            rel: 'canonical',
            href: window.location.origin + location.pathname,
          },
        ];
    return (
      <Fragment>
        <Helmet
          title={htmlTitle}
          htmlAttributes={{
            lang: i18n.language,
            itemtype: 'http://schema.org/WebPage',
          }}
          link={canonicalLinks}
          meta={this.getMetaTags()}
        />
        <div className={c('Page', className)}>{children}</div>
      </Fragment>
    );
  }
}

Page.propTypes = {
  htmlTitle: PropTypes.string.isRequired,
  htmlDescription: PropTypes.string,
  htmlKeywords: PropTypes.string,
  pageType: PropTypes.string.isRequired,
  enableHotjar: PropTypes.bool,
  className: PropTypes.string,
  mixpanel: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  noIndex: PropTypes.bool,
  location: ReactRouterPropTypes.location.isRequired,
  ogImage: PropTypes.node,
  hostname: PropTypes.string.isRequired,
};

Page.defaultProps = {
  className: null,
  noIndex: false,
  ogImage: defaultOgImage,
  htmlKeywords: '',
  htmlDescription: '',
  enableHotjar: false,
};

const mapsStateToProps = state => ({ hostname: state.hostname.hostname });

export default withMixpanel(withRouter(connect(mapsStateToProps)(Page)));
