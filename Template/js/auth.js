$(function() {
  var loginWrapper = $('.login-wrapper'),
    loginBtn = loginWrapper.find('.btn-login'),
    regBtn = loginWrapper.find('.btn-register'),
    signUp = loginWrapper.find('.login-block-signup'),
    signIn = loginWrapper.find('.login-block-signin')

  loginBtn.on('click', function() {
    signIn.slideDown()
    signUp.slideUp()
  })

  regBtn.on('click', function() {
    signIn.slideUp()
    signUp.slideDown()
  })
})

$(window).on('load', function() {
  // Set timeout for page loader

  setTimeout(function() {
    $('.page-loader').addClass('loaded')
  }, 1000)
})
