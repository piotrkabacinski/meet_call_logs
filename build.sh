OUT_DIR="dist"

./node_modules/.bin/esbuild src/*.ts src/*.css --bundle --minify --outdir=$OUT_DIR && \
cp -R ./src/icons $OUT_DIR && \
find ./src -type f \( -name "*.html" -o -name "*.json" \) -exec cp {} ./$OUT_DIR \;
