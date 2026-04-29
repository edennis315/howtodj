const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.page;

        links.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
