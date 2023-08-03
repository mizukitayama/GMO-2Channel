export const POSTS = {
  GET: "/posts/",
  SINGLE: {
    DELETE: "/posts/<post_id>/",
    QUESTIONS: {
      POST: "/posts/<post_id>/questions/",
      SINGLE: {
        REPLIES: {
          POST: "/posts/<post_id>/questions/<question_id>/replies/",
        },
      },
    },
  },
  CATEGORIES: {
    GET: "/posts/categories/",
  },
};

export const CATEGORIES = {
  REGISTER: {
    POST: "/posts/categories/",
  },
};

export const ACCOUNTS = {
  REGISTER: {
    POST: "/accounts/register/",
  },
  LOGIN: {
    POST: "/accounts/login/",
  },
};
