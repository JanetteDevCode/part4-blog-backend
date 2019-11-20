const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const initialValue = 0;

  return blogs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.likes;
  }, initialValue);
};

const favoriteBlog = (blogs) => {
  const initialValue = 0;
  const mostLikes = blogs.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue.likes);
  }, initialValue);

  const favoriteBlog = blogs.find((blog) => {
    return blog.likes === mostLikes;
  });

  return favoriteBlog
    ? {
      title: favoriteBlog.title,
      author: favoriteBlog.author,
      likes: favoriteBlog.likes
    }
    : undefined;
};

const mostBlogs = (blogs) => {
  const authors = [
    ...new Set(
      blogs.map((blog) => {
        return { author: blog.author, blogs: 0 };
      })
    )
  ];

  authors.forEach((author) => {
    blogs.map((blog) => {
      if (blog.author === author.author) {
        return author.blogs += 1;
      }
      return;
    });
  });

  const initialValue = 0;
  const mostBlogs = authors.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue.blogs);
  }, initialValue);

  const authorMostBlogs = authors.find((author) => {
    return author.blogs === mostBlogs;
  });

  return authorMostBlogs;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
};