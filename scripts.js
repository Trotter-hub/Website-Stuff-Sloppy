/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and general layout */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

header h1 {
  text-align: center;
  font-size: 2.5rem;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}

section {
  padding: 40px 0;
  background-color: #fff;
  margin-bottom: 20px;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

footer p {
  font-size: 0.9rem;
}
