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
import Advert from '../Advert/Advert.jsx';
import PageLayout from './PageLayout.jsx';
import { hotjar } from '../../services/hotjar';
import { getExperimentsAllocation } from '../../services/abtest';
import config from '../../config/config';
import defaultOgImage from './logo_og.png';
import STYLES from './Page.scss';

const c = classNames.bind(STYLES);

class Page extends Component {
  componentDidMount() {
    const { mixpanel, pageType, location, enableHotjar } = this.props;
    if (config.googleAnalyticsEnabled) {
      const page = location.pathname;
      ReactGA.pageview(page);
    }
    if (config.mixpanelEnabled) {
      mixpanel.track(`Page Loaded - ${pageType}`, {
        ...getExperimentsAllocation(),
        pageType,
      });
    }
    if (config.hotjarEnabled && enableHotjar) {
      hotjar.initialize(1051921, 6);
    }
  }

  getAbsoluteUrl() {
    const { location, hostname } = this.props;
    return `https://${hostname}${location.pathname}`;
  }

  getMetaTags() {
    const { htmlTitle, htmlDescription, htmlKeywords, noIndex, ogImage } = this.props;
    const shouldIndexPage = config.indexPages && !noIndex;
    const pageTitle = htmlTitle.substring(0, 60);
    const pageDescription = htmlDescription.substring(0, 155);
    const absoluteUrl = this.getAbsoluteUrl();
    const metaTags = [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: htmlKeywords },
      { property: 'og:title', content: pageTitle },
      { property: 'og:image', content: config.OGImagesFullDomain + ogImage },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: absoluteUrl },
      { property: 'og:type', content: 'website' },
      { property: 'fb:app_id', content: config.facebookAppId },
    ];

    if (!shouldIndexPage) {
      metaTags.push({ name: 'robots', content: 'noindex' });
    }

    return metaTags;
  }

  render() {
    const { htmlTitle, contentClassName, children, showAdvert, sidePanel } = this.props;
    const absoluteUrl = this.getAbsoluteUrl();
    const canonicalLinks = [
      {
        rel: 'canonical',
        href: absoluteUrl,
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
        <div className={c('Page')}>
          <PageLayout sidePanel={sidePanel} contentClassName={contentClassName}>
            {children}
          </PageLayout>
          {showAdvert && <Advert />}
        </div>
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
  contentClassName: PropTypes.string,
  mixpanel: PropTypes.shape({ track: PropTypes.func.isRequired }),
  children: PropTypes.node.isRequired,
  noIndex: PropTypes.bool,
  location: ReactRouterPropTypes.location.isRequired,
  ogImage: PropTypes.node,
  hostname: PropTypes.string.isRequired,
  showAdvert: PropTypes.bool,
  sidePanel: PropTypes.node,
};

Page.defaultProps = {
  contentClassName: null,
  noIndex: false,
  ogImage: defaultOgImage,
  htmlKeywords: '',
  htmlDescription: '',
  enableHotjar: false,
  showAdvert: true,
  mixpanel: null,
  sidePanel: null,
};

const mapsStateToProps = state => ({
  hostname: state.userRequest.hostname,
});

export default withMixpanel(withRouter(connect(mapsStateToProps)(Page)));
