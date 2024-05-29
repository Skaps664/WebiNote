const locals = {
  title: "Webi Note",
  description: "Not taking app for practice purposes",
};

// Get Home Page

exports.homePage = async function (req, res) {
  const locals = {
    title: "HomePage",
    description: "Not taking app for practice purposes",
  };

  res.render("homePage", {
    title: locals.title,
    description: locals.description,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async function (req, res) {
  const locals = {
    title: "AboutPage",
    description: "Its  a tool for note taking straight in your browser",
  };

  res.render("about", { title: locals.title, description: locals.description });
};
