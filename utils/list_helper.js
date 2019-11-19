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
  const likes = blogs.map((blog) => {
    return blog.likes;
  });
  const mostLikesIndex = likes.indexOf(mostLikes);
  const favoriteBlog = blogs[mostLikesIndex];

  return favoriteBlog
    ? {
      title: favoriteBlog.title,
      author: favoriteBlog.author,
      likes: favoriteBlog.likes
    }
    : undefined;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};