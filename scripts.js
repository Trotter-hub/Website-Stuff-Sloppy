/* Reset Defaults */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background: #f4f4f4;
  color: #333;
}

/* Header & Navigation */
header {
  background: #222;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
}

.logo img {
  width: 120px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: 0.3s;
}

nav ul li a:hover {
  color: #ff6b6b;
}

/* Banner */
.banner {
  background: linear-gradient(45deg, #ff6b6b, #ff9f9f);
  text-align: center;
  padding: 60px;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.banner p {
  font-size: 1.2rem;
}

/* Sections */
.section {
  background: white;
  margin: 40px auto;
  padding: 40px;
  max-width: 1000px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.section:hover {
  transform: scale(1.02);
}

.section img {
  width: 100px;
  margin-bottom: 20px;
}

.section h2 {
  font-size: 2rem;
  color: #333;
}

.section p {
  font-size: 1.1rem;
  color: #666;
}

/* Footer */
footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 20px;
}

