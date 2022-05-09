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


# Folder structure
## The important bits

/dist : Compiled ready for production static files
/src : Code!
/src/layouts/ : Layouts, e.g. the blue frame and logo etc. There's currently one.
/src/views/ : Pages. e.g. canteen-large, entrance-info etc. We can name them anything, I suggest naming locations by location.
    Files under "views" contain partial CSS grid settings and widget calls (there will be demos)
/src/widgets : Components that are widgets. e.g. graphs, news marquee, schedule.
/src/components : Components that are not widgets.
/src/router : Does URLs

Want a new widget? Ask Galia <emfcamp@ailaG.net> or duplicate one that you like. Don't forget to add it to /router/index.


# TODO
Testing?
Widgets:
 - finish what we have, make them modifiable
 - schedule
 - any new ones that come up
Define rebel stuff. Do we change layouts? Do we create a store that defines rebel_level and does things accordingly? Do we change the root element's class and have CSS that responds?