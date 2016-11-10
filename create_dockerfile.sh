if [ -d $2 ]; then
	cat $2/Dockerfile
else
	node builder_commands.js
	node detect_technology.js $1 > op.txt
	node populate_dockerfile.js > Dockerfile
	cat Dockerfile
	cp Dockerfile $2
	cp dockerize.sh $2	
fi