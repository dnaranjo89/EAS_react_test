import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import Head from 'next/head';
import { withRouter } from 'next/router';
import withMixpanel from '../../hocs/withMixpanel.jsx';
import Advert from '../Advert/Advert.jsx';
import PageLayout from './PageLayout.jsx';
import { hotjar } from '../../services/hotjar';
import { getExperimentsAllocation } from '../../services/abtest';
import config from '../../config';
import defaultOgImage from './logo_og.png';
import STYLES from './Page.module.scss';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const c = classNames.bind(STYLES);

class Page extends Component {
  componentDidMount() {
    const { mixpanel, pageType, router, enableHotjar } = this.props;
    if (config.googleAnalyticsEnabled) {
      const page = router.asPath;
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

  getDomain() {
    const { hostname } = this.props;
    return `https://${hostname}`;
  }

  getAbsoluteUrl() {
    const { router } = this.props;
    const domain = this.getDomain();
    return `${domain}${router.asPath}`;
  }

  render() {
    const {
      htmlTitle,
      contentClassName,
      children,
      showAdvert,
      sidePanel,
      htmlDescription,
      htmlKeywords,
      noIndex,
      ogImage,
    } = this.props;
    const absoluteUrl = this.getAbsoluteUrl();
    const shouldIndexPage = config.indexPages && !noIndex;
    const pageTitle = htmlTitle.substring(0, 60);
    const pageDescription = htmlDescription.substring(0, 155);
    const ogImageUrl = this.getDomain() + ogImage;
    return (
      <>
        <Head>
          <title>{htmlTitle}</title>
          <link rel="canonical" href={absoluteUrl} />
          {!shouldIndexPage && <meta name="robots" content="noindex" />}
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={htmlKeywords} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={absoluteUrl} />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content={config.facebookAppId} />
        </Head>
        <Header />
        <div className={c('Page')}>
          <PageLayout sidePanel={sidePanel} contentClassName={contentClassName}>
            {children}
          </PageLayout>
          {showAdvert && <Advert />}
        </div>
        <Footer />
      </>
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
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
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
