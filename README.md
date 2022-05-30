# dashboards

## Project setup
```
npm install
```
(assuming you have npm installed on your machine)

### Compiles and hot-reloads for development
```
npm run dev
```
Then it will run at localhost:3000
(or another port, it'll tell you)

Or
```
npm run dev -- --host
```
Then it will expose an IP (your-ip:3000)

### Compiles and minifies for production
```
npm run build
```
This will create the HTML/CSS/JS files and put them in /dist.
This is all we need to run, no special server, just a regular web server (Apache, NGinx, etc)

Note that if we open it locally (double click index.html > get a file://something address) some functions may not work.
That's because the browser limits file:// urls better. Best to avoid that if we can.

Subdirs:
```
npm run build -- --base="/foo/"
```

/* THIS IS IRRELEVANT SINCE WE CHANGED TO HASH MODE (index.html#foo rather than /foo)
### Destination server & routes
#### Or: are you getting 404s in production?
The server should rewrite all 404s, or at least the ones that are valid paths, into index.html.
For example, if the router (/src/router/index) has a path for /foo, containing your lovely "Foo" screen, 
then on the **web server level** you need to have requests for /foo handled by index.html.
We have it working for Apache, handled by /public/.htaccess . Add other files there and the build process will put them right under /dist/.

Examples:
https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
*/

## Folder structure

### The important bits

/dist : Compiled ready for production static files
/src : Code!
/src/layouts/ : Layouts, e.g. the blue frame and logo etc. There's currently one.
/src/views/ : Pages. e.g. canteen-large, entrance-info etc. We can name them anything, I suggest naming locations by location.
    Files under "views" contain partial CSS grid settings and widget calls (there will be demos)
/src/widgets : Components that are widgets. e.g. graphs, news marquee, schedule.
/src/components : Components that are not widgets.
/src/router : Does URLs

/src/assets : Static files that are relevant for dev time
/public/ : Static files that will just go into /dist (e.g. favicon, htaccess)

Want a new widget, not sure how? Ask Galia <<emfcamp@ailaG.net>> or duplicate one that you like. Don't forget to add it to /router/index.


## TODO
Testing?
Widgets:
 - Twitter?
 - Generic API readers? (that is, make the schedule widget into a simple module that does APIs and a widget that uses it). <br> 
	We could just copypaste the schedule widget, but will DRY bite us then?
 - any new ones that come up

Define rebel stuff. Do we change layouts? Do we create a store that defines rebel_level and does things accordingly? Do we change the root element's class and have CSS that responds?
