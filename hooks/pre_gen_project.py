import re
import sys


EMAIL_REGEXP = r'[\w\.-]+@[\w\.-]+(\.[\w]+)+'

email = '{{ cookiecutter.email }}'

if not re.match(EMAIL_REGEXP, email):
    print('ERROR: %s is not a valid email!' % email)

    # exits with status 1 to indicate failure
    sys.exit(1)

print("PRE_GEN")
