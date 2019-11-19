const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const initialValue = 0;

  return blogs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.likes;
  }, initialValue);
};

module.exports = {
  dummy,
  totalLikes
};