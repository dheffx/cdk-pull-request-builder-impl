#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { ExampleTypescriptImplStack } from '../lib/example-typescript-impl-stack';

const app = new cdk.App();
new ExampleTypescriptImplStack(app, 'ExampleTypescriptImplStack');
