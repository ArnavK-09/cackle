// imports
import bcrypt from "bcrypt";
import { generateTokens, setupRefreshTokenCookie } from "~~/server/helpers/jwt";

// handler
export default defineEventHandler(async (e) => {
  /* Validating Body */
  // getting body content
  const Body = await readBody(e);

  // validating body
  if (!Body) {
    throw createError({
      statusCode: 400,
      statusMessage: "Empty Body",
    });
  }

  // extracting Data
  const { username, password } = Body;

  // checking for missing info
  if (
    !username ||
    !password ||
    username.trim() == "" ||
    password.trim() == ""
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing Params!",
    });
  }

  /* getting User */
  const user = null; //todo

  // if no user
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username Or Pass invalid",
    });
  }

  /* Checking Pass */
  const PassValid = bcrypt.compare(password, user.password);

  // if not valid
  if (!PassValid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username Or Pass invalid",
    });
  }

  /* Creating Tokens */
  const userTokens = generateTokens(user);

  // adding cookie
  setupRefreshTokenCookie(e, userTokens.refreshToken);

  // returning access token
  return {
    access_token: userTokens.accessToken,
    user: user,
  };
});
