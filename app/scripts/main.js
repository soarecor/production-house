new Vue({
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
})