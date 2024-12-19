function checkInput(url) {
  const pattern =
    /^((https?):\/\/)?([a-z0-9\-]+\.)+[a-z]{2,}(\/[a-zA-Z0-9\-#]+\/?)*$/;
  return pattern.test(url);
}

export { checkInput };
