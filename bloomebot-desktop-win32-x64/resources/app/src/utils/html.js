export const goToLink = link => {
  const a = document.createElement('a');
  a.href = link;
  a.target = 'blank';
  a.click();
};
