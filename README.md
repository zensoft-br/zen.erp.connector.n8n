# @zensoftbr/n8n-nodes-zenerp

This is an n8n community node. It lets you use **Zen ERP** in your n8n workflows.

**Zen ERP** is a cloud-based enterprise management system for small and medium businesses that centralizes operations across modules like commercial, finance, inventory, fiscal, and supply chain.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node dynamically exposes **all operations available in the Zen ERP API**.

Operations are generated directly from the Zen ERP OpenAPI definition and organized by service/module inside n8n.  
This ensures that all current and future API endpoints are automatically available without requiring manual updates to the node documentation.

For the complete and up-to-date API reference, see:
https://api.zenerp.app.br/api

## Credentials

To use the Zen ERP n8n node, you need a **permanent access token**.  
This token must be generated in the Zen ERP application by an authorized user.

Follow the steps below:

- Log in to the Zen ERP application.
- Go to **System → Security → Users**.
- Select the user for which you want to generate the token.
- Click **Forward**.
- Choose **Get a permanent token**.
- Enter your user credentials to confirm.
- Copy and securely store the generated token.

After generating the token, paste it into the Zen ERP credentials configuration in n8n.

## Compatibility

- Tested with: **n8n v2.1.5**

No known incompatibilities at this time.

## Usage

The Zen ERP node dynamically exposes all available API operations based on the Zen ERP OpenAPI definition.

After configuring the credentials, add the Zen ERP node to your workflow and:

- Select the desired service/module.
- Choose the operation you want to execute.
- Fill in the required parameters as defined by the API schema.

All available operations, inputs, and outputs are generated automatically and stay in sync with the Zen ERP API.

If you are new to n8n, see the official “Try it out” guide:
https://docs.n8n.io/try-it-out

## Resources

- [Zen ERP website](https://zenerp.com.br)
- [Zen ERP documentation](https://docs.zenerp.com.br)
- [Zen ERP API documentation](https://api.zenerp.app.br/api)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
