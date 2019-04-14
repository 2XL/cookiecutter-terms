import re
import sys


PLACEHOLDER_REGEXP = r'@@@'

placeholder = '{{ cookiecutter.placeholder }}'
output_terms = ''
output_component = ''

# todo read both files, rewrite Terms.js

if not re.match(PLACEHOLDER_REGEXP, placeholder):
    print('ERROR: %s is not a valid placeholder!' % placeholder)

    # exits with status 1 to indicate failure
    sys.exit(1)


# todo generate pdf from terms_and_conditions.md

