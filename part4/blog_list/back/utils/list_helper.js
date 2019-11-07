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

module.exports = {
  dummy, totalLikes, favoriteBlog
}