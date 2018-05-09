require('dotenv').config();
const snoowrap = require('snoowrap');

console.log(process.env.DELETE_COMMENTS);
process.exit();

const reddit = new snoowrap({
  userAgent: 'rage-quit',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

const user = reddit.getUser(process.env.REDDIT_USER);

var promises = [];

user.getSubmissions().fetchAll().then(posts=>{
	user.getComments().fetchAll().then(comments=>{
		comments.forEach(comment=>{
			console.log('Comment: '+comment.link_permalink);
			if(process.env.DELETE_COMMENTS == 0) promises.push(comment.edit(process.env.QUIT_MSG));
			else promises.push(comment.delete());
		});
		posts.forEach(post=>{
			console.log('Submission: '+post.link_permalink);
			if(process.env.DELETE_COMMENTS == 0) promises.push(post.edit(process.env.QUIT_MSG));
			else promises.push(post.delete());
		});
		Promise.all(promises).then(()=>{
			console.log("All Done...");
			process.exit();
		});
	});
});
