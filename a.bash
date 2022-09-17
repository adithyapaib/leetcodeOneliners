#  write a bash script to change the name of all the .md files in this directory to README.md also inside directories

for i in $(find . -name "*.md"); do
    mv $i README.md
done
