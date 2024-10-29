function showQuestion(answer) {
  document.getElementById('questionSi').classList.add('hidden');
  document.getElementById('questionNo').classList.add('hidden');

  if (answer === 'si') {
      document.getElementById('questionSi').classList.remove('hidden');
  } else if (answer === 'no') {
      document.getElementById('questionNo').classList.remove('hidden');
  }
}