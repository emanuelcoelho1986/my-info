import Application from 'my-info/app';
import config from 'my-info/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
