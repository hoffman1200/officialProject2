var db = require("../models");
const { sequelize } = require("../models");

module.exports = function(app) {

    //Route for getting all the posts
    app.get("/api/posts", function(req, res) {
        db.Post.findAll({}).then(function(data) {
            console.log('All Posts: ', data);
            res.json(data);
        });
    });

      // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Post.findOne({
          where: {
            id: req.params.id
          },
        //   include: [db.Post]
        }).then(function(dbPost) {
          res.json(dbPost);
        });
      });


      // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        db.Post.create(req.body).then(function(data) {
            console.log('New Post Created: ', data)
            res.json(data);
        });
    });

      // DELETE route for deleting posts. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/posts/:id", function(req, res) {
      // We just have to specify which post we want to destroy with "where"
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(data) {
        res.json(data);
      });

    });

      // PUT route for updating posts. We can get the updated post data from req.body
    app.put("/api/posts", function(req, res) {
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.Post.update(

          {
                title: req.body.title,
                category: req.body.category,
                body: req.body.body,
                date: req.body.date,
                location: req.body.location,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            }, 
            // req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(data) {
                console.log('request', req.body)
        res.json(data);
      });
    });



}