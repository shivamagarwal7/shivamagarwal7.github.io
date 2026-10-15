try { const saved = localStorage.getItem('site-theme'); document.documentElement.classList.toggle('dark', saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches); } catch {}
