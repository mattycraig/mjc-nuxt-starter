<template>
  <div>
    <b-navbar toggleable="lg" sticky type="dark" variant="dark" class="rounded">
      <b-navbar-brand href="#">Sink</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Typography">
            <b-dropdown-item href="#typography-headings"
              >Headings</b-dropdown-item
            >
            <b-dropdown-item href="#typography-display"
              >Display Text</b-dropdown-item
            >
            <b-dropdown-item href="#typography-text"
              >Text Elements</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item href="#alerts">Alerts</b-nav-item>
          <b-nav-item href="#badges">Badges</b-nav-item>
          <b-nav-item href="#breadcrumbs">Breadcrumb</b-nav-item>

          <b-nav-item-dropdown text="Buttons">
            <b-dropdown-item href="#button-variants">Variants</b-dropdown-item>
            <b-dropdown-item href="#button-sizes">Sizes</b-dropdown-item>
            <b-dropdown-item href="#button-groups">Groups</b-dropdown-item>
            <b-dropdown-item href="#button-toolbar">Toolbar</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Cards">
            <b-dropdown-item href="#card-types">Types</b-dropdown-item>
            <b-dropdown-item href="#card-variants">Variants</b-dropdown-item>
            <b-dropdown-item href="#card-groups">Groups</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#dropdowns">Dropdowns</b-nav-item>

          <!-- <b-nav-item-dropdown text="Forms">
            <b-dropdown-item href="#card-types">Types</b-dropdown-item>
            <b-dropdown-item href="#card-variants">Variants</b-dropdown-item>
            <b-dropdown-item href="#card-groups">Groups</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="typography" class="bs-docs-section my-8">
      <div class="section-header">
        <h3 class="mb-0 p-3 bg-dark rounded-top text-white">
          Typography
        </h3>
      </div>
      <div id="typography-headings" class="section-header mb-8">
        <h5 class="mb-0 p-3 bg-light rounded-bottom">
          Headings
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Heading Level 1</span>
          </b-col>
          <b-col sm="12" md="9">
            <h1>Lorem ipsum dolar</h1>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Heading Level 2</span>
          </b-col>
          <b-col sm="12" md="9">
            <h2>Lorem ipsum dolar</h2>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Heading Level 3</span>
          </b-col>
          <b-col sm="12" md="9">
            <h3>Lorem ipsum dolar</h3>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Heading Level 4</span>
          </b-col>
          <b-col sm="12" md="9">
            <h4>Lorem ipsum dolar</h4>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Heading Level 5</span>
          </b-col>
          <b-col sm="12" md="9">
            <h5>Lorem ipsum dolar</h5>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Heading Level 6</span>
          </b-col>
          <b-col sm="12" md="9">
            <h6>Lorem ipsum dolar</h6>
          </b-col>
        </b-row>
      </div>
      <div id="typography-display" class="section-header my-8">
        <h5 class="mb-0 p-3 bg-light rounded">
          Display Text
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Display Text 1</span>
          </b-col>
          <b-col sm="12" md="9">
            <h1 class="display-1">Lorem ipsum</h1>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Display Text 2</span>
          </b-col>
          <b-col sm="12" md="9">
            <h1 class="display-2">Lorem ipsum</h1>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Display Text 3</span>
          </b-col>
          <b-col sm="12" md="9">
            <h1 class="display-3">Lorem ipsum</h1>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Display Text 4</span>
          </b-col>
          <b-col sm="12" md="9">
            <h1 class="display-4">Lorem ipsum</h1>
          </b-col>
        </b-row>
      </div>
      <div id="typography-text" class="section-header my-8">
        <h5 class="mb-0 p-3 bg-light rounded">
          Text Elements
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Paragraph</span>
          </b-col>
          <b-col sm="12" md="9">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ad. Vel ratione ullam neque vero esse similique vitae eaque sint
              eveniet ipsam, enim, culpa illo qui blanditiis quidem quas
              corporis.
            </p>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Lead Paragraph</span>
          </b-col>
          <b-col sm="12" md="9">
            <p class="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ad. Vel ratione ullam neque vero esse similique vitae eaque sint
              eveniet ipsam, enim, culpa illo qui blanditiis quidem quas
              corporis.
            </p>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Blockquote</span>
          </b-col>
          <b-col sm="12" md="9">
            <blockquote class="blockquote">
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </b-col>
        </b-row>
      </div>
    </div>

    <div id="alerts" class="bs-docs-section my-8">
      <div class="section-header mb-8">
        <h3 class="mb-0 p-3 bg-dark rounded text-white">
          Alerts
        </h3>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Primary Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="primary"
              >Primary Alert</b-alert
            >
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Secondary Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="secondary"
              >Secondary Alert</b-alert
            >
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Tertiary Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="tertiary"
              >Tertiary Alert</b-alert
            >
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Success Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="success"
              >Success Alert</b-alert
            >
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Info Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="info">Info Alert</b-alert>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Warning Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="warning"
              >Warning Alert</b-alert
            >
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Danger Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="danger"
              >Danger Alert</b-alert
            >
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Light Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="light">Light Alert</b-alert>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Dark Colour</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-alert show dismissible fade variant="dark">Dark Alert</b-alert>
          </b-col>
        </b-row>
      </div>
    </div>

    <div id="badges" class="bs-docs-section my-8">
      <div class="section-header mb-8">
        <h3 class="mb-0 p-3 bg-dark rounded text-white">
          Badges
        </h3>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Contextual Variations</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-badge variant="primary">Primary</b-badge>
            <b-badge variant="secondary">Secondary</b-badge>
            <b-badge variant="tertiary">Tertiary</b-badge>
            <b-badge variant="success">Success</b-badge>
            <b-badge variant="danger">Danger</b-badge>
            <b-badge variant="warning">Warning</b-badge>
            <b-badge variant="info">Info</b-badge>
            <b-badge variant="light">Light</b-badge>
            <b-badge variant="dark">Dark</b-badge>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Pill Variations</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-badge pill variant="primary">Primary</b-badge>
            <b-badge pill variant="secondary">Secondary</b-badge>
            <b-badge pill variant="tertiary">Tertiary</b-badge>
            <b-badge pill variant="success">Success</b-badge>
            <b-badge pill variant="danger">Danger</b-badge>
            <b-badge pill variant="warning">Warning</b-badge>
            <b-badge pill variant="info">Info</b-badge>
            <b-badge pill variant="light">Light</b-badge>
            <b-badge pill variant="dark">Dark</b-badge>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Actionable Badges</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-badge href="#top" variant="primary">Primary</b-badge>
            <b-badge href="#top" variant="secondary">Secondary</b-badge>
            <b-badge href="#top" variant="tertiary">Tertiary</b-badge>
            <b-badge href="#top" variant="success">Success</b-badge>
            <b-badge href="#top" variant="danger">Danger</b-badge>
            <b-badge href="#top" variant="warning">Warning</b-badge>
            <b-badge href="#top" variant="info">Info</b-badge>
            <b-badge href="#top" variant="light">Light</b-badge>
            <b-badge href="#top" variant="dark">Dark</b-badge>
          </b-col>
        </b-row>
      </div>
    </div>

    <div id="breadcrumbs" class="bs-docs-section my-8">
      <div class="section-header mb-8">
        <h3 class="mb-0 p-3 bg-dark rounded text-white">
          Breadcrumb
        </h3>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Breadcrumb</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-breadcrumb>
              <b-breadcrumb-item href="#home">Home</b-breadcrumb-item>
              <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
              <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
              <b-breadcrumb-item active>Baz</b-breadcrumb-item>
            </b-breadcrumb>
          </b-col>
        </b-row>
      </div>
    </div>

    <div id="buttons" class="bs-docs-section my-8">
      <div class="section-header">
        <h3 class="mb-0 p-3 bg-dark rounded-top text-white">
          Buttons
        </h3>
      </div>
      <div id="button-variants" class="section-header mb-8">
        <h5 class="mb-0 p-3 bg-light rounded-bottom">
          Variants
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Contextual Variations</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button variant="primary">Primary</b-button>
            <b-button variant="secondary">Secondary</b-button>
            <b-button variant="tertiary">Tertiary</b-button>
            <b-button variant="success">Success</b-button>
            <b-button variant="danger">Danger</b-button>
            <b-button variant="warning">Warning</b-button>
            <b-button variant="info">Info</b-button>
            <b-button variant="light">Light</b-button>
            <b-button variant="dark">Dark</b-button>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Outline Variations</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button variant="outline-primary">Primary</b-button>
            <b-button variant="outline-secondary">Secondary</b-button>
            <b-button variant="outline-tertiary">Tertiary</b-button>
            <b-button variant="outline-success">Success</b-button>
            <b-button variant="outline-danger">Danger</b-button>
            <b-button variant="outline-warning">Warning</b-button>
            <b-button variant="outline-info">Info</b-button>
            <b-button variant="outline-light">Light</b-button>
            <b-button variant="outline-dark">Dark</b-button>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Pill Variations</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button pill variant="primary">Primary</b-button>
            <b-button pill variant="secondary">Secondary</b-button>
            <b-button pill variant="tertiary">Tertiary</b-button>
            <b-button pill variant="success">Success</b-button>
            <b-button pill variant="danger">Danger</b-button>
            <b-button pill variant="warning">Warning</b-button>
            <b-button pill variant="info">Info</b-button>
            <b-button pill variant="light">Light</b-button>
            <b-button pill variant="dark">Dark</b-button>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Square Variations</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button squared variant="primary">Primary</b-button>
            <b-button squared variant="secondary">Secondary</b-button>
            <b-button squared variant="tertiary">Tertiary</b-button>
            <b-button squared variant="success">Success</b-button>
            <b-button squared variant="danger">Danger</b-button>
            <b-button squared variant="warning">Warning</b-button>
            <b-button squared variant="info">Info</b-button>
            <b-button squared variant="light">Light</b-button>
            <b-button squared variant="dark">Dark</b-button>
          </b-col>
        </b-row>
      </div>
      <div id="button-sizes" class="section-header my-8">
        <h5 class="mb-0 p-3 bg-light rounded">
          Sizes
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Small Size</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button size="sm" variant="primary">Primary</b-button>
            <b-button size="sm" variant="secondary">Secondary</b-button>
            <b-button size="sm" variant="tertiary">Tertiary</b-button>
            <b-button size="sm" variant="success">Success</b-button>
            <b-button size="sm" variant="danger">Danger</b-button>
            <b-button size="sm" variant="warning">Warning</b-button>
            <b-button size="sm" variant="info">Info</b-button>
            <b-button size="sm" variant="light">Light</b-button>
            <b-button size="sm" variant="dark">Dark</b-button>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Large Size</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button size="lg" variant="primary">Primary</b-button>
            <b-button size="lg" variant="secondary">Secondary</b-button>
            <b-button size="lg" variant="tertiary">Tertiary</b-button>
            <b-button size="lg" variant="success">Success</b-button>
            <b-button size="lg" variant="danger">Danger</b-button>
            <b-button size="lg" variant="warning">Warning</b-button>
            <b-button size="lg" variant="info">Info</b-button>
            <b-button size="lg" variant="light">Light</b-button>
            <b-button size="lg" variant="dark">Dark</b-button>
          </b-col>
        </b-row>
      </div>
      <div id="button-groups" class="section-header my-8">
        <h5 class="mb-0 p-3 bg-light rounded">
          Groups
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Horizontal</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button-group size="sm">
              <b-button>Left</b-button>
              <b-button>Middle</b-button>
              <b-button>Right</b-button>
            </b-button-group>
            <b-button-group>
              <b-button>Left</b-button>
              <b-button>Middle</b-button>
              <b-button>Right</b-button>
            </b-button-group>
            <b-button-group size="lg">
              <b-button>Left</b-button>
              <b-button>Middle</b-button>
              <b-button>Right</b-button>
            </b-button-group>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Vertical</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button-group size="sm" vertical>
              <b-button>Top</b-button>
              <b-button>Middle</b-button>
              <b-button>Bottom</b-button>
            </b-button-group>
            <b-button-group vertical>
              <b-button>Top</b-button>
              <b-button>Middle</b-button>
              <b-button>Bottom</b-button>
            </b-button-group>
            <b-button-group size="lg" vertical>
              <b-button>Top</b-button>
              <b-button>Middle</b-button>
              <b-button>Bottom</b-button>
            </b-button-group>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Dropdown Support</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button-group>
              <b-button>Button</b-button>
              <b-dropdown right text="Menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
              <b-dropdown right split text="Split Menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Item 3</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-col>
        </b-row>
      </div>
      <div id="button-toolbar" class="section-header my-8">
        <h5 class="mb-0 p-3 bg-light rounded">
          Toolbar
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Toolbar</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <b-button-group class="mx-1">
                <b-button>&laquo;</b-button>
                <b-button>&lsaquo;</b-button>
              </b-button-group>
              <b-button-group class="mx-1">
                <b-button>Edit</b-button>
                <b-button>Undo</b-button>
                <b-button>Redo</b-button>
              </b-button-group>
              <b-button-group class="mx-1">
                <b-button>&rsaquo;</b-button>
                <b-button>&raquo;</b-button>
              </b-button-group>
            </b-button-toolbar>
          </b-col>
        </b-row>
      </div>
    </div>

    <div id="cards" class="bs-docs-section my-8">
      <div class="section-header">
        <h3 class="mb-0 p-3 bg-dark rounded-top text-white">
          Cards
        </h3>
      </div>
      <div id="card-types" class="section-header mb-8">
        <h5 class="mb-0 p-3 bg-light rounded-bottom">
          Types
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Regular</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/300/150/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 300px;"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <div class="w-100 my-2"></div>
          <b-col sm="12" md="3">
            <span class="h6 text-light">Horizontal</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://picsum.photos/300/300/?image=20"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div id="card-variants" class="section-header my-8">
        <h5 class="mb-0 p-3 bg-light rounded">
          Variants
        </h5>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Colour Variants</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-card-group deck class="mb-4">
              <b-card
                bg-variant="primary"
                text-variant="white"
                header="Primary"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
              <b-card
                bg-variant="secondary"
                text-variant="white"
                header="Secondary"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
              <b-card
                bg-variant="tertiary"
                text-variant="white"
                header="Tertiary"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
            </b-card-group>
            <b-card-group deck class="mb-4">
              <b-card
                bg-variant="success"
                text-variant="white"
                header="Success"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
              <b-card
                bg-variant="info"
                text-variant="white"
                header="Info"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
              <b-card
                bg-variant="warning"
                text-variant="white"
                header="Warning"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
            </b-card-group>
            <b-card-group deck class="mb-4">
              <b-card
                bg-variant="danger"
                text-variant="white"
                header="Danger"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
              <b-card bg-variant="light" header="Light" class="text-center">
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
              <b-card
                bg-variant="dark"
                header="Dark"
                text-variant="white"
                class="text-center"
              >
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </div>
    </div>

    <div id="dropdowns" class="bs-docs-section my-8">
      <div class="section-header mb-8">
        <h3 class="mb-0 p-3 bg-dark rounded text-white">
          Dropdowns
        </h3>
      </div>
      <div class="section-content my-4">
        <b-row align-v="center">
          <b-col sm="12" md="3">
            <span class="h6 text-light">Sizes</span>
          </b-col>
          <b-col sm="12" md="9">
            <b-dropdown id="dropdown-1" size="sm" text="Dropdown Small">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-2" text="Dropdown Default">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-3" size="lg" text="Dropdown Large">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      metaTitle: 'Bootstrap Kitchen Sink',
      metaDescription: 'This is the Bootstrap Kitchen Sink page.',
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDescription,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDescription,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
