exports.test = async function (req, res) {
  const locals = {
    title: "Dashboard",
    description: "Its  a tool for note taking straight in your browser",
    userName: "Sudais",
  };

  res.render("dashboard/index", {
    title: locals.title,
    description: locals.description,
    layout: "../views/layouts/dashboard",
    userName: "Sudais",
    notes: [
      {
        title: "My first note",
        content: "This is my first note",
        date: "2021-11-01",
      },
      {
        title: "My second note",
        content: "This is my second note",
        date: "2021-11-02",
      },
    ],
  });
};
