# queer.code() p5 template
Welcome friend! 

This is a template repo for projects using p5.js.

It uses **typescript** and **webpack** to provide a smooth development experience.

*Woah! What are those?* 

Well, **typescript** is a superset of javascript that gives us a few handy features while writing our code that we can't get with javascript alone. **Webpack** does a few things, but here we're using it mostly as a *compiler* - it takes our source code typescript files that we write and bundles them into a single, optimized javascript file that we can run in a browser. We're also using webpack to run a *development server*, which automatically re-compiles our code as soon as we make changes to and save a file! This makes development a lot quicker and more fun.

You can read more about typescript and webpack [here](https://medium.freecodecamp.org/learn-typescript-in-5-minutes-13eda868daeb) and [here](https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d).

The good thing is that you don't have to have a deep understanding of either of these technologies to use this repo. In fact, we don't recommend stressing over the specifics yet! Follow the directions to get started, and seek out greater detail later on as you develop intuition about how it's working on a practical level. 

# How to use this repo

- Fork the project to your own github page and give it a new name.
- Clone the fork to your local by entering `git clone yourUrlHere` in a terminal. You can find the url on the home page of your forked repo on github. 
- `cd  ` into the newly created folder and type `npm install` . This will download and install all the neccessary libraries.
- Type `npm run start` . This will start a local development server at `http://localhost:8080/` (that means IP address = localhost, port = 8080).
- open Chrome and navigate to ` http://localhost:8080/`. You should see a glorious p5.js project!
- make some changes to the files in the `sketch` folder. As you save, you'll see the sketch in your browser update in real time!
- When you're happy with how things look in your development server, there's one more step before you can deploy this beauty onto the net for all to see. Type `npm run build`. This tells webpack to bundle your files into an optimized, production ready package. You're now ready to go live! Commit your changes and push them to github, and make sure github pages is enabled. Your creation is live for all the world to see. Celebrate your accomplishment :' )

