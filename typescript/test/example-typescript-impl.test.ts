import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import ExampleTypescriptImpl = require('../lib/example-typescript-impl-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ExampleTypescriptImpl.ExampleTypescriptImplStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});