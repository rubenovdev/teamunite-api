const assert = require("assert");

module.exports.insertProjects = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("projects");
  // Insert some documents
  collection.insertMany(
    [
      {
        title: "title1",
        description: "description1",
        user: "id1"
      },
      {
        title: "title2",
        description: "description2",
        user: "id2"
      },
      {
        title: "title3",
        description: "description3",
        user: "id3"
      }
    ],
    function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};

module.exports.findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("projects");
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};
