import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as plow from 'plow-js';
import classnames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as reactRedux from 'react-redux';
import * as reduxActions from 'redux-actions';
import * as reduxSaga from 'redux-saga';
import * as reduxSagaEffects from 'redux-saga/effects';
import * as reselect from 'reselect';
import * as reactCssThemr from 'react-css-themr';

import ReactUiComponents from '@neos-project/react-ui-components';
import * as NeosUiReduxStore from '@neos-project/neos-ui-redux-store';
import * as NeosUiDecorators from '@neos-project/neos-ui-decorators';
import NeosUiI18n from '@neos-project/neos-ui-i18n';
import NeosUiBackendConnectorDefault, * as NeosUiBackendConnector from '@neos-project/neos-ui-backend-connector';

export default {
    '@vendor': () => ({
        React,
        ReactDOM,
        PropTypes,
        Immutable,
        plow,
        classnames,
        ImmutablePropTypes,
        reactRedux,
        reduxActions,
        reduxSaga,
        reduxSagaEffects,
        reselect,
        reactCssThemr
    }),

    '@NeosProjectPackages': () => ({
        NeosUiBackendConnectorDefault,
        NeosUiBackendConnector,
        NeosUiDecorators,
        NeosUiI18n,
        NeosUiReduxStore,
        // react-proptypes (optional)
        ReactUiComponents

        // TODO: how to write new reducers?
        // TODO: how to write new sagas? -> Registry --> CUSTOM PACKAGE
        // TODO: How to replace containers -> Registry --> CUSTOM PACKAGE
    })
};
