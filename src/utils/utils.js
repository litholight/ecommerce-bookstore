export const isAdmin = role => {
  if (role === "Admin") {
    return "/admin/dashboard";
  } else {
    return "/user/dashboard";
  }
};
