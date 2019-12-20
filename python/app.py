#!/usr/bin/env python3

from aws_cdk import core

from example_python_impl.example_python_impl_stack import ExamplePythonImplStack


app = core.App()
ExamplePythonImplStack(app, "example-python-impl")

app.synth()
