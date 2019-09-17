#!/bin/bash -
#=============================================
#          FILE: build.sh
#         USAGE: ./build.sh
#   DESCRIPTION: Compiles the web application for distribution in dist folder
#=============================================
set -o nounset # Treat unset variables as an error
#---------------------------------------
# COLORS
#---------------------------------------
GREEN="\e[0;32m"
declare -r distDir="./dist"
declare -r css="./css/style.css"
declare -r js="./js/*.js"
declare -r html="./index.html"
declare -r img="./imgs/"
rm -rf $distDir
mkdir $distDir
mkdir $distDir/css
mkdir $distDir/js
mkdir ${distDir}/${img}
grep -v 'eruda' $html > tmp~.html
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true tmp~.html -o ${distDir}/index.html
rm tmp~.html
uglifycss ${css} > ${distDir}/css/style.css
uglifyjs ${js} > ${distDir}/js/main.js
if [ -d "${img}" ]; then
cp ${imgs}/* ${distDir}/${img}/
fi
printf "${GREEN}Minified Successfully\n"
printf "${GREEN}Build Successful\n\e[0m"
if [ -n "$1" ]; then
  git add dist
  git commit -m "$1"
  git push
fi
