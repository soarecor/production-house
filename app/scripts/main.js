var Home = Vue.extend({
    template: '#home'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var router = new VueRouter();

var App = Vue.extend({
	el: '#app',

	ready: function(){
		this.fetchPosts();
	},

	methods: {
		fetchPosts: function(){
			this.$http.get('/php/api.php', function(posts) {
				this.$set('posts', posts);
			})
		}
	}
});

router.map({
	'/foo': {
		component: Home
	},
	'/bar': {
		component: Bar
	}	
});

router.start(App, '#app')

// var home = function () {$(".project-modal").hide()};
// var author = function () { console.log("author"); };
// var books = function () { console.log("books"); };
// var viewProject = function (projectId) {
// 	var title, 
// 		description,
// 		imgURL;
// 	$(".project-modal").show();
//     console.log("viewBook: bookId is populated: " + projectId);
//     for (var i = 0, n = app.posts.length; i < n; i++){
//     	if (app.posts[i].projectID == projectId){
//     		console.log("Matched! " + app.posts[i].projectName);
//     		title = app.posts[i].projectName;
//     		description = app.posts[i].projectDescr;
//     		imgURL = app.posts[i].imageURL;
//     		$(".project-modal").html("<a href='#/'>back</a>" + "<h1>" + title + "</h1>" + "<p>" + description + "</p>" + "<img src='http://phoenix.sheridanc.on.ca/~shertv/SPH/pImage/" + imgURL + "'>");
//     		break;
//     	}
//     }
// };

// var routes = {
// 	'/': home,
//     '/author': author,
//     '/books': [books, function() {
//       console.log("An inline route handler.");
//     }],
//     '/project/:projectId': viewProject
// };

// var router = Router(routes);

// router.init();