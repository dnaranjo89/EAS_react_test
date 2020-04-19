import React from 'react';

const withLoadedTranslations = namespaces => {
  const withTranslationLoader = WrappedComponent => {
    const WithTranslationLoader = props => <WrappedComponent {...props} />;
    WithTranslationLoader.getInitialProps = async () => ({
      namespacesRequired: namespaces,
    });
    WithTranslationLoader.propTypes = {};

    return WithTranslationLoader;
  };
  return withTranslationLoader;
};

export default withLoadedTranslations;
