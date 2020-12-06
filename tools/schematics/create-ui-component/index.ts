import { strings, normalize } from '@angular-devkit/core';
import {
  chain,
  apply,
  url,
  move,
  mergeWith,
  applyTemplates,
  Rule,
  Tree,
  SchematicContext,
} from '@angular-devkit/schematics';

const generateComponentFiles = (schema) => {
  return (tree, context) => {
    const pagesDir = `libs/ui/src/lib/${strings.dasherize(schema.name)}`;

    const templateSource = apply(url('./files'), [
      applyTemplates({
        name: schema.name,
        classify: strings.classify,
        dasherize: strings.dasherize,
      }),
      move(normalize(pagesDir)),
    ]);

    console.log('\x1b[33m');
    console.log('NOTE: Remember to add your component in the UiModule export.');
    console.log('\x1b[0m');

    return mergeWith(templateSource);
  };
};

export default function (schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => chain([generateComponentFiles(schema)])(tree, context);
}
