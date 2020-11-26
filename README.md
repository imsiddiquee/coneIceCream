# Logical expression In the template loop.

You can not use concatenate or math expression on the LWC template loop(for), because the LWC template not support logical expression except the if condition.

## Overview

How to use complex type expression in LWC, Let's create one LWC project, where we prepare our loveable cone icecream. Here we used a component container, which holds two components one shows the configure cone scoop, and another one used to help us order the scoop. In the project, we need to synch data among components to calculate the total selected cone scoops and price.

### Project components internal structure

(https://github.com/imsiddiquee/coneIceCream/blob/main/postContent/Component-internal-structure.png)

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
