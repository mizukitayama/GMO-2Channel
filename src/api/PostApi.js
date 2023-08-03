import ApiClient from "./ApiClient";
import { POSTS } from "./endpoints";

export class PostApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getPosts(queries = {}) {
    const query = new URLSearchParams(queries).toString();
    const res = await this.apiClient.get(
      POSTS.GET + (query ? `?${query}` : "")
    );
    return res.post_list;
  }

  async postQuestion(postId, params) {
    return await this.apiClient.post(
      POSTS.SINGLE.QUESTIONS.POST.replace("<post_id>", postId),
      params
    );
  }

  async postReply(postId, questionId, params) {
    return await this.apiClient.post(
      POSTS.SINGLE.QUESTIONS.SINGLE.REPLIES.POST.replace(
        "<post_id>",
        postId
      ).replace("<question_id>", questionId),
      params
    );
  }

  async putPost(postId, params) {
    return await this.apiClient.put(
      POSTS.SINGLE.DELETE.replace("<post_id>", postId), params
    );
  }

  async deletePost(postId) {
    console.log(POSTS.SINGLE.DELETE.replace("<post_id>", postId));
    return await this.apiClient.delete(
      POSTS.SINGLE.DELETE.replace("<post_id>", postId)
    );
  }

  async deleteQuestion(postId, questionId) {
    return await this.apiClient.delete(
      POSTS.SINGLE.QUESTIONS.SINGLE.DELETE.replace("<post_id>", postId).replace(
        "<question_id>",
        questionId
      )
    );
  }

  async deleteReply(postId, questionId, replyId) {
    return await this.apiClient.delete(
      POSTS.SINGLE.QUESTIONS.SINGLE.REPLIES.SINGLE.DELETE.replace(
        "<post_id>",
        postId
      )
        .replace("<question_id>", questionId)
        .replace("<reply_id>", replyId)
    );
  }
}
