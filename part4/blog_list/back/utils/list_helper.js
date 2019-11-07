const lodash = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.lenght === 0) {
    return 0
  }
  let total = 0
  blogs.forEach(blog => {
    total += blog.likes
  })
  return total


  // return blogs.reduce((total, blog) => total + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((most, current) => {
    if (!most) return current
    return (most.likes > current.likes) ? most : current
  })
}

const mostBlogs = (blogs) => {
  const blogsByAuthors = lodash.groupBy(blogs, (blog) => blog.author)
  // console.log('blogsByAuthors', blogsByAuthors)
  const authors = lodash.map(blogsByAuthors, (a) => ({
    author: a[0].author,
    blogs: a.length
  }))
  // console.log('authors', authors)
  return authors.reduce((max, author) => (max.likes > author.likes) ? max : author, {})
  // return authors
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}