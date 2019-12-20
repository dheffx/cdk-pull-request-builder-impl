from aws_cdk import (
    aws_codebuild as codebuild,
    aws_codecommit as codecommit.
    core
)

import cdk_prb

class ExamplePythonImplStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        projectName="example-python-impl"

        repo = codecommit.Repository(
            self, "Repository",
            description="Example python project",
            repositoryName=projectName
        )

        project = codebuild.Project(
            self, "TestBuildProject",
            source=codebuild.Source.code_commit(repository=repo)
        )

        source_email_param = '/example-app/pull-request-builder/source-email';
        notification_email_param = '/example-app/pull-request-builder/notification-email';

        prb = cdk_prb.PullRequestBuilder(
            self, "PullRequestBuilder",
            enforceApproval=True,
            project=project,
            repo=repo,
            buildFailureEmailSettings={
                'sourceEmailParam': source_email_param,
                'notificationEmailParam': notification_email_param
            }
        )