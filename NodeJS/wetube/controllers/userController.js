import routes from "../routers";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Join" });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const user = (req, res) => {
  res.send("user page ");
};

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Details" });
};

export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};

export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
