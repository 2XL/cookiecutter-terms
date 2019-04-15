import re
import sys
import os
from os import listdir
import shutil

placeholder = '{{ cookiecutter.placeholder }}'

output_terms = '{{cookiecutter.filename}}.md'
output_component = '{{cookiecutter.component_name}}.js'

# todo read both files, rewrite Terms.js


# todo generate pdf from terms_and_conditions.md
components_block = None
if os.path.isfile(output_terms) and os.path.isfile(output_terms):
    with open(output_terms) as terms:
        terms_block = ''.join(terms.readlines())
        with open(output_component) as components:
            components_block = ''.join(components.readlines())
            components_block = components_block.replace(placeholder, terms_block)

        with open(output_component, 'w') as components:
            components.write(components_block)

project_root = os.path.dirname(os.getcwd())
components_dirname = '{{cookiecutter.component}}'
react_app_dirname = 'app'

if os.path.isfile(os.path.join(project_root, components_dirname, 'App.js')):
    shutil.move(os.path.join(project_root, components_dirname, 'App.js'),
                os.path.join(project_root, react_app_dirname, 'src'))

if os.path.isdir(os.path.join(project_root, components_dirname)) and os.path.isdir(
        os.path.join(project_root, react_app_dirname, 'src')):
    print("react src dir for component found")
    shutil.move(os.path.join(project_root, components_dirname), os.path.join(project_root, react_app_dirname, 'src'))

print("POST_GEN")
