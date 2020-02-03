let id = 4;
const trails = [
  {
    id: 0,
    name: "Camelback Mountain",
    location: "Phoenix, AZ",
    difficulty: "Medium",
    review: "This challenging hike up the east side of Camelback Mountain has beautiful views of Phoenix and Scottsdale, and is not often crowded. You will begin on switchbacks heading up the mountain, with trail markers to guide you at first. The hike increases in difficulty about 1 mile in, when you reach the saddle, and you will have to do some scrambling during the last stretch to the top.",
    imageURL: "https://www.omnihotels.com/-/media/images/hotels/phxrst/activities/phxrst-omni-scottsdale-camelback.jpg?h=660&la=en&w=1170://www.theoutbound.com/photos/136798"
  },
  {
    id: 1,
    name: "Piestewa Peak",
    location: "Piestewa Peak Recreation",
    difficulty: "Medium",
    review: "not now",
    imageURL: "https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2014/12/hike2.jpg"
  },
  {
    id: 2,
    name: "Navajo Falls",
    location: "Supai, AZ",
    difficulty: "Hard",
    review: "",
    imageURL: "https://images.theoutbound.com/uploads/1468655963590/0qb7k110luha/5b997a6cc3820f3dbb502204f153a814?w=1200&h=630&fit=crop&auto=format&s=df1c286819c8fe12518bb268b34fbcdf"
  },
  {
    id: 3,
    name: "Beaver Falls",
    location: "Supai, AZ",
    difficulty: "Hard",
    review: "not now",
    imageURL: "https://arizonahighways.files.wordpress.com/2012/06/kathleen-wasselle-croft-beaver-falls.png"
  }
];

module.exports = {
  //Create new trail
  addTrail: (req, res) => {
    const { name, location, difficulty, review, imageURL } = req.body;

    let newTrails = {
      id: id++,
      name,
      location,
      difficulty,
      review,
      imageURL
    };
    trails.push(newTrails);
    res.status(200).send(trails)
  },

  //Get info
  getTrails: (req, res) => {
    console.log('get trais hit')
    res.status(200).send(trails);
  },

  //Update info
  updateInfo: (req, res) => {
    let { id } = req.params;
    const { name, location, difficulty, review, imageURL } = req.body;

    let index = trails.findIndex(trail => {
      return parseInt(trail.id) === parseInt(id);
    });

    let updateTrail = {
      id,
      name,
      location,
      difficulty,
      review,
      imageURL
    };
    trails.splice(index, 1, updateTrail);
    res.status(200).send(trails);
  },

  //Delete
  deleteTrail: (req, res) => {
    let { id } = req.params;

    let index = trails.findIndex(trail => {
      return parseInt(trail.id) === parseInt(id);
    });
    trails.splice(index, 1);
    res.status(200).send(trails);
  }
};
