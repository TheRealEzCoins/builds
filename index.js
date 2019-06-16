$(function() {
    $.getJSON("https://thebusybiscuit.github.io/builds/repos.json", function(repos) {
        $("#repos").html("");
        var profiles = [];

        for (var repo in repos) {
            if (!profiles.includes(repo.split("/")[0])) {
                console.log("Found Author \"" + repo.split("/")[0] + "\"");
                profiles.push(repo.split("/")[0]);
                addProfile(repo.split("/")[0], repos);
            }
        }

        console.log(profiles);
    });
});

function addProfile(user, repos) {
    $("#repos").append('<div class="box" style="width: 65%; margin: 2vh auto;"><a style="padding-top: 1vh;" class="link_build link_repo" href="https://github.com/' + user + '">' + user + '</a><table id="projects_' + user + '" class="info_table"></table></div>');
    var table = $("#projects_" + user);

    for (var repo in repos) {
        if (repo.split("/")[0] !== user) continue;

        console.log("Found Project \"" + repo + "\"");
        addRepository(table, user, repo.split('/')[1].split(":")[0], repo.split('/')[1].split(":")[1]);
    }
}

function addRepository(table, owner, repo, branch) {
    let html = "";

    html += "<tr><td class=\"icon\"><img class=\"icon\" src=\"https://thebusybiscuit.github.io/content/octicons/beaker.svg\"></td>";
    html += '<td class="table_label" style="width: auto;"><a class="link_info" href="' + owner + '/' + repo + '/' + branch + '">' + (owner + "/" + repo + " (" + branch + ")") + "</a></td><td>";
    html += '<img style="float: right;" src="https://thebusybiscuit.github.io/builds/' + owner + '/' + repo + '/' + branch + '/badge.svg"/></td></tr>';

    table.append(html);
}
