import cdk = require('@aws-cdk/core');
import codebuild = require("@aws-cdk/aws-codebuild");
import codecommit = require("@aws-cdk/aws-codecommit");
import { PullRequestBuilder } from "cdk-pull-request-builder";

export class ExampleTypescriptImplStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.appRepo = new codecommit.Repository(this, "Repository", {
            description: "Example project",
            repositoryName: "example-typescript-impl"
        });

        this.appTestBuildProject = new codebuild.Project(this, "TestBuildProject", {
            source: codebuild.Source.codeCommit({ repository: this.appRepo })
        });

        const sourceEmailParam = '/example-app/pull-request-builder/source-email';
        const notificationEmailParam = '/example-app/pull-request-builder/notification-email';

        new PullRequestBuilder(this, "PullRequestBuilder", {
            enforceApproval: true,
            project: this.appTestBuildProject,
            repo: this.appRepo,
            buildFailureEmailSettings: {
                sourceEmailParam,
                notificationEmailParam
            }
        });
    }
}
