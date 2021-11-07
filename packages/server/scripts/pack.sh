pack=$@

for $handler in change show
do
  BP_LAUNCHPOINT="./dist/handlers/$handler.js" $pack build "app/server/$handler" --buildpack gcr.io/paketo-buildpacks/node-start --builder paketobuildpacks/builder:base
done