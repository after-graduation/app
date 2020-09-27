module.exports = (app, db) => {
    app.post("/user", (req, res) =>
    db.User
      .create({
        userId: req.body.userId,
        type: req.body.type
      })
      .then(result => res.json(result))
  );


  app.put('/users', (req, res) =>
  db.User
    .update(
      {
        userId: req.body.userId,
        type: req.body.type
      },
    )
    .then(result => res.json(result))
);


app.delete('/user/:id', function(req,res) {
    db.User.destroy({
        where: {
            id: req.params.id && !db.userProfile.email
        }
    }).then(function(result){
        res.json(result);
    })
});


app.get("/user/:type", (req, res) =>
db.User.findByPk(req.params.type).then(result => res.json(result))
);


}