export function footerComponent() {
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>© 2025 Carlos Acosta. All rights reserved.</p>';
  footer.style.border = '2px solid black';
  footer.style.padding = '10px';
  footer.style.textAlign = 'center';
  footer.style.position = 'absolute';
  footer.style.right = '8px';
  footer.style.left = '8px';
  footer.style.bottom = '0';
  return footer;
}
