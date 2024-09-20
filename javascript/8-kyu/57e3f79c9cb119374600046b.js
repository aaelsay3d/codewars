function hello(name="") {
  if (name !== "") {
    return `Hello, ${name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}!`;
  } return `Hello, World!`;
}
