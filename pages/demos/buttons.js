import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./buttons${props.lang}.md`)}
      demos={{
        'pages/demos/buttons/TextButtons.js': {
          js: require('docs/src/pages/demos/buttons/TextButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/TextButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/OutlinedButtons.js': {
          js: require('docs/src/pages/demos/buttons/OutlinedButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/OutlinedButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/ContainedButtons.js': {
          js: require('docs/src/pages/demos/buttons/ContainedButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/ContainedButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/FloatingActionButtons.js': {
          js: require('docs/src/pages/demos/buttons/FloatingActionButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/FloatingActionButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/FloatingActionButtonZoom.js': {
          js: require('docs/src/pages/demos/buttons/FloatingActionButtonZoom').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/FloatingActionButtonZoom'), 'utf8')
`,
        },
        'pages/demos/buttons/ButtonSizes.js': {
          js: require('docs/src/pages/demos/buttons/ButtonSizes').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/ButtonSizes'), 'utf8')
`,
        },
        'pages/demos/buttons/IconButtons.js': {
          js: require('docs/src/pages/demos/buttons/IconButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/IconButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/IconLabelButtons.js': {
          js: require('docs/src/pages/demos/buttons/IconLabelButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/IconLabelButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/CustomizedButtons.js': {
          js: require('docs/src/pages/demos/buttons/CustomizedButtons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/CustomizedButtons'), 'utf8')
`,
        },
        'pages/demos/buttons/ButtonBases.js': {
          js: require('docs/src/pages/demos/buttons/ButtonBases').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/buttons/ButtonBases'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
