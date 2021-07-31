const path = require('path');
const fs = require('fs');
const fsPromise = fs.promises;
const startCase = require('lodash/startCase');
const camelCase = require('lodash/camelCase');
const svgsPath = __dirname + '/src/svgs/';
const iconsPath = __dirname + '/src/icons/';

const componentTemplate = `
import React from 'react';
import { IOctosellsIcons } from '../interfaces';

export const $NAME$: React.FunctionComponent<IOctosellsIcons> = ({
  size = 28,
  width,
  height,
  color = '#121212',
}) => {
  return (
    
    $CONTENT$
  );
};

export default $NAME$;
`;

(async () => {
  try {
    // Index content
    let indexContent = '';
    let componentNames = [];

    // Read svgs directory
    const files = await fsPromise.readdir(svgsPath);

    // Process on individual file
    for (const file of files) {
      // Read svg content
      const content = await fsPromise.readFile(svgsPath + file, 'utf8');

      // Extract file name without extensions
      const [fileName] = file.split('.');

      // Make component name
      const componentName = startCase(fileName).split(' ').join('');
      componentNames.push(componentName);

      // Make component code
      let componentCode = componentTemplate
        .split('$NAME$')
        .join(componentName)
        .split('$CONTENT$')
        .join(content)
        .replace(/width="\d+"/, 'width={width || size}')
        .replace(/height="\d+"/, 'height={height || size}');

      if (componentCode.match(/stroke="#([0-9a-f]{3}|[0-9a-f]{6})"/g)) {
        componentCode = componentCode.replace(
          /stroke="#([0-9a-f]{3}|[0-9a-f]{6})"/i,
          'stroke={color}'
        );
      }
      if (componentCode.match(/fill="#([0-9a-f]{3}|[0-9a-f]{6})"/g)) {
        componentCode = componentCode.replace(
          /fill="#([0-9a-f]{3}|[0-9a-f]{6})"/i,
          'fill={color}'
        );
      }

      // Write file
      await fsPromise.writeFile(
        iconsPath + componentName + '.tsx',
        componentCode,
        'utf8'
      );

      console.log('Made component ' + componentName);
    }
    indexContent = componentNames
      .map((item) => `export {default as ${item}} from './${item}'`)
      .join(';');

    await fsPromise.writeFile(iconsPath + 'index.ts', indexContent);
  } catch (e) {
    console.log(e);
  }
})();
