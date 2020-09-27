module.exports = (app, db) => {
    app.get("/userProfile/:id", (req, res) =>
      db.userProfile.findByPk(req.params.id).then(result => res.json(result))
    );
  };