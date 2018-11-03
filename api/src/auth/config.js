import { ExtractJwt } from "passport-jwt";

export default {
  secretOrKey: "1872@^6817!3^81536@7##158#21!734982378@95",
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT")
};
