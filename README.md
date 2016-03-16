
1) npm init
	This will create package.json

2) Install Bower --> To maintain client side dependencies
	npm install bower --save

3) create a public folder which will have all the client side files(html,js,css)
	mkdir public
 
4) We will create two dir under public folder. 
	lib --> This will have all the client side dependencies like bootstrap, angular , angular route
	module --> this will have all the different modules of the application. Views like view1 and view2
	/public
			/lib
			/module
				/view1
				/view2

5) Create a file ".bowerrc" and add the below entry. This will make sure that the client side dependencies that we install goes under the specified folder mentioned below. 
	{
		"directory":"public/lib"
	}

6) Before installing client side dependencies using bower, we will need a "bower.json" file
	To create this "bower init"

7) Now to install the dependencies
	bower install angular --save
	bower install angular-route --save
	bower install bootstrap --save
	bower install jquery --save

8) Now we will create an "index.html" file under /public. THis page will be served by the app when it loads for the first time




