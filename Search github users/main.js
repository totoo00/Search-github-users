var form = $('#search');
var input = $('input#username');
var result = $('#result');

form.on('submit', function(e) {
    e.preventDefault();
    $.ajax("https://api.github.com/users/" + input.val())
        .done(function(data) {
            var html =
                '<div>用户名:' + data.login + '</div>' +
                '<div>自我介绍:' + (data.bio || '无') + '</div>' +
                '<div>粉丝:' + (data.followers || '无') + '</div>' +
                '<div>作品数:' + (data.public_repos || '无') + '</div>' +
                '<div>所关注用户数:' + (data.following || '无') + '</div>'
            result.html(html);
        })
})
