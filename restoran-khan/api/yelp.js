import axios from "axios";

export default axios.create({
  baseUrl: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0nqqMWxASfxglzDFHAA8Kc-HRK2q-RCt1b_C70nruzybz6CuZdJWZmwv2pkvEpv3y7lt0zNdJoR-3VM-gi2GPFJidDFxUKuwrR3k7yEaRbUy6fcIYD_NQvJympXtZXYx",
  },
});
