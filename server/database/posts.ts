// imports
import { prisma as db } from "./";

/* POST METHODS */
// create post
function createPost(data: any) {
  return db.post.create({ data: data });
}

// get all posts
function getAllPosts(params: any = {}) {
  return db.post.findMany({
    ...params,
  });
}

// get post by id
function getPostById(id: string, params: any = {}) {
  return db.post.findUnique({
    ...params,
    where: {
      id: id,
    },
  });
}

/* MEDIA FILES METHOD */

// create media file
function createMediaFile(data: any) {
  return db.mediaFile.create({ data: data });
}

// exports
export { createPost, getAllPosts, getPostById, createMediaFile };
