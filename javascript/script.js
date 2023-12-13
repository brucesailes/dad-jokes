document.getElementById('joke-button').addEventListener('click', () => {
    fetch('http://localhost:3000/random-joke')
      .then(response => response.json())
      .then(data => {
        document.getElementById('joke').innerHTML = `Question: ${data.question}<br>Answer: ${data.answer}`;
      })
      .catch(error => {
        alert(error);
      });
  });
  



