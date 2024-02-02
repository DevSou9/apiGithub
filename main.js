$(document).ready(function () {
    const endpoint = 'https://api.github.com/users/DevSou9';

    (async () => {
        try {
            const resposta = await fetch(endpoint);
            const result = await resposta.json();
            $('#avatar').attr('src', result.avatar_url);
            $('#name').text(result.name);
            $('#login').text(`@${result.login}`);
            $('#numero-repositorio').text(result.public_repos)
            $('#seguidores').text(result.following);
            $('#seguindo').text(result.followers);
            $('#url').attr({ 'href': result.html_url, 'target': '_blank' })

        }
        catch (error) {
            alert(`Erro: ${error}`)
        }

    })()
})