import re
import sys
import os
import shutil

project_root = os.path.dirname(os.getcwd())
components_dirname = '{{cookiecutter.component}}'
react_app_dirname = 'app'

EMAIL_REGEXP = r'[\w\.-]+@[\w\.-]+(\.[\w]+)+'

email = '{{ cookiecutter.email }}'

if not re.match(EMAIL_REGEXP, email):
    print('ERROR: %s is not a valid email!' % email)

    # exits with status 1 to indicate failure
    sys.exit(1)

print("Pre/ remove compoenent dir if exist")
print(os.path.join(project_root, react_app_dirname, 'src', components_dirname))
if os.path.isdir(os.path.join(project_root, react_app_dirname, 'src', components_dirname)):
    print("react src dir for {{cookiecutter.component}} FOUND")
    print(os.path.join(project_root, react_app_dirname, 'src', components_dirname))
    shutil.rmtree(os.path.join(project_root, react_app_dirname, 'src', components_dirname))
    if not os.path.isdir(os.path.join(project_root, react_app_dirname, 'src', components_dirname)):
        print("react src dir for {{cookiecutter.component}} REMOVED")


if os.path.isfile(os.path.join(project_root, react_app_dirname, 'src', 'App.js')):
    print("react src dir for App.js FOUND")
    os.remove(os.path.join(project_root, react_app_dirname, 'src', 'App.js'))
    print("react src dir for App.js REMOVED")

# os.rename(os.path.join(project_root, components_dirname), os.path.join(project_root, react_app_dirname, 'src'))


print("PRE_GEN")
