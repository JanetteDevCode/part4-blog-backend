const listHelper = require('../utils/list_helper');

const listWithOneBlog = [{
  _id: '5a422aa71b54a676234d17f8',
  title: 'Go To Statement Considered Harmful',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 5,
  __v: 0
}];

const listWithManyBlogs = [{
  _id: '5a422a851b54a676234d17f7',
  title: 'React patterns',
  author: 'Michael Chan',
  url: 'https://reactpatterns.com/',
  likes: 7,
  __v: 0
} /* index 0 */, {
  _id: '5a422aa71b54a676234d17f8',
  title: 'Go To Statement Considered Harmful',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 5,
  __v: 0
} /* index 1 */, {
  _id: '5a422b3a1b54a676234d17f9',
  title: 'Canonical string reduction',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
  likes: 12,
  __v: 0
} /* index 2 */, {
  _id: '5a422b891b54a676234d17fa',
  title: 'First class tests',
  author: 'Robert C. Martin',
  url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
  likes: 10,
  __v: 0
} /* index 3 */, {
  _id: '5a422ba71b54a676234d17fb',
  title: 'TDD harms architecture',
  author: 'Robert C. Martin',
  url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
  likes: 0,
  __v: 0
} /* index 4 */, {
  _id: '5a422bc61b54a676234d17fc',
  title: 'Type wars',
  author: 'Robert C. Martin',
  url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
  likes: 2,
  __v: 0
} /* index 5 */];

test('dummy returns one', () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);

  expect(result).toBe(1);
});

describe('total likes', () => {
  test('of an empty blog list is zero', () => {
    const result = listHelper.totalLikes([]);

    expect(result).toBe(0);
  });

  test('when a list has only one blog is the likes of that blog', () => {
    const result = listHelper.totalLikes(listWithOneBlog);

    expect(result).toBe(5);
  });

  test('of a list with more than one blog is calculated right', () => {
    const result = listHelper.totalLikes(listWithManyBlogs);

    expect(result).toBe(36);
  });
});

describe('favorite blog', () => {
  test('of an empty blog list is undefined', () => {
    const result = listHelper.favoriteBlog([]);

    expect(result).toEqual(undefined);
  });

  test('when list has only one blog is that blog', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog);

    expect(result).toEqual({
      title: listWithOneBlog[0].title,
      author: listWithOneBlog[0].author,
      likes: listWithOneBlog[0].likes
    });
  });

  test('of a list with more than one blog has the most likes', () => {
    const result = listHelper.favoriteBlog(listWithManyBlogs);

    expect(result).toEqual({
      title: listWithManyBlogs[2].title,
      author: listWithManyBlogs[2].author,
      likes: listWithManyBlogs[2].likes
    });
  });

  test('of a list where more than one blog has the most likes returns the first of those', () => {
    const listWithManyBlogsExtended = listWithManyBlogs.concat({
      _id: 'aa422b3a1b54a676234d17f1',
      title: 'Another Day, Another Post',
      author: 'Prolific Writer',
      url: 'http://prolificwriter.net',
      likes: 13,
      __v: 0
    } /* index 6 */,  {
      _id: 'aa422b3a1b54a676234d17f2',
      title: 'What to Write...',
      author: 'Prolific Writer',
      url: 'http://prolificwriter.net',
      likes: 13,
      __v: 0
    } /* index 7 */);

    const result = listHelper.favoriteBlog(listWithManyBlogsExtended);

    expect(result).toEqual({
      title: listWithManyBlogsExtended[6].title,
      author: listWithManyBlogsExtended[6].author,
      likes: listWithManyBlogsExtended[6].likes
    });
  });
});

describe('author with most blogs', () => {
  test('of an empty blog list is undefined', () => {
    const result = listHelper.mostBlogs([]);

    expect(result).toEqual(undefined);
  });

  test('of a list with one blog is its author', () => {
    const result = listHelper.mostBlogs(listWithOneBlog);

    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1
    });
  });

  test('of a list with more than one blog', () => {
    const result = listHelper.mostBlogs(listWithManyBlogs);

    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    });
  });

  test('of a list with more than one blog where there is more than one top blogger', () => {
    const listWithManyBlogsExtended = listWithManyBlogs.concat({
      _id: 'aa422b3a1b54a676234d17f1',
      title: 'Another Day, Another Post',
      author: 'Prolific Writer',
      url: 'http://prolificwriter.net',
      likes: 13,
      __v: 0
    } /* index 6 */,  {
      _id: 'aa422b3a1b54a676234d17f2',
      title: 'What to Write...',
      author: 'Prolific Writer',
      url: 'http://prolificwriter.net',
      likes: 13,
      __v: 0
    } /* index 7 */, {
      _id: 'aa422b3a1b54a676234d17f3',
      title: 'I Am Out of Ideas',
      author: 'Prolific Writer',
      url: 'http://prolificwriter.net',
      likes: 100,
      __v: 0
    } /* index 8 */);

    const result = listHelper.mostBlogs(listWithManyBlogsExtended);
    console.log(result);

    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    });
  });
});