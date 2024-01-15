(() => {
    const tabs = document.querySelectorAll('[data-tab]');

    inativarTabs = () => {
        tabs.forEach(tab => tab.classList.remove('active'))
    }
    esconderConteudos = () => {
        const conteudos = document.querySelectorAll('[data-conteudo]')

        conteudos.forEach(conteudo => conteudo.classList.add('hidden'))
    }


    ativarConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)

        conteudo.classList.remove('hidden')

        conteudo.classList.add('active');
    }

    ativarTab = (tab) => {
        tab.classList.add('active')
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        const valor = tab.dataset.tab

        esconderConteudos()
        inativarTabs()
        ativarConteudo(valor)
        ativarTab(tab)
    }))
})()
