import re
import sys

placeholder = '{{ cookiecutter.placeholder }}'

output_terms = '{{cookiecutter.filename}}.md'
output_component = '{{cookiecutter.component_name}}.js'

# todo read both files, rewrite Terms.js


# todo generate pdf from terms_and_conditions.md
import os.path

# import pdb; pdb.set_trace()

print(output_terms, os.path.isfile(output_terms))
print(output_component, os.path.isfile(output_component))

components_block = None
if os.path.isfile(output_terms) and os.path.isfile(output_terms):
    with open(output_terms) as terms:
        terms_block = ''.join(terms.readlines())
        with open(output_component) as components:
            components_block = ''.join(components.readlines())
            components_block = components_block.replace(placeholder, terms_block)

        with open(output_component, 'w') as components:
            components.write(components_block)

print("POST_GEN")
